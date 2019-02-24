---
title: Button
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

# Button 按钮

基础组件，点击触发业务逻辑。

## 基础用法
<button-demo></button-demo>

## Atrributes
组件将被渲染成 `button` 标签，所以该组件支持 `button` 标签所有的原生属性。

| 参数          | 说明          | 类型   | 默认值 | 可选值 |
|:-------------:|:--------------|:------:|:------:|:-------:|
| icon          | Icon 图标名称                                                                              | String |  ""    | error,info,down,up, next,back,loading,settings     |
| icon-position | Icon 图标出现位置                                                                          | String | left     | left,right     |
| loading       | 设置带有 loading 效果的按钮，若想触发 loading，最好与 click 事件相结合(以上已给出示例代码) | Boolean |  false    | false,true    |
