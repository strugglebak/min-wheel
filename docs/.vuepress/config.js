module.exports = {
  title: 'Min-Wheel',
  description: 'Just playing around',
  plugins: ['demo-code'],
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
        ],
      },
    ]
  },
}

