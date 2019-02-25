<template>
    <div class="container">
        <h3>基本</h3>
        <p>选中某一项</p>
        <mw-tabs class="demo" selected="tab1">
            <mw-tabs-nav>
                <mw-tabs-item name="tab1" order="1">tab 1</mw-tabs-item>
                <mw-tabs-item name="tab2" order="2">tab 2</mw-tabs-item>
                <mw-tabs-item name="tab3" order="3">tab 3</mw-tabs-item>
            </mw-tabs-nav>
            <mw-tabs-content>
                <mw-tabs-pane name="tab1">这是 tab 1 相关的 demo</mw-tabs-pane>
                <mw-tabs-pane name="tab2">这是 tab 2 相关的 demo</mw-tabs-pane>
                <mw-tabs-pane name="tab3">这是 tab 3 相关的 demo</mw-tabs-pane>
            </mw-tabs-content>
        </mw-tabs>
        <prism language="html">{{ htmlCode1 }}</prism>

        <h3>禁用</h3>
        <p>禁用某一项</p>
        <mw-tabs class="demo" selected="tab1">
            <mw-tabs-nav>
                <mw-tabs-item name="tab1" order="1">tab 1</mw-tabs-item>
                <mw-tabs-item name="tab2" order="2" disabled>tab 2</mw-tabs-item>
                <mw-tabs-item name="tab3" order="3">tab 3</mw-tabs-item>
            </mw-tabs-nav>
            <mw-tabs-content>
                <mw-tabs-pane name="tab1">这是 tab 1 相关的 demo</mw-tabs-pane>
                <mw-tabs-pane name="tab2">这是 tab 2 相关的 demo</mw-tabs-pane>
                <mw-tabs-pane name="tab3">这是 tab 3 相关的 demo</mw-tabs-pane>
            </mw-tabs-content>
        </mw-tabs>
        <prism language="html">{{ htmlCode2 }}</prism>

        <h3>附加内容</h3>
        <p>可以在页签右边添加附加操作</p>
        <mw-tabs class="demo" 
            selected="tab1" :enable-extra="true">
            <mw-tabs-nav>
                <template slot="actions">
                    <mw-button>Extra Action</mw-button>
                </template>
                <mw-tabs-item name="tab1" order="1">tab 1</mw-tabs-item>
                <mw-tabs-item name="tab2" order="2">tab 2</mw-tabs-item>
                <mw-tabs-item name="tab3" order="3">tab 3</mw-tabs-item>
            </mw-tabs-nav>
            <mw-tabs-content>
                <mw-tabs-pane name="tab1">这是 tab 1 相关的 demo</mw-tabs-pane>
                <mw-tabs-pane name="tab2">这是 tab 2 相关的 demo</mw-tabs-pane>
                <mw-tabs-pane name="tab3">这是 tab 3 相关的 demo</mw-tabs-pane>
            </mw-tabs-content>
        </mw-tabs>
        <prism language="html">{{ htmlCode3 }}</prism>

        <h4>位置</h4>
        <p>可设置 4 个位置<code>position="left|right|top|bottom"</code></p>
        <p>position="left"</p>
        <mw-tabs class="demo" 
            :selected.sync="select" 
            :position-changed.sync="position[0]">
            <mw-tabs-nav>
                <mw-tabs-item name="tab1" order="1">tab 1</mw-tabs-item>
                <mw-tabs-item name="tab2" order="2">tab 2</mw-tabs-item>
                <mw-tabs-item name="tab3" order="3">tab 3</mw-tabs-item>
            </mw-tabs-nav>
            <mw-tabs-content>
                <mw-tabs-pane name="tab1">这是 tab 1 相关的 demo</mw-tabs-pane>
                <mw-tabs-pane name="tab2">这是 tab 2 相关的 demo</mw-tabs-pane>
                <mw-tabs-pane name="tab3">这是 tab 3 相关的 demo</mw-tabs-pane>
            </mw-tabs-content>
        </mw-tabs>
        <p>position="right"</p>
        <mw-tabs class="demo" 
            :selected.sync="select" 
            :position-changed.sync="position[1]">
            <mw-tabs-nav>
                <mw-tabs-item name="tab1" order="1">tab 1</mw-tabs-item>
                <mw-tabs-item name="tab2" order="2">tab 2</mw-tabs-item>
                <mw-tabs-item name="tab3" order="3">tab 3</mw-tabs-item>
            </mw-tabs-nav>
            <mw-tabs-content>
                <mw-tabs-pane name="tab1">这是 tab 1 相关的 demo</mw-tabs-pane>
                <mw-tabs-pane name="tab2">这是 tab 2 相关的 demo</mw-tabs-pane>
                <mw-tabs-pane name="tab3">这是 tab 3 相关的 demo</mw-tabs-pane>
            </mw-tabs-content>
        </mw-tabs>
        <p>position="top"</p>
        <mw-tabs class="demo" 
            :selected.sync="select" 
            :position-changed.sync="position[2]">
            <mw-tabs-nav>
                <mw-tabs-item name="tab1" order="1">tab 1</mw-tabs-item>
                <mw-tabs-item name="tab2" order="2">tab 2</mw-tabs-item>
                <mw-tabs-item name="tab3" order="3">tab 3</mw-tabs-item>
            </mw-tabs-nav>
            <mw-tabs-content>
                <mw-tabs-pane name="tab1">这是 tab 1 相关的 demo</mw-tabs-pane>
                <mw-tabs-pane name="tab2">这是 tab 2 相关的 demo</mw-tabs-pane>
                <mw-tabs-pane name="tab3">这是 tab 3 相关的 demo</mw-tabs-pane>
            </mw-tabs-content>
        </mw-tabs>
        <p>position="bottom"</p>
        <mw-tabs class="demo" 
            :selected.sync="select" 
            :position-changed.sync="position[3]">
            <mw-tabs-nav>
                <mw-tabs-item name="tab1" order="1">tab 1</mw-tabs-item>
                <mw-tabs-item name="tab2" order="2">tab 2</mw-tabs-item>
                <mw-tabs-item name="tab3" order="3">tab 3</mw-tabs-item>
            </mw-tabs-nav>
            <mw-tabs-content>
                <mw-tabs-pane name="tab1">这是 tab 1 相关的 demo</mw-tabs-pane>
                <mw-tabs-pane name="tab2">这是 tab 2 相关的 demo</mw-tabs-pane>
                <mw-tabs-pane name="tab3">这是 tab 3 相关的 demo</mw-tabs-pane>
            </mw-tabs-content>
        </mw-tabs>
        <prism language="html">{{ htmlCode4 }}</prism>
        <prism language="javascript">{{ javasriptCode }}</prism>
    </div>
</template>
<script>
import Button from '../../../src/button'
import Tabs from '../../../src/tabs'
import TabsNav from '../../../src/tabs-nav'
import TabsItem from '../../../src/tabs-item'
import TabsContent from '../../../src/tabs-content'
import TabsPane from '../../../src/tabs-pane'
import 'prismjs'
import Prism from 'vue-prism-component'

export default {
    components: {
        'mw-button': Button,
        'mw-tabs': Tabs,
        'mw-tabs-nav': TabsNav,
        'mw-tabs-item': TabsItem,
        'mw-tabs-content': TabsContent,
        'mw-tabs-pane': TabsPane,
        Prism,
    },
    data() {
        return {
            select: 'tab1',
            position: ['left', 'right', 'top', 'bottom'],
            htmlCode1: `
              <!-- index.html -->
              <div id="app">
                <mw-tabs selected="tab1">
                    <mw-tabs-nav>
                        <mw-tabs-item name="tab1" order="1">tab 1</mw-tabs-item>
                        <mw-tabs-item name="tab2" order="2">tab 2</mw-tabs-item>
                        <mw-tabs-item name="tab3" order="3">tab 3</mw-tabs-item>
                    </mw-tabs-nav>
                    <mw-tabs-content>
                        <mw-tabs-pane name="tab1">这是 tab 1 相关的 demo</mw-tabs-pane>
                        <mw-tabs-pane name="tab2">这是 tab 2 相关的 demo</mw-tabs-pane>
                        <mw-tabs-pane name="tab3">这是 tab 3 相关的 demo</mw-tabs-pane>
                    </mw-tabs-content>
                </mw-tabs>
              </div>
            `.replace(/^ {14}/gm, '').trim(),
            htmlCode2: `
              <!-- index.html -->
              <div id="app">
                <mw-tabs selected="tab1">
                    <mw-tabs-nav>
                        <mw-tabs-item name="tab1" order="1">tab 1</mw-tabs-item>
                        <mw-tabs-item name="tab2" order="2" 
                            disabled>tab 2</mw-tabs-item>
                        <mw-tabs-item name="tab3" order="3">tab 3</mw-tabs-item>
                    </mw-tabs-nav>
                    <mw-tabs-content>
                        <mw-tabs-pane name="tab1">这是 tab 1 相关的 demo</mw-tabs-pane>
                        <mw-tabs-pane name="tab2">这是 tab 2 相关的 demo</mw-tabs-pane>
                        <mw-tabs-pane name="tab3">这是 tab 3 相关的 demo</mw-tabs-pane>
                    </mw-tabs-content>
                </mw-tabs>
              </div>
            `.replace(/^ {14}/gm, '').trim(),
            htmlCode3: `
              <!-- index.html -->
              <div id="app">
                <mw-tabs class="demo" 
                    selected="tab1" :enable-extra="true">
                    <mw-tabs-nav>
                        <template slot="actions">
                            <mw-button>Extra Action</mw-button>
                        </template>
                        <mw-tabs-item name="tab1" order="1">tab 1</mw-tabs-item>
                        <mw-tabs-item name="tab2" order="2">tab 2</mw-tabs-item>
                        <mw-tabs-item name="tab3" order="3">tab 3</mw-tabs-item>
                    </mw-tabs-nav>
                    <mw-tabs-content>
                        <mw-tabs-pane name="tab1">这是 tab 1 相关的 demo</mw-tabs-pane>
                        <mw-tabs-pane name="tab2">这是 tab 2 相关的 demo</mw-tabs-pane>
                        <mw-tabs-pane name="tab3">这是 tab 3 相关的 demo</mw-tabs-pane>
                    </mw-tabs-content>
                </mw-tabs>
              </div>
            `.replace(/^ {14}/gm, '').trim(),
            htmlCode4: `
              <!-- index.html -->
              <div id="app">
                <mw-tabs class="demo" 
                    :selected.sync="select" 
                    :position-changed.sync="position[0]"> <!-- 这里修改 position -->
                    <mw-tabs-nav>
                        <mw-tabs-item name="tab1" order="1">tab 1</mw-tabs-item>
                        <mw-tabs-item name="tab2" order="2">tab 2</mw-tabs-item>
                        <mw-tabs-item name="tab3" order="3">tab 3</mw-tabs-item>
                    </mw-tabs-nav>
                    <mw-tabs-content>
                        <mw-tabs-pane name="tab1">这是 tab 1 相关的 demo</mw-tabs-pane>
                        <mw-tabs-pane name="tab2">这是 tab 2 相关的 demo</mw-tabs-pane>
                        <mw-tabs-pane name="tab3">这是 tab 3 相关的 demo</mw-tabs-pane>
                    </mw-tabs-content>
                </mw-tabs>
              </div>
            `.replace(/^ {14}/gm, '').trim(),
            javasriptCode: `
              // app.js
              import Vue from 'vue'
              import Button from 'min-wheel'
              import {Tabs, TabsNav, TabsItem, TabsContent, TabsPane} from 'min-wheel'
            
              Vue.component('mw-button', Button);
              Vue.component('mw-tabs', Tabs);
              Vue.component('mw-tabs-nav', TabsNav);
              Vue.component('mw-tabs-item', TabsItem);
              Vue.component('mw-tabs-content', TabsContent);
              Vue.component('mw-tabs-pane', TabsPane);

              new Vue({
                  el: '#app'
                  data: {
                    select: 'tab1',
                    position: ['left', 'right', 'top', 'bottom'],
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
