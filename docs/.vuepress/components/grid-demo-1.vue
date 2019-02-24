<template>
    <div class="container">
        <mw-row class="demo" ditch="10">
            <mw-col 
                scale="2"
                :pad="{scale: 4}"
                :narrowpc="{scale: 6}"
                :pc="{scale: 8}"
                :widepc="{scale: 10}">
                <div class="demo-o">响应式布局</div>
            </mw-col>
            <mw-col 
                scale="20"
                :pad="{scale: 16}"
                :narrowpc="{scale: 12}"
                :pc="{scale: 8}"
                :widepc="{scale: 4}">
                <div class="demo-e">响应式布局</div>
            </mw-col>
            <mw-col
                scale="2"
                :pad="{scale: 4}"
                :narrowpc="{scale: 6}"
                :pc="{scale: 8}"
                :widepc="{scale: 10}">
                <div class="demo-o">响应式布局</div>
            </mw-col>
        </mw-row>
        <prism language="html">{{ htmlCode }}</prism>
        <prism language="javascript">{{ javasriptCode }}</prism>
    </div>
</template>
<script>
import Row from '../../../src/row'
import Col from '../../../src/col'
import 'prismjs'
import Prism from 'vue-prism-component'

export default {
    components: {
        'mw-row': Row,
        'mw-col': Col,
        Prism,
    },
    data() {
        return {
            htmlCode: `
              <!-- index.html -->
              <div id="app">
                <mw-row ditch="10">
                    <mw-col scale="2"
                        :pad="{scale: 4}"
                        :narrowpc="{scale: 6}"
                        :pc="{scale: 8}"
                        :widepc="{scale: 10}">
                    </mw-col>
                    <mw-col scale="20"
                        :pad="{scale: 16}"
                        :narrowpc="{scale: 12}"
                        :pc="{scale: 8}"
                        :widepc="{scale: 4}">
                    </mw-col>
                    <mw-col scale="2"
                        :pad="{scale: 4}"
                        :narrowpc="{scale: 6}"
                        :pc="{scale: 8}"
                        :widepc="{scale: 10}">
                    </mw-col>
                </mw-row>
              </div>
            `.replace(/^ {14}/gm, '').trim(),
            javasriptCode: `
              // app.js
              import Vue from 'vue'
              import {Row, Col} from 'min-wheel'
              Vue.component('mw-row', Row);
              Vue.component('mw-col', Col);
              new Vue({
                  el: '#app'
              });
            `.replace(/^ {14}/gm, '').trim(),
      }
    },
}
</script>
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
        & .align-demo { background:#f8c555; }

        & .demo-o, .demo-e { color: white; display: flex; justify-content: center; align-items: center; min-height: 100% }
        & .demo-e { background-color: #35495e; }
        & .demo-o { background-color: #41b883; }

        & .align-left { justify-content: flex-start; }
        & .align-center { justify-content: center; }
        & .align-right { justify-content: flex-end; }
        & pre {
            font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
            background: #282c34;
            border-radius: 4px;
            line-height: 1.4;
            font-size: 1.2em;
        }
    }
</style>