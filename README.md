# min-wheel
[![npm version](https://badge.fury.io/js/min-wheel.svg)](https://badge.fury.io/js/min-wheel)
[![Build Status](https://travis-ci.org/strugglebak/min-wheel.svg?branch=master)](https://travis-ci.org/strugglebak/min-wheel)

## 介绍
min-wheel 是一个小型的组件轮子，基于 vue 开发

作者: strugglebak

## 开始使用
1. 配置 
使用本框架前，你需要先对 CSS 做如下配置
  ```
  * { margin:0; padding: 0; box-sizing: border-box; }
  *::before, *::after { box-sizing: border-box; }
  ```

2. 安装 min-wheel
  ```
  npm i min-wheel --save
  # OR
  yarn add min-wheel
  ```

3. 引入 min-wheel
  ```
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
  ```

## 文档

## 提问

## 变更记录
- v 0.1.0

  增加 collapse 组件
  
- v 0.0.9
    
    增加 popover 组件

- v 0.0.8

  增加 tab 组件

- v 0.0.7

    增加 toast 组件

- v 0.0.6

    增加 layout 组件

- v 0.0.5

    增加 grid 组件

- v 0.0.4

    增加 input 组件

- v 0.0.3

    接入 travis ci,并加了 button 组件的测试用例文件

- v 0.0.1

    基本完成 button 以及 icon 组件，以及最后的四个测试用例

## 联系方式

## 贡献代码
