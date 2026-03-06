import { globbySync } from 'globby';
import path from 'node:path';
import fs from 'node:fs';
import matter from 'gray-matter';

export class VitePressConfig {
  nav: any[] = [];
  sidebar: any = {};
  packageName = 'mobile-ui';
  rewrites: Record<string, string> = {};
  docConfig: Record<string, any> = {};
  groups = [
    {
      key: 'components',
      name: '组件',
      cGroups: ['基础', '数据展示', '布局', '容器'],
    },
    // {
    //   key: 'hooks',
    //   name: 'Hooks',
    // },
  ];
  parentDir = path.join(__dirname, '../../../'); // 上一级
  paths = globbySync(`**/**/packages/${this.packageName}/**/*.md`, {
    cwd: this.parentDir,
    ignore: ['node_modules', 'dist', 'docs'].map(dir => `!**/${dir}/**`),
    // absolute: true, // 返回绝对路径
  }).filter(dir => dir.includes('src'));
  constructor() {
    this.main();
  }

  main() {
    this.getRewrites();
    const groupObj: any = {};
    this.groups.forEach(group => {
      const paths = this.paths.filter(p => p.includes(group.key));
      groupObj[group.key] = {
        name: group.name,
        key: group.key,
        paths,
        nav: {
          // { text: '组件', link: `/components/overview` },
          text: group.name,
          link: `/${group.key}/overview`,
        },
        rewrites: this.rewrites,
        sidebar: this.getSidebar(paths),
      };
    });
    this.docConfig = groupObj as any;
    this.groups.forEach(group => {
      this.nav.push(this.docConfig[group.key].nav);
      this.sidebar[group.key] = [...this.docConfig[group.key].sidebar];
    });
  }

  getOverview() {}

  getRewrites() {
    this.paths.forEach(p => {
      const path = p.replace('mobile/', '');
      this.rewrites[path] = this.getRewritePath(path);
    });
  }

  getRewritePath(path: string) {
    return path.split('/src/')?.[1].toLowerCase();
  }

  getSidebar(paths: string[]) {
    // paths = paths.filter(p => !p.includes('overview'));
    const fileList = paths.map(p => {
      return {
        ...this.getDocInfo(p),
        path: p,
      };
    });
    const sidebar: any[] = [];
    const overview: any = fileList[0];
    this.groups
      .filter(v => v.cGroups)
      .forEach(g => {
        g.cGroups?.forEach(group => {
          const item = {
            text: group,
            items: fileList
              .filter(f => (f as any).group === group)
              .map(item => {
                return {
                  link: item.link,
                  text: item.text,
                };
              }),
          };
          sidebar.push(item);
        });
      });
    return [overview, ...sidebar];
  }

  getDocInfo(filePath: string) {
    const content = fs.readFileSync(
      path.resolve(this.parentDir, filePath),
      'utf8',
    );
    const text =
      content
        ?.replace(/^---[\s\S]*?---\s*/, '')
        .match(/^#+\s+(.+)/m)?.[1]
        .trim() || null;
    return {
      ...matter(content).data,
      text,
      link: this.getRewritePath(filePath),
    };
  }
}

export const vitePressConfig = new VitePressConfig();
