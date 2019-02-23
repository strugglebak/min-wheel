---
title: Input
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

# Input 输入框
基础表单组件，支持 `v-model` 绑定以及原生 JS 事件。

## 基础用法
<input-demo></input-demo>

## Atrributes

| 参数          | 说明          | 类型   | 默认值 | 可选值 |
|:-------------:|:--------------|:------:|:------:|:-------:|
| name          | Input 输入框的名称  | String |  ""    | --     |
| alignment     | Input 输入框名称和提示信息的排列方式   | String | horizontal  | horizontal,vertical     |
| value         | Input 输入框 value,原生属性 | String |  ""    | --   |
| placehoder    | Input 输入框 placeholder,原生属性 | String |  ""    | --   |
| disabled      | Input 输入框 disabled,原生属性 | Boolean |  false    | false,true   |
| readonly      | Input 输入框 readonly,原生属性 | Boolean |  false    | false,true   |
| type          | Input 输入框 type,原生属性 | String |  text    | text,password   |
| error         | 错误状态，可输入错误状态时的内容 | String |  ""    | --   |
| info          | 正常状态，可输入正常状态时的内容 | String |  ""    | --   |
