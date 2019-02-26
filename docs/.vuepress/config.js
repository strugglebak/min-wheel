module.exports = {
  base: '/min-wheel/',
  head: [
    ['link', { rel: 'icon', href: 'https://i.loli.net/2019/02/26/5c75007ee8d4e.png' }]
  ],
  title: 'Min-Wheel',
  description: '一个简单小巧的 UI 框架',
  plugins: ['demo-code'],
  themeConfig: {
    logo: 'https://i.loli.net/2019/02/26/5c7501431acc7.png',
    repo: 'strugglebak/min-wheel',
    repoLabel: 'Github',
    sidebar: [
      '/zh/guide/',
      '/zh/guide/install/',
      '/zh/guide/quick-start/',
      {
        title: '组件',
        children: [
          '/zh/guide/components/ICON.md',
          '/zh/guide/components/BUTTON.md',
          '/zh/guide/components/BUTTON-GROUP.md',
          '/zh/guide/components/INPUT.md',
          '/zh/guide/components/GRID.md',
          '/zh/guide/components/LAYOUT.md',
          '/zh/guide/components/TOAST.md',
          '/zh/guide/components/TABS.md',
          '/zh/guide/components/POPOVER.md',
          '/zh/guide/components/COLLAPSE.md',
        ],
      },
    ]
  },
}

