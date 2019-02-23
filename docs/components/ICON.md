---
title: Icon
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
</style>

# Icon 图标

基础组件，提供一些常用图标集合。

## 基础用法
<icon-demo></icon-demo>

## Attributes
`Icon` 图标实际上还是对 `svg` 标签的封装，所以你可以在它上面对其 `width`,`height`,`fill` 等属性样式进行设置。

| 参数          | 说明          | 类型   | 默认值 | 可选值 |
|:-------------:|:-------------:|:------:|:------:|:------:|
| name          | Icon 图标名称 | String | --     | --     |

