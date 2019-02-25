---
title: Collapse
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

# Popover 折叠面板
将内容区折叠或展开

## 基础用法
<ClientOnly>
<collapse-demo></collapse-demo>
</ClientOnly>

## Attributes
### mw-collapse
| 参数          | 说明          | 类型   | 默认值 | 可选值 |
|:-------------:|:-------------|:------:|:------:|:------:|
| accordion     |  设置面板是否为手风琴模式 | Boolean |  false    | false,true     |
| selected      |  设置指定打开某项面板 | String/Array |  --    | --     |

### mw-collapse-item
| 参数          | 说明          | 类型   | 默认值 | 可选值 |
|:-------------:|:-------------|:------:|:------:|:------:|
| title         | 面板 title | String |  --(必填)    | --     |
| name          | 面板标识 | String/Number |  --    | --     |

::: warning
当面板为`手风琴` 模式时，`selected` 参数必须为字符串 `String`; 而面板为普通模式时，`selected` 参数必须为数组 `Array`
:::

