---
title: Toast
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

# Toast 组件

基础组件，用来弹出用户提示信息。

## 基础用法
<toast-demo></toast-demo>

## Method
为了不污染 `Vue` 的全局属性，这里专门提供了一个 `$toast` 的方法，你所需要做的就是根据文档引入插件，然后配置参数来使用。
| 参数           | 说明          | 类型   | 默认值 | 可选值 |
|:--------------:|:-------------|:------:|:------:|:------:|
| isAutoClose    | 自动关闭 | Boolean | false     | false,true     |
| isHtml         | 解析弹出信息成 html 文本 | Boolean | false     | false,true     |
| autoCloseDelay | 自动关闭延时,单位为 ms | Number | 3000     | --     |
| closeButton    | 弹出时是否需要显示关闭按钮 | Object | {text: '关闭', callback: undefined}     | --     |
| position       | 设置 toast 弹出位置 | String | top     | top,middle,bottom     |

::: tip
由于 toast 组件弹出不能被其他组件覆盖，所以请在 css 的设置上加上 `.toast { z-index: 999 !important; }`
:::

