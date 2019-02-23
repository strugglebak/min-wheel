<template>
    <div class="container">
        <mw-button>默认</mw-button>
        <mw-button :loading="true">等待</mw-button>
        <mw-button icon="settings">设置(左)</mw-button>
        <mw-button icon="settings" icon-position="right">设置(右)</mw-button>
        <mw-button 
            :loading="loadingState" 
            @click="loadingState = !loadingState"
            icon="settings" 
            icon-position="right">点击
        </mw-button>
        <prism language="html">{{ htmlCode }}</prism>
        <prism language="javascript">{{ javasriptCode }}</prism>
    </div>
</template>
<script>
import Button from '../../../src/button'
import 'prismjs'
import Prism from 'vue-prism-component'

export default {
    components: {
        'mw-button': Button,
        Prism,
    },
    data() {
        return {
            loadingState: false,
            htmlCode: `
              <!-- index.html -->
              <div id="app">
                <mw-button>默认</mw-button>
                <mw-button :loading="true">等待</mw-button>
                <mw-button icon="settings">设置(左)</mw-button>
                <mw-button icon="settings" icon-position="right">设置(右)</mw-button>
                <mw-button 
                    :loading="loadingState" 
                    @click="loadingState = !loadingState"
                    icon="settings" 
                    icon-position="right">点击
                </mw-button>
              </div>
            `.replace(/^ {14}/gm, '').trim(),
            javasriptCode: `
              // app.js
              import Vue from 'vue'
              import Button from 'min-wheel'
              Vue.component('mw-button', Button);
              new Vue({
                  el: '#app',
                  data: {
                      loadingState: false
                  }
              });
            `.replace(/^ {14}/gm, '').trim(),
        }
    }
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
    }
</style>
