# min-wheel
min-wheel 是一个小型的组件轮子，基于 vue 开发

作者: strugglebak

## 配置 
使用本框架前，先对 CSS 做如下配置
```
* { margin:0; padding: 0; box-sizing: border-box; }
html {
    --font-size: 14px;         
    --button-height: 32px;     
    --button-padding: 0 1em;   
    --button-bg-color: #FFFFFF;
    --button-active-bg-color: #EEEEEE;
    --button-border: 1px solid #C8C8C8;
    --button-border-radius: 4px;
    --button-hover-border-color: #666666;
}
```

## 使用 vue-cli
安装
```
yarn add min-wheel
```

假设你的应用为 `src/App.vue`

在 `src/App.vue` 中引入 `min-wheel` 组件
```
<template>
    ...
    <!-- 这里使用组件 -->
    <mw-button>欢迎使用 min-wheel 组件!</mw-button>
</template>
<script>
    ...
    import {Button} from 'min-wheel'
    import 'min-wheel/dist/index.css'

    export default {        
      name: 'app',          
      components: {         
        ...,         
        'mw-button': Button,       
      }      
    }
</script>
<style>
    ...
    * { margin:0; padding: 0; box-sizing: border-box; }
    html {
        --font-size: 14px;         
        --button-height: 32px;     
        --button-padding: 0 1em;   
        --button-bg-color: #FFFFFF;
        --button-active-bg-color: #EEEEEE;
        --button-border: 1px solid #C8C8C8;
        --button-border-radius: 4px;
        --button-hover-border-color: #666666;
    }
</style>
```

重启 serve
```
yarn serve
```


## 版本

- v 0.0.3
接入 travis ci,并加了 button 组件的测试用例文件

- v 0.0.1
基本完成 button 以及 icon 组件，以及最后的四个测试用例
