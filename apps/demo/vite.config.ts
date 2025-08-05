import { URL, fileURLToPath } from 'node:url';
import path from 'node:path';
import Tailwindcss from '@tailwindcss/vite';

import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import VueJsx from '@vitejs/plugin-vue-jsx';
import vueDevTools from 'vite-plugin-vue-devtools';
const mobile_ui = path.resolve(__dirname, '../../packages/mobile-ui/src/');
const mobile_ui_demo = path.resolve(
  __dirname,
  '../../packages/mobile-ui/src/demo.ts',
);
const styles = path.resolve(__dirname, '../../packages/styles/src/');
// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 9999,
  },
  plugins: [
    Vue(),
    VueJsx(),
    Tailwindcss(),
    // vueDevTools(),
  ],
  resolve: {
    alias: {
      '@novavue/mobile-ui': fileURLToPath(new URL(mobile_ui, import.meta.url)),
      '@novavue/mobile-ui/demo': fileURLToPath(
        new URL(mobile_ui_demo, import.meta.url),
      ),
      '@novavue/styles': fileURLToPath(new URL(styles, import.meta.url)),
    },
  },
});
