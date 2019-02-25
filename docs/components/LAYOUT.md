---
title: Layout
sidebarDepth: 0
---

<style lang="scss">
    * { margin: 0; padding: 0; box-sizing: border-box; }
    h1, h2, h3, h4, h5 {
        border-bottom: none;
    }
    h1 {
        font-size: 30px;
        line-height: 38px;
    }
    h2 {
        font-size: 24px;
        line-height: 32px;
    }
    h3 {
        font-size: 18px;
        line-height: 26px;
    }
    p {
        font-size: 14px;
    }
    .content:not(.custom) > :first-child {
        margin-top: 0;
    }
</style>

# Layout 容器布局
容器布局，可快速搭建页面常见结构，本组件底层采用 `flex` 布局，需要浏览器支持。在使用本组件进行页面布局时注意，`mw-layout` 的子组件必须是 `mw-header`,`mw-sider`,`mw-content`,`mw-footer`,
若使用嵌套结构，则 `mw-layout` 的子组件必须是 `mw-layout`,请在 `mw-layout` 的视图下进行布局操作。

## 基础用法
<ClientOnly>
<layout-demo></layout-demo>
</ClientOnly>

