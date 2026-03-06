import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import VueJsx from '@vitejs/plugin-vue-jsx';
import Tailwindcss from '@tailwindcss/vite';
import path, { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const outputPath = path.resolve(__dirname, `./dist/${mode}`);

  return {
    build: {
      outDir: outputPath,
      lib: {
        entry: resolve(__dirname, 'src/index.js'),

        // formats: ['es', 'umd', 'cjs'],
        formats: ['es', 'umd'],
        name: 'index',
        fileName: (format, entryName) => {
          const suffix: Record<string, string> = {
            es: 'mjs',
            cjs: 'cjs',
            umd: 'umd.cjs',
          };
          return `${entryName}.${suffix[format]}`;
        },
      },
      minify: true,
      sourcemap: mode === 'development', //生成sourcemap文件
      rollupOptions: {
        // 确保外部化处理那些
        // 你不想打包进库的依赖
        external: ['axios', '**/demo/*'],
        output: {
          format: 'es',
          // file: outputPath,
          compact: true,

          // 在 UMD 构建模式下为这些外部化的依赖
          // 提供一个全局变量
          globals: {
            axios: 'axios',
          },
        },
      },
    },
    plugins: [Tailwindcss(), Vue(), VueJsx()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  };
});
