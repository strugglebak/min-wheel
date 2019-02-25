module.exports = {
  title: 'Min-Wheel',
  description: 'Just playing around',
  plugins: ['demo-code'],
  base: '/min-wheel/',
  themeConfig: {
    sidebar: [
      '/',
      '/install/',
      '/quick-start/',
      {
        title: '组件',
        children: [
          '/components/ICON.md',
          '/components/BUTTON.md',
          '/components/BUTTON-GROUP.md',
          '/components/INPUT.md',
          '/components/GRID.md',
          '/components/LAYOUT.md',
          '/components/TOAST.md',
          '/components/TABS.md',
          '/components/POPOVER.md',
          '/components/COLLAPSE.md',
        ],
      },
    ]
  },
}

