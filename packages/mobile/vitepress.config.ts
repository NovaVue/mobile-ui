const group = 'mobile';
export function getSidebar(genSidebar: any) {
  return [
    {
      text: '指南',
      link: 'mobile/guide',
    },
    {
      text: 'Components',
      // items: getSidebar('base'),
      collapsed: true,
      items: [
        {
          text: '基础',
          items: genSidebar({
            group,
            path: '/components/base',
          }),
        },
        {
          text: 'Layout',
          // items: getSidebar('base'),
          items: genSidebar({
            group,
            path: '/components/layout',
          }),
        },
      ],
    },

    {
      text: 'Hooks',
      // items: getSidebar('base'),
      collapsed: true,
      items: [
        {
          text: '基础',
          items: genSidebar({
            group,
            path: '/components/base',
          }),
        },
      ],
    },
  ];
}

export function getConfig(genSidebar: any) {
  return {
    nav: {text: '移动端 UI', link: '/mobile/guide'},
    sidebar: {
      '/mobile/': getSidebar(genSidebar),
    },
    rewrites: {
      'packages/:zto-mobile/src/:id': 'mobile/:id',
      'packages/:zto-mobile/src/(.*)/:id': 'mobile/(.*)/:id',
    },
  };
}
