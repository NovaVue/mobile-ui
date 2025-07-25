const group = 'styles';
export function getSidebar(genSidebar: any) {
  console.log(
    genSidebar({
      group,
      path: '/themes',
    }),
  );
  const result = [
    {
      text: '指南',
      link: `${group}/guide`,
    },
    {
      // collapsed: true,
      ...genSidebar({
        group,
        link: true,
        path: '/themes',
      }),
      text: 'themes',
    },
  ];
  return result;
}

export function getConfig(genSidebar: any) {
  const options = {
    nav: { text: '主题', link: `/${group}/guide` },
    sidebar: {
      [`/${group}/`]: getSidebar(genSidebar),
    },
    rewrites: {
      [`packages/:zto-${group}/src/:id`]: `${group}/:id`,
      [`packages/:zto-${group}/src/(.*)/:id`]: `${group}/(.*)/:id`,
    },
  };
  return options;
}
