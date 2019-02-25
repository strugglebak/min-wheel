<template>
    <div class="container">
      <h3>折叠面板</h3>
      <p>可以同时打开多个面板</p>
      <div class="demo">
          <mw-collapse>
            <mw-collapse-item title="标题1">
              这是与标题1相关的内容1
              这是与标题1相关的内容1
              这是与标题1相关的内容1
            </mw-collapse-item>
            <mw-collapse-item title="标题2">
              这是与标题2相关的内容2
              这是与标题2相关的内容2
              这是与标题2相关的内容2
            </mw-collapse-item>
            <mw-collapse-item title="标题3">
              这是与标题3相关的内容3
              这是与标题3相关的内容3
              这是与标题3相关的内容3
            </mw-collapse-item>
          </mw-collapse>
      </div>
      <prism language="html">{{ htmlCode1 }}</prism>

      <h3>选中打开</h3>
      <p>可以指定打开某个面板</p>
      <div class="demo">
          <mw-collapse :selected="selectTab">
            <mw-collapse-item title="标题1" name="1">
              这是与标题1相关的内容1
              这是与标题1相关的内容1
              这是与标题1相关的内容1
            </mw-collapse-item>
            <mw-collapse-item title="标题2" name="2">
              这是与标题2相关的内容2
              这是与标题2相关的内容2
              这是与标题2相关的内容2
            </mw-collapse-item>
            <mw-collapse-item title="标题3" name="3">
              这是与标题3相关的内容3
              这是与标题3相关的内容3
              这是与标题3相关的内容3
            </mw-collapse-item>
          </mw-collapse>
      </div>
      <prism language="html">{{ htmlCode2 }}</prism>

      <h3>手风琴</h3>
      <p>每次只打开一个面板, 可以指定打开某个面板</p>
      <div class="demo">
          <mw-collapse selected="2" accordion>
            <mw-collapse-item title="标题1" name="1">
              这是与标题1相关的内容1
              这是与标题1相关的内容1
              这是与标题1相关的内容1
            </mw-collapse-item>
            <mw-collapse-item title="标题2" name="2">
              这是与标题2相关的内容2
              这是与标题2相关的内容2
              这是与标题2相关的内容2
            </mw-collapse-item>
            <mw-collapse-item title="标题3" name="3">
              这是与标题3相关的内容3
              这是与标题3相关的内容3
              这是与标题3相关的内容3
            </mw-collapse-item>
          </mw-collapse>
      </div>
      <prism language="html">{{ htmlCode3 }}</prism>
      <prism language="javascript">{{ javasriptCode }}</prism>
    </div>
</template>
<script>
import Collapse from '../../../src/collapse'
import CollapseItem from '../../../src/collapse-item'
import 'prismjs'
import Prism from 'vue-prism-component'

export default {
    components: {
        'mw-collapse': Collapse,
        'mw-collapse-item': CollapseItem,
        Prism,
    },
    data() {
        return {
            selectTab: ['2'],
            htmlCode1: `
              <!-- index.html -->
              <div id="app">
                <mw-collapse>
                  <mw-collapse-item title="标题1">
                    这是与标题1相关的内容1
                    这是与标题1相关的内容1
                    这是与标题1相关的内容1
                  </mw-collapse-item>
                  <mw-collapse-item title="标题2">
                    这是与标题2相关的内容2
                    这是与标题2相关的内容2
                    这是与标题2相关的内容2
                  </mw-collapse-item>
                  <mw-collapse-item title="标题3">
                    这是与标题3相关的内容3
                    这是与标题3相关的内容3
                    这是与标题3相关的内容3
                  </mw-collapse-item>
                </mw-collapse>
              </div>
            `.replace(/^ {14}/gm, '').trim(),
            htmlCode2: `
              <!-- index.html -->
              <div id="app">
                <mw-collapse :selected="selectTab">
                  <mw-collapse-item title="标题1" name="1">
                    这是与标题1相关的内容1
                    这是与标题1相关的内容1
                    这是与标题1相关的内容1
                  </mw-collapse-item>
                  <mw-collapse-item title="标题2" name="2">
                    这是与标题2相关的内容2
                    这是与标题2相关的内容2
                    这是与标题2相关的内容2
                  </mw-collapse-item>
                  <mw-collapse-item title="标题3" name="3">
                    这是与标题3相关的内容3
                    这是与标题3相关的内容3
                    这是与标题3相关的内容3
                  </mw-collapse-item>
                </mw-collapse>
              </div>
            `.replace(/^ {14}/gm, '').trim(),
            htmlCode3: `
              <!-- index.html -->
              <div id="app">
                <mw-collapse selected="2" accordion>
                  <mw-collapse-item title="标题1" name="1">
                    这是与标题1相关的内容1
                    这是与标题1相关的内容1
                    这是与标题1相关的内容1
                  </mw-collapse-item>
                  <mw-collapse-item title="标题2" name="2">
                    这是与标题2相关的内容2
                    这是与标题2相关的内容2
                    这是与标题2相关的内容2
                  </mw-collapse-item>
                  <mw-collapse-item title="标题3" name="3">
                    这是与标题3相关的内容3
                    这是与标题3相关的内容3
                    这是与标题3相关的内容3
                  </mw-collapse-item>
                </mw-collapse>
              </div>
            `.replace(/^ {14}/gm, '').trim(),
            javasriptCode: `
              // app.js
              import Vue from 'vue'
              import {Collapse, CollapseItem} from 'min-wheel'
              Vue.component('mw-collapse', Collapse);
              Vue.component('mw-collapse-item', CollapseItem);
              new Vue({
                  el: '#app'
                  data: {
                    selectTab: ['2'],
                  }
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
