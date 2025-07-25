import { defineConfig } from 'vitepress';
import { globbySync } from 'globby';
import path from 'node:path';
import fs from 'node:fs';

import { getConfig as getMobileConfig } from '../../../packages/mobile/vitepress.config';
// import { getConfig as getDesktopConfig } from '../../packages/desktop/vitepress.config';
import { getConfig as getStylesConfig } from '../../../packages/styles/vitepress.config';

const parentDir = path.join(__dirname, '../../../'); // 上一级
const mobileConfig = getMobileConfig(getSidebar);
// const desktopConfig = getDesktopConfig(getSidebar);
// const requestConfig = getRequestConfig(getSidebar);
const stylesConfig = getStylesConfig(getSidebar);
// https://vitepress.dev/reference/site-config
export default defineConfig({
  // sitemap: {
  //   hostname: 'https://example.com',
  //   transformItems: (items) => {
  //     // 添加新项目或修改/筛选现有选项
  //     console.log('sitemap items', items);
  //     return items.map(item => {
  //       return {
  //         ...item,
  //         url: item.url.replace('README', 'readme'), // 移除末尾的 index
  //       }
  //     })
  //   }
  // },
  cacheDir: './.vitepress/.cache',
  title: 'ZTO FED',
  description: 'ZTO FED Develop',
  lang: 'zh-Hans',
  cleanUrls: true, // 移除 .html 后缀
  rewrites: {
    'docs/(.*)': '(.*)',
    ...mobileConfig.rewrites,
    // ...desktopConfig.rewrites,
    ...stylesConfig.rewrites,
  },
  srcDir: '../',
  outDir: './dist',
  vite: {
    server: {
      port: 8888,
    },
    // build: {
    //   rollupOptions: {
    //     output: {
    //       // 自定义 HTML 文件命名规则
    //       entryFileNames: 'index.html',
    //       // chunkFileNames: 'assets/[name]-[hash].js',
    //       // assetFileNames: 'assets/[name]-[hash][extname]',
    //     },
    //   },
    // },
  },

  markdown: { lineNumbers: true },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      mobileConfig.nav,
      // desktopConfig.nav,
      // requestConfig.nav,
      stylesConfig.nav,
    ],

    sidebar: {
      ...mobileConfig.sidebar,
      // ...desktopConfig.sidebar,
      ...stylesConfig.sidebar,
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    outline: {
      label: '页面导航',
      level: 'deep',
    },

    lastUpdated: {
      text: '最后更新于',
    },

    notFound: {
      title: '页面未找到',
      quote:
        '但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。',
      linkLabel: '前往首页',
      linkText: '带我回首页',
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容',
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档',
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                },
              },
            },
          },
        },
        miniSearch: {},
      },
    },
  },
});

function getMarkdownTitle(filePath: string) {
  try {
    const content = fs.readFileSync(path.resolve(parentDir, filePath), 'utf8');
    // 1. 跳过 Front Matter（如果存在）
    return (
      content
        ?.replace(/^---[\s\S]*?---\s*/, '')
        .match(/^#+\s+(.+)/m)?.[1]
        .trim() || null
    );
  } catch (err) {
    console.error('读取文件失败:', err);
    return null;
  }
}
export function getSidebar(options: any) {
  const { path, group, link } = options;
  const packages = globbySync(
    `**/**/packages/zto-${group}/**/${path}/**/index.md`,
    {
      cwd: parentDir,
      ignore: ['node_modules', 'dist', 'docs'].map(dir => `!**/${dir}/**`),
      // absolute: true, // 返回绝对路径
    },
  );

  const items = packages.map(page => {
    const text = getMarkdownTitle(page);
    const link = page
      .replace('packages/zto-', '/')
      .replace('/src', '')
      .replace('.md', '');
    return {
      text: text,
      link: link,
    };
  });
  if (link) {
    return items?.[0];
  }
  return items;
}
