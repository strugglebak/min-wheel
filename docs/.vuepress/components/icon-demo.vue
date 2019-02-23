<template>
    <div class="container">
        <div class="example">
            <mw-icon name="error"></mw-icon>
            <mw-icon name="info"></mw-icon>
            <mw-icon name="down"></mw-icon>
            <mw-icon name="up"></mw-icon>
            <mw-icon name="next"></mw-icon>
            <mw-icon name="back"></mw-icon>
            <mw-icon name="loading"></mw-icon>
            <mw-icon name="settings"></mw-icon>
        </div>
        <prism language="html">{{ htmlCode }}</prism>
        <prism language="javascript">{{ javasriptCode }}</prism>
    </div>
</template>
<script>
import Icon from '../../../src/icon'
import 'prismjs'
import Prism from 'vue-prism-component'

export default {
    components: {
        'mw-icon': Icon,
        Prism,
    },
    data() {
        return {
            htmlCode: `
              <!-- index.html -->
              <div id="app">
                <mw-icon name="error"></mw-icon>
                <mw-icon name="info"></mw-icon>
                <mw-icon name="down"></mw-icon>
                <mw-icon name="up"></mw-icon>
                <mw-icon name="next"></mw-icon>
                <mw-icon name="back"></mw-icon>
                <mw-icon name="loading"></mw-icon>
                <mw-icon name="settings"></mw-icon>
              </div>
            `.replace(/^ {14}/gm, '').trim(),
            javasriptCode: `
              // app.js
              import Vue from 'vue'
              import Icon from 'min-wheel'
              Vue.component('mw-icon', Icon);
              new Vue({
                  el: '#app'
              });
            `.replace(/^ {14}/gm, '').trim(),
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
        & .mw-icon {
            width: 30px; height: 30px;
        }
        & pre {
            font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
            background: #282c34;
            border-radius: 4px;
            line-height: 1.4;
            font-size: 1.2em;
        }
    }
</style>
