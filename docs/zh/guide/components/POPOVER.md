---
title: Popover
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

# Popover 弹出层
用于展示提示信息。

## 基础用法
<ClientOnly>
<popover-demo></popover-demo>
</ClientOnly>

## Attributes
| 参数          | 说明          | 类型   | 默认值 | 可选值 |
|:-------------:|:-------------|:------:|:------:|:------:|
| offset        |  设置弹出内容的偏移量,单位为 px | String/Number |  16    | --     |
| position      |  设置弹出内容的位置 | String |  top    | top,bottom,left,right     |
| width         |  设置弹出内容的宽度,单位为 px | String/Number |  200    | --     |
| trigger       |  设置弹出内容的触发方式 | String |  click    | click/hover    |

