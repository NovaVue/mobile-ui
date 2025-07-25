import { defineConfig } from 'vite';
import path from 'node:path';
// import AutopreFixer from 'autoprefixer';
// import Cssnano from 'cssnano';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  build: {
    cssCodeSplit: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.css'),
      name: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/index.css'),
        // theme: path.resolve(__dirname, 'src/theme.css'),
      },
      // 确保外部化不需要打包的依赖
      external: [],
      output: {
        // 配置全局变量名
        globals: {},
      },
    },
    cssMinify: true,
  },
  plugins: [tailwindcss()],
});
