module.exports = {
  base: '/min-wheel/',
  head: [
    ['link', { rel: 'icon', href: 'http://pn6gsjdem.bkt.clouddn.com/favicon.png' }]
  ],
  title: 'MinWheel',
  description: '一个简单小巧的 UI 框架',
  plugins: ['demo-code'],
  themeConfig: {
    logo: 'http://pn6gsjdem.bkt.clouddn.com/logo.png',
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

