<template>
    <div class="container">
        <div class="demo"> <mw-input value="" placeholder="请在这里输入"></mw-input> </div>
        <div class="demo"> <mw-input type="password" placeholder="请输入密码"></mw-input> </div>
        <div class="demo"> <mw-input value="这里不能输入" disabled></mw-input> </div>
        <div class="demo"> <mw-input value="这里只能读取" readonly></mw-input> </div>
        <div class="demo">
          <mw-button @click="reset">reset</mw-button>
          <mw-input placeholder="v-model双向绑定" v-model:value="message"></mw-input>
          <span>{{message}}</span>
        </div>
        <div class="demo"> <mw-input name="用户名/密码"></mw-input> </div>
        <div class="demo"> <mw-input name="用户名/密码" alignment="vertical"></mw-input> </div>
        <div class="demo"> <mw-input info="提示信息"></mw-input> </div>
        <div class="demo"> <mw-input info="提示信息" alignment="vertical"></mw-input> </div>
        <div class="demo"> <mw-input name="用户名/密码" info="提示信息"></mw-input> </div>
        <div class="demo"> <mw-input name="用户名/密码" info="提示信息" alignment="vertical"></mw-input> </div>
        <div class="demo"> <mw-input value="" error="这不是个正常输入"></mw-input> </div>
        <div class="demo"> <mw-input value="" info="这是个正常输入"></mw-input> </div>
        <prism language="html">{{ htmlCode }}</prism>
        <prism language="javascript">{{ javasriptCode }}</prism>
    </div>
</template>
<script>
import Button from '../../../src/button'
import Input from '../../../src/input'
import 'prismjs'
import Prism from 'vue-prism-component'

export default {
    components: {
        'mw-input': Input,
        'mw-button': Button,
        Prism,
    },
    data() {
        return {
            message: 'v-model双向绑定',
            htmlCode: `
              <!-- index.html -->
              <div id="app">
                <mw-input value="" placeholder="请在这里输入"></mw-input>
                <mw-input type="password" placeholder="请输入密码"></mw-input>
                <mw-input value="这里不能输入" disabled></mw-input>
                <mw-input value="这里只能读取" readonly></mw-input>

                <mw-button @click="reset">reset</mw-button>
                <mw-input placeholder="v-model双向绑定" v-model:value="message"></mw-input>
                <span>{{message}}</span>

                <mw-input name="用户名/密码"></mw-input>
                <mw-input name="用户名/密码" alignment="vertical"></mw-input>
                <mw-input info="提示信息"></mw-input>
                <mw-input info="提示信息" alignment="vertical"></mw-input>
                <mw-input name="用户名/密码" info="提示信息"></mw-input>
                <mw-input name="用户名/密码" info="提示信息" alignment="vertical"></mw-input>
                <mw-input value="" error="这不是个正常输入"></mw-input>
                <mw-input value="" info="这是个正常输入"></mw-input>
              </div>
            `.replace(/^ {14}/gm, '').trim(),
            javasriptCode: `
              // app.js
              import Vue from 'vue'
              import {Input, Button} from 'min-wheel'
              Vue.component('mw-input', Input);
              Vue.component('mw-button', Button);
              new Vue({
                  el: '#app',
                  data: {
                      message: 'v-model双向绑定'
                  },
                  methods: {
                      reset() {
                          this.message = 'v-model双向绑定';
                      }
                  }
              });
            `.replace(/^ {14}/gm, '').trim(),
        }
    },
    methods: {
        reset() {
            this.message = 'v-model双向绑定';
        }
    },
}
</script>

<style lang="scss" scoped>
    .container {
        border: 1px solid rgba(0,0,0,.15);
        padding: 20px;
        border-radius: 4px;
        -webkit-box-shadow: 0 2px 2px rgba(0,0,0,.05);
        box-shadow: 0 2px 2px rgba(0,0,0,.05);
        margin: 10px 0;
        & pre {
            font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
            background: #282c34;
            border-radius: 4px;
            line-height: 1.4;
            font-size: 1.2em;
        }

        & .demo {
            display: block;
            margin-bottom: 20px;
        }
    }
</style>
