---
title: Tabs
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

# Tabs 标签
Tabs 标签用来分离内容上有关联的数据内容。

## 基础用法
<tabs-demo></tabs-demo>

## Attributes
### mw-tabs
| 参数          | 说明          | 类型   | 默认值 | 可选值 |
|:-------------:|:-------------|:------:|:------:|:------:|
| selected      |  选择 tabs-item 项的名字 | String |  --(必填)    | --     |
| enableExtra   |  设置是否启用附加内容 | Boolean |  false    | false,true     |

### mw-tabs-item
| 参数          | 说明          | 类型   | 默认值 | 可选值 |
|:-------------:|:-------------|:------:|:------:|:------:|
| name          |  设置 tabs-item 项名字,对应于 selected | String |  --(必填)    | --     |
| order         |  设置 tabs-item 项 key | Number/String |  --(必填)    | --     |
| disabled      |  禁用 tabs-item 项 | Boolean |  false    | false,true     |

### mw-tabs-pane
| 参数          | 说明          | 类型   | 默认值 | 可选值 |
|:-------------:|:-------------|:------:|:------:|:------:|
| name          |  设置 tabs-pane 项名字,对应于 selected | String |  --(必填)    | --     |

::: tip
组件内部使用 `eventHub` 来充当数据流的传递角色，因此内部有两种事件: `selected` 和 `position-changed`,你可以使用 Vue 的 `.sync` 操作符
来对父组件本地 `data` 进行赋值
:::




