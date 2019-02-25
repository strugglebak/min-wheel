<template>
    <div class="container">
      <h3>两种触发方式</h3>
      <p>通过设置<code>trigger</code>属性来设置鼠标移入、点击触发方式</p>
      <div class="demo">
        <mw-popover trigger="hover">
          <template slot="content">
            <h3>标题</h3>
            <span>这是一段内容,这是一段内容,这是一段内容。</span>
          </template>  
          <mw-button>Hover me</mw-button>
        </mw-popover>
        <mw-popover>
          <template slot="content">
            <h3>标题</h3>
            <span>这是一段内容,这是一段内容,这是一段内容。</span>
          </template>  
          <mw-button>Click me</mw-button>
        </mw-popover>
      </div>
      <prism language="html">{{ htmlCode1 }}</prism>

      <h3>位置</h3>
      <p>通过<code>position</code>属性可展示 4 个方向</p>
      <div class="demo">
        <mw-popover position="left">
          <template slot="content">
            <h3>标题</h3>
            <span>这是一段内容,这是一段内容,这是一段内容。</span>
          </template>  
          <mw-button>Click left</mw-button>
        </mw-popover>
        <mw-popover position="top">
          <template slot="content">
            <h3>标题</h3>
            <span>这是一段内容,这是一段内容,这是一段内容。</span>
          </template>  
          <mw-button>Click top</mw-button>
        </mw-popover>
        <mw-popover position="bottom">
          <template slot="content">
            <h3>标题</h3>
            <span>这是一段内容,这是一段内容,这是一段内容。</span>
          </template>  
          <mw-button>Click bottom</mw-button>
        </mw-popover>
        <mw-popover position="right">
          <template slot="content">
            <h3>标题</h3>
            <span>这是一段内容,这是一段内容,这是一段内容。</span>
          </template>  
          <mw-button>Click right</mw-button>
        </mw-popover>
      </div>
      <prism language="html">{{ htmlCode2 }}</prism>

      <h3>展示宽度</h3>
      <p>通过设置<code>width</code>属性来控制展示内容宽度,单位为 <code>px</code></p>
      <div class="demo">
        <mw-popover>
          <template slot="content">
            <h3>标题</h3>
            <span>这是一段内容,这是一段内容,这是一段内容。</span>
          </template>  
          <mw-button>默认宽度</mw-button>
        </mw-popover>
        <mw-popover width="400">
          <template slot="content">
            <h3>标题</h3>
            <span>这是一段内容,这是一段内容,这是一段内容。</span>
          </template>  
          <mw-button>宽度400px</mw-button>
        </mw-popover>
      </div>
      <prism language="html">{{ htmlCode3 }}</prism>

      <h3>设置 offset</h3>
      <p>通过设置<code>offset</code>属性来设置弹出内容在<code>position</code>方向上的偏移量, 单位为<code>px</code></p>
      <div class="demo">
          <mw-popover>
            <template slot="content">
              <h3>标题</h3>
              <span>这是一段内容,这是一段内容,这是一段内容。</span>
            </template>  
            <mw-button>默认offset</mw-button>
          </mw-popover>
          <mw-popover offset="40">
            <template slot="content">
              <h3>标题</h3>
              <span>这是一段内容,这是一段内容,这是一段内容。</span>
            </template>  
            <mw-button>offset为40px</mw-button>
          </mw-popover>
      </div>
      <prism language="html">{{ htmlCode4 }}</prism>

      <h3>设置内容区的关闭行为</h3>
      <p>通过在内容区设置<code>slot-scope</code>来实现</p>
      <div class="demo">
          <mw-popover>
            <template slot="content" slot-scope="{close}">
              <h3>标题</h3>
              <span>这是一段内容,这是一段内容,这是一段内容。</span>
              <mw-button @click="close">关闭</mw-button>
            </template>  
            <mw-button>Click me</mw-button>
          </mw-popover>
      </div>
      <prism language="html">{{ htmlCode5 }}</prism>
      <prism language="javascript">{{ javasriptCode }}</prism>

    </div>

</template>
<script>
import Popover from '../../../src/popover'
import Button from '../../../src/button'
import 'prismjs'
import Prism from 'vue-prism-component'

export default {
    components: {
        'mw-popover': Popover,
        'mw-button': Button,
        Prism,
    },
    data() {
        return {
            htmlCode1: `
              <!-- index.html -->
              <div id="app">
                <mw-popover trigger="hover">
                  <template slot="content">
                    <h3>标题</h3>
                    <span>这是一段内容,这是一段内容,这是一段内容。</span>
                  </template>  
                  <mw-button>Hover me</mw-button>
                </mw-popover>
                <mw-popover>
                  <template slot="content">
                    <h3>标题</h3>
                    <span>这是一段内容,这是一段内容,这是一段内容。</span>
                  </template>  
                  <mw-button>Click me</mw-button>
                </mw-popover>
              </div>
            `.replace(/^ {14}/gm, '').trim(),
            htmlCode2: `
              <!-- index.html -->
              <div id="app">
                <mw-popover position="left">
                  <template slot="content">
                    <h3>标题</h3>
                    <span>这是一段内容,这是一段内容,这是一段内容。</span>
                  </template>  
                  <mw-button>Click left</mw-button>
                </mw-popover>
                <mw-popover position="top">
                  <template slot="content">
                    <h3>标题</h3>
                    <span>这是一段内容,这是一段内容,这是一段内容。</span>
                  </template>  
                  <mw-button>Click top</mw-button>
                </mw-popover>
                <mw-popover position="bottom">
                  <template slot="content">
                    <h3>标题</h3>
                    <span>这是一段内容,这是一段内容,这是一段内容。</span>
                  </template>  
                  <mw-button>Click bottom</mw-button>
                </mw-popover>
                <mw-popover position="right">
                  <template slot="content">
                    <h3>标题</h3>
                    <span>这是一段内容,这是一段内容,这是一段内容。</span>
                  </template>  
                  <mw-button>Click right</mw-button>
                </mw-popover>
              </div>
            `.replace(/^ {14}/gm, '').trim(),
            htmlCode3: `
              <!-- index.html -->
              <div id="app">
                <mw-popover>
                  <template slot="content">
                    <h3>标题</h3>
                    <span>这是一段内容,这是一段内容,这是一段内容。</span>
                  </template>  
                  <mw-button>默认宽度</mw-button>
                </mw-popover>
                <mw-popover width="400">
                  <template slot="content">
                    <h3>标题</h3>
                    <span>这是一段内容,这是一段内容,这是一段内容。</span>
                  </template>  
                  <mw-button>宽度400px</mw-button>
                </mw-popover>
              </div>
            `.replace(/^ {14}/gm, '').trim(),
            htmlCode4: `
              <!-- index.html -->
              <div id="app">
                <mw-popover>
                  <template slot="content">
                    <h3>标题</h3>
                    <span>这是一段内容,这是一段内容,这是一段内容。</span>
                  </template>  
                  <mw-button>默认offset</mw-button>
                </mw-popover>
                <mw-popover offset="40">
                  <template slot="content">
                    <h3>标题</h3>
                    <span>这是一段内容,这是一段内容,这是一段内容。</span>
                  </template>  
                  <mw-button>offset为40px</mw-button>
                </mw-popover>
              </div>
            `.replace(/^ {14}/gm, '').trim(),
            htmlCode5: `
              <!-- index.html -->
              <div id="app">
                <mw-popover>
                  <template slot="content" slot-scope="{close}">
                    <h3>标题</h3>
                    <span>这是一段内容,这是一段内容,这是一段内容。</span>
                    <mw-button @click="close">关闭</mw-button>
                  </template>  
                  <mw-button>Click me</mw-button>
                </mw-popover>
              </div>
            `.replace(/^ {14}/gm, '').trim(),
            javasriptCode: `
              // app.js
              import Vue from 'vue'
              import {Popover, Button} from 'min-wheel'
              Vue.component('mw-popover', Popover);
              Vue.component('mw-button', Button);
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
        & pre {
            font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
            background: #282c34;
            border-radius: 4px;
            line-height: 1.4;
            font-size: 1.2em;
        }
    }
</style>
