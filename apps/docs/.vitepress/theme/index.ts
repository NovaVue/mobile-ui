// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
import type { Theme } from 'vitepress';
import { theme as DefaultTheme } from './client/theme-default';
import './style.css';
import '@zve/styles/themes/light-default/index.css';
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout as any, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  },
} satisfies Theme;
