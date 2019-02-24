<template>
    <div class="container">
        <h3>设置 3 栏/ 6 栏布局</h3>
        <p><code>scale</code>是默认的布局参数</p>
        <mw-row class="demo">
            <mw-col scale="8">
                <div class="demo-o">占 1/3</div>
            </mw-col>
            <mw-col scale="8">
                <div class="demo-e">占 1/3</div>
            </mw-col>
            <mw-col scale="8">
                <div class="demo-o">占 1/3</div>
            </mw-col>
        </mw-row>
        <mw-row class="demo">
            <mw-col scale="4">
                <div class="demo-o">占 1/6</div>
            </mw-col>
            <mw-col scale="4">
                <div class="demo-e">占 1/6</div>
            </mw-col>
            <mw-col scale="4">
                <div class="demo-o">占 1/6</div>
            </mw-col>
            <mw-col scale="4">
                <div class="demo-e">占 1/6</div>
            </mw-col>
            <mw-col scale="4">
                <div class="demo-o">占 1/6</div>
            </mw-col>
            <mw-col scale="4">
                <div class="demo-e">占 1/6</div>
            </mw-col>
        </mw-row>
        <prism language="html">{{ htmlCode1 }}</prism>

        <h3>设置间隙</h3>
        <p><code>ditch</code>属性设置分栏的间隙,单位为<code>px</code></p>
        <mw-row ditch="20" class="demo">
            <mw-col scale="8">
                <div class="demo-o">间隙 20px</div>
            </mw-col>
            <mw-col scale="8">
                <div class="demo-e">间隙 20px</div>
            </mw-col>
            <mw-col scale="8">
                <div class="demo-o">间隙 20px</div>
            </mw-col>
        </mw-row>
        <prism language="html">{{ htmlCode2 }}</prism>

        <h3>设置 offset</h3>
        <p><code>offset</code>属性设置分栏的 offset 即偏移量,这个单位为布局所占的比例</p>
        <mw-row class="demo">
            <mw-col scale="8">
                <div class="demo-o">没有偏移</div>
            </mw-col>
            <mw-col scale="8" offset="8">
                <div class="demo-e">向右偏移 1/3</div>
            </mw-col>
        </mw-row>
        <prism language="html">{{ htmlCode3 }}</prism>

        <h3>设置 alignment</h3>
        <p><code>alignment</code>属性设置某个分栏元素的位置</p>
        <mw-row class="demo">
            <mw-col scale="8">
                <mw-row class="demo-o" alignment="left">
                    <mw-col><div class="align-demo">居左</div></mw-col>
                </mw-row>
            </mw-col>
            <mw-col scale="8">
                <mw-row class="demo-e" alignment="center">
                    <mw-col><div class="align-demo">居中</div></mw-col>
                </mw-row>
            </mw-col>
            <mw-col scale="8">
                <mw-row class="demo-o" alignment="right">
                    <mw-col><div class="align-demo">居右</div></mw-col>
                </mw-row>
            </mw-col>
        </mw-row>
        <prism language="html">{{ htmlCode4 }}</prism>
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
            htmlCode1: `
              <!-- index.html -->
              <div id="app">
                <mw-row>
                    <mw-col scale="8"></mw-col>
                    <mw-col scale="8"></mw-col>
                    <mw-col scale="8"></mw-col>
                </mw-row>
                <mw-row>
                    <mw-col scale="4"></mw-col>
                    <mw-col scale="4"></mw-col>
                    <mw-col scale="4"></mw-col>
                    <mw-col scale="4"></mw-col>
                    <mw-col scale="4"></mw-col>
                    <mw-col scale="4"></mw-col>
                </mw-row>
              </div>
            `.replace(/^ {14}/gm, '').trim(),
            htmlCode2: `
              <!-- index.html -->
              <div id="app">
                <mw-row ditch="20">
                    <mw-col scale="8"></mw-col>
                    <mw-col scale="8"></mw-col>
                    <mw-col scale="8"></mw-col>
                </mw-row>
              </div>
            `.replace(/^ {14}/gm, '').trim(),
            htmlCode3: `
              <!-- index.html -->
              <div id="app">
                <mw-row>
                    <mw-col scale="8"></mw-col>
                    <mw-col scale="8" offset="8"></mw-col>
                </mw-row>
              </div>
            `.replace(/^ {14}/gm, '').trim(),
            htmlCode4: `
              <!-- index.html -->
              <div id="app">
                <mw-row>
                  <mw-col scale="8">
                      <mw-row alignment="left">
                          <mw-col></mw-col>
                      </mw-row>
                  </mw-col>
                  <mw-col scale="8">
                      <mw-row alignment="center">
                          <mw-col></mw-col>
                      </mw-row>
                  </mw-col>
                  <mw-col scale="8">
                      <mw-row alignment="right">
                          <mw-col></mw-col>
                      </mw-row>
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