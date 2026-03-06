import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import VueJsx from '@vitejs/plugin-vue-jsx';
import Tailwindcss from '@tailwindcss/vite';
import path, { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';
import glob from 'fast-glob';

const __dirname = dirname(fileURLToPath(import.meta.url));

// 组件库名称
const LIB_NAME = 'NovaVue';

// 获取所有组件目录
function getComponentDirs(): string[] {
  const srcDir = resolve(__dirname, 'src');
  const dirs = fs.readdirSync(srcDir, { withFileTypes: true });
  return dirs
    .filter(dirent => dirent.isDirectory() && !dirent.name.startsWith('.'))
    .map(dirent => dirent.name);
}

// 获取组件入口配置
function getComponentEntries(): Record<string, string> {
  const entries: Record<string, string> = {};
  const componentDirs = getComponentDirs();

  for (const dir of componentDirs) {
    const indexFile = resolve(__dirname, 'src', dir, 'index.ts');

    // 检查是否有 index.ts 入口
    if (fs.existsSync(indexFile)) {
      entries[dir] = indexFile;
    }
  }

  return entries;
}

// 复制组件原始文件到输出目录
function copyComponentFiles(outDir: string) {
  const componentDirs = getComponentDirs();

  for (const dir of componentDirs) {
    const srcComponentDir = resolve(__dirname, 'src', dir);
    const destComponentDir = resolve(outDir, dir);

    // 创建目标目录
    fs.mkdirSync(destComponentDir, { recursive: true });

    // 复制 package.json
    const srcPackageJson = resolve(srcComponentDir, 'package.json');
    const destPackageJson = resolve(destComponentDir, 'package.json');
    if (fs.existsSync(srcPackageJson)) {
      // 读取源 package.json 内容并修改 types 字段
      let packageJsonContent = fs.readFileSync(srcPackageJson, 'utf-8');
      const packageJsonObj = JSON.parse(packageJsonContent);
      // 修改 main 和 module 字段指向 index.mjs
      packageJsonObj.main = './index.mjs';
      packageJsonObj.module = './index.mjs';
      // 修改 types 字段指向 index.d.ts
      if (packageJsonObj.types) {
        packageJsonObj.types = './index.d.ts';
      }

      // 写入修改后的 package.json 到目标目录
      fs.writeFileSync(
        destPackageJson,
        JSON.stringify(packageJsonObj, null, 2),
      );
    }

    // 复制 .vue 文件
    const vueFiles = glob.sync('*.vue', {
      cwd: srcComponentDir,
      absolute: true,
    });
    for (const file of vueFiles) {
      const fileName = path.basename(file);
      fs.copyFileSync(file, resolve(destComponentDir, fileName));
    }

    // 复制其他资源文件（如 css）
    const assetFiles = glob.sync('*.{css,scss,less}', {
      cwd: srcComponentDir,
      absolute: true,
    });
    for (const file of assetFiles) {
      const fileName = path.basename(file);
      fs.copyFileSync(file, resolve(destComponentDir, fileName));
    }

    // 复制并重命名 .d.ts 文件
    const dtsFiles = glob.sync('*.d.ts', {
      cwd: srcComponentDir,
      absolute: true,
    });
    for (const dtsFile of dtsFiles) {
      const dtsFileName = path.basename(dtsFile);
      // 检查是否为 [Component].d.ts 格式（如 Table.d.ts, Card.d.ts）
      if (/^[A-Z][a-zA-Z]*\.d\.ts$/.test(dtsFileName)) {
        // 将 [Component].d.ts 重命名为 index.d.ts
        const destIndexPath = resolve(destComponentDir, 'index.d.ts');
        fs.copyFileSync(dtsFile, destIndexPath);
      } else {
        // 其他 .d.ts 文件直接复制
        const destDtsPath = resolve(destComponentDir, dtsFileName);
        fs.copyFileSync(dtsFile, destDtsPath);
      }
    }
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isDev = mode === 'development';
  const outDir = resolve(__dirname, 'dist');

  // 获取组件入口
  const componentEntries = getComponentEntries();

  // 构建入口：组件
  const entries: Record<string, string> = {
    ...componentEntries,
  };

  return {
    build: {
      outDir,
      emptyOutDir: !isDev,
      cssCodeSplit: false, // CSS 内联到 JS 中
      lib: {
        entry: entries,
        formats: ['es'],
        name: LIB_NAME,
        fileName: (_, entryName) => {
          return `${entryName}/index.mjs`;
        },
      },
      // 完全禁用代码压缩，保留所有变量名
      minify: false,
      sourcemap: true, // 生成 sourcemap
      rollupOptions: {
        external: ['vue', 'axios', /^@novavue\//],
        output: {
          preserveModules: false,
          compact: false, // 禁用 compact 以保留格式
          // 严格保留入口文件的导出签名
          preserveEntrySignatures: 'strict',
          // 生成 sourcemap 文件
          sourcemap: true,
          // 使用原始名称作为导出
          entryFileNames: chunkInfo => {
            const name = chunkInfo.name;
            return `${name}/index.mjs`;
          },
          // 使用原始名称作为 chunk 文件名
          chunkFileNames: chunkInfo => {
            return `chunks/${chunkInfo.name}.mjs`;
          },
          // 保留变量名，不进行混淆
          generatedCode: {
            preset: 'es2015',
            arrowFunctions: true,
            constBindings: true,
          },
          // 不压缩导出名称
          exports: 'named',
        },
      },
    },
    plugins: [
      Tailwindcss(),
      Vue(),
      VueJsx(),
      {
        name: 'copy-files',
        closeBundle() {
          copyComponentFiles(outDir);
        },
      },
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
  };
});
