---
title: Grid
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
</style>

# Grid 网格布局
该 `Grid` 组件分栏格子数为 24,可通过它快速构建网页布局。

## 基础用法
<ClientOnly>
<grid-demo></grid-demo>
</ClientOnly>

## 响应式布局

可同时对多个参数进行配置，适应不同尺寸设备。

<grid-demo-1></grid-demo-1>

## Attributes
### mw-row
| 参数          | 说明          | 类型   | 默认值 | 可选值 |
|:-------------:|:-------------:|:------:|:------:|:------:|
| ditch         | 设置分栏间隙，单位为 px | String/Number | ""/0     | --     |
| alignment     | 设置 row 里元素放置位置 | String | left     | left,center,right     |

### mw-col
| 参数          | 说明          | 类型   | 默认值 | 可选值 |
|:-------------:|:-------------:|:------:|:------:|:------:|
| scale         | 设置 col 该列所占 row 行的比例 | String/Number | --     | 1 到 24     |
| offset        | 设置 col 该列距离左边的 col 列的比例  | String/Number | --     | 1 到 24     |
| pad           | 576px <= 设备像素宽度 < 768px 时激活  | Object | --     | 1 到 24     |
| narrowpc      | 768px <= 设备像素宽度 < 992px 时激活  | Object | --     | 1 到 24     |
| pc            | 992px <= 设备像素宽度 < 1200px 时激活 | Object | --     | 1 到 24     |
| widepc        | 1200px <= 设备像素宽度时激活          | Object | --     | 1 到 24     |

::: tip
pad,narrowpc,pc,widepc 为不同屏幕宽度下分栏所占宽度的配置参数,若不设置，则默认设备宽度为小于 576px 。
:::
