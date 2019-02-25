---
title: 快速上手
sidebarDepth: 0
---

# 快速上手

## 前言
在使用本框架前，我们默认您已经充分了解过 `Vue` 的基础知识，`Vue` 组件的相关技术。
若您还不具备条件，我们建议您先从 [vuejs.org](https://vuejs.org/) 开始学习。

## 提前准备
由于组件样式基于 `box-sizing: border-box;` 盒模型,所以您**必须**要在您的样式中做如下 `css` 配置
``` css
* { margin:0; padding: 0; box-sizing: border-box; }
*::before, *::after { box-sizing: border-box; }
```

::: tip
本组件关于 `Vue` 的指令一律采用缩写形式，为了与 `String` 类型的数据兼容，在传数据的类型为 `Number` 或 `Boolean` 时请在属性前加 `:` 符号，
不加 `:` 符号 `Vue` 指令会自动识别其为 `String`,会导致一些 bug,请开发者注意。
:::

## 如何使用
您可以在您的`*.vue`单文件组件中直接做如下引用
``` js
...
import Vue from 'vue'
import {Button} from 'min-wheel'
import 'min-wheel/dist/index.css'

export default {
  name: 'app',
  components: {
    ...,
    'mw-button': Button,
  }
}
```
或者在您的 `webpack` 构建工具的入口文件 `index.js` 中引入
``` js
import Vue from 'vue'
import {Button} from 'min-wheel'
import 'min-wheel/dist/index.css'

Vue.component('mw-button', Button);

new Vue({
    el: '#app',
    ...
});
```
在您的 `index.html` 中直接应用
``` html
...
<mw-button>demo</mw-button>
...
```

::: warning
本组件的 `css` 文件需要做单独引入
:::



