<template>
    <div class="container"> 
        <h3>设置弹出位置</h3>
        <p><code>position</code>属性可以设置弹出位置</p>
        <div class="demo">
            <mw-button @click="$toast('点击弹出提示')">顶部弹出</mw-button>
            <mw-button @click="$toast('点击弹出提示', {position: 'middle'})">中间弹出</mw-button>
            <mw-button @click="$toast('点击弹出提示', {position: 'bottom'})">底部弹出</mw-button>
        </div>
        <prism language="html">{{ htmlCode1 }}</prism>

        <h3>设置关闭按钮</h3>
        <p><code>closeButton</code>属性是一个对象</p>
        <div class="demo">
            <mw-button @click="$toast('点击弹出提示')">有关闭按钮</mw-button>
            <mw-button @click="$toast('点击弹出提示', 
                {closeButton: null, isAutoClose: true})">无关闭按钮</mw-button>
            <mw-button @click="$toast('点击弹出提示', 
                {closeButton: {text: 'close'}})">
                设置关闭按钮文本
            </mw-button>
            <mw-button @click="$toast('点击弹出提示', 
                { closeButton: {
                    text: '关闭',
                    callback: function(){
                        sayHi();
                    }
                  }
                })">
                设置关闭按钮操作
            </mw-button>
        </div>
        <prism language="html">{{ htmlCode2 }}</prism>

        <h3>设置自动关闭延时</h3>
        <p><code>autoCloseDelay</code>属性可以设置自动关闭的时间，单位是 ms</p>
        <div class="demo">
            <mw-button @click="$toast('点击弹出提示', 
                {isAutoClose: true, autoCloseDelay: 5000})">
                延时5s关闭
            </mw-button>
            <mw-button @click="$toast('点击弹出提示', 
                {isAutoClose: true, autoCloseDelay: 1000})">
                延时1s关闭
            </mw-button>
        </div>
        <prism language="html">{{ htmlCode3 }}</prism>

        <h3>设置内容是否显示为 html</h3>
        <p><code>isHtml</code>属性可以设置是否转换 html 内容</p>
        <div class="demo">
            <mw-button @click="$toast('<h1>h1标题</h1>')">
                不转换html
            </mw-button>
            <mw-button @click="$toast('<h1>h1标题</h1>', {isHtml: true})">
                转换html
            </mw-button>
        </div>
        <prism language="html">{{ htmlCode4 }}</prism>
        <prism language="javascript">{{ javasriptCode }}</prism>
    </div>
</template>
<script>
import Vue from 'vue'
import Button from '../../../src/button'
import Toast from '../../../src/toast'
import ToastPlugin from '../../../plugins/toast-plugin'
import 'prismjs'
import Prism from 'vue-prism-component'

Vue.use(ToastPlugin);

export default {
    components: {
        'mw-button': Button,
        Prism,
    },
    data() {
        return {
            htmlCode1: `
              <!-- index.html -->
              <div id="app">
                <mw-button @click="$toast('点击弹出提示')">
                    顶部弹出
                </mw-button>
                <mw-button @click="$toast('点击弹出提示', {position: 'middle'})">
                    中间弹出
                </mw-button>
                <mw-button @click="$toast('点击弹出提示', {position: 'bottom'})">
                    底部弹出
                </mw-button>
              </div>
            `.replace(/^ {14}/gm, '').trim(),
            htmlCode2: `
              <!-- index.html -->
              <div id="app">
                <mw-button @click="$toast('点击弹出提示')">
                    有关闭按钮
                </mw-button>
                <mw-button @click="$toast('点击弹出提示', 
                    {closeButton: null, isAutoClose: true})">
                    无关闭按钮
                </mw-button>
                <mw-button @click="$toast('点击弹出提示', 
                    {closeButton: {text: 'close'}})">
                    设置关闭按钮文本
                </mw-button>
                <mw-button @click="$toast('点击弹出提示', 
                    { 
                        closeButton: {
                            text: '关闭',
                            callback: function(){ sayHi(); }
                        }
                    })">
                    设置关闭按钮操作
                </mw-button>
              </div>
            `.replace(/^ {14}/gm, '').trim(),
            htmlCode3: `
              <!-- index.html -->
              <div id="app">
                <mw-button @click="$toast('点击弹出提示', 
                    {isAutoClose: true, autoCloseDelay: 5000})">
                    延时5s关闭
                </mw-button>
                <mw-button @click="$toast('点击弹出提示', 
                    {isAutoClose: true, autoCloseDelay: 1000})">
                    延时1s关闭
                </mw-button>
              </div>
            `.replace(/^ {14}/gm, '').trim(),
            htmlCode4: `
              <!-- index.html -->
              <div id="app">
                <mw-button @click="$toast('<h1>h1标题</h1>')">
                    不转换html
                </mw-button>
                <mw-button @click="$toast('<h1>h1标题</h1>', {isHtml: true})">
                    转换html
                </mw-button>
              </div>
            `.replace(/^ {14}/gm, '').trim(),
            javasriptCode: `
              // app.js
              import Vue from 'vue'
              import {Toast, Button} from 'min-wheel'
              import ToastPlugin from 'min-wheel/plugins/toast-plugin'
              Vue.component('mw-toast', Toast);
              Vue.component('mw-button', Button);
              Vue.use(ToastPlugin);
              new Vue({
                  el: '#app',
                  methods: {
                      sayHi() {
                          alert('Hi');
                      }
                  }
              });
            `.replace(/^ {14}/gm, '').trim(),
      }
    },
    methods: {
        sayHi() {
            alert('Hi');
        }
    }
}
</script>
<style>
    .toast {
        z-index: 999 !important;
    }
</style>

<style lang="scss" scoped>
    h3 { margin-bottom: 20px; }
    p { margin-bottom: 10px; }
    .container {
        border: 1px solid rgba(0,0,0,.15);
        padding: 20px;
        border-radius: 4px;
        -webkit-box-shadow: 0 2px 2px rgba(0,0,0,.05);
        box-shadow: 0 2px 2px rgba(0,0,0,.05);
        margin: 10px 0;
        & .demo { margin-bottom: 10px; }
        & pre {
            font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
            background: #282c34;
            border-radius: 4px;
            line-height: 1.4;
            font-size: 1.2em;
        }
    }
</style>
