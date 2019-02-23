<template>
    <div class="container">
        <mw-button-group>
            <mw-button>选项1</mw-button>
            <mw-button>选项2</mw-button>
            <mw-button>选项3</mw-button>
            <mw-button>选项4</mw-button>
        </mw-button-group>
        <mw-button-group>
          <mw-button icon="back" icon-position="left">后退</mw-button>
          <mw-button>更多</mw-button>
          <mw-button icon="next" icon-position="right">前进</mw-button>
        </mw-button-group>
        <prism language="html">{{ htmlCode }}</prism>
        <prism language="javascript">{{ javasriptCode }}</prism>
    </div>
</template>
<script>
import Button from '../../../src/button'
import ButtonGroup from '../../../src/button-group'
import 'prismjs'
import Prism from 'vue-prism-component'

export default {
    components: {
        'mw-button': Button,
        'mw-button-group': ButtonGroup,
        Prism,
    },
    data() {
        return {
            htmlCode: `
              <!-- index.html -->
              <div id="app">
                <mw-button-group>
                    <mw-button>选项1</mw-button>
                    <mw-button>选项2</mw-button>
                    <mw-button>选项3</mw-button>
                    <mw-button>选项4</mw-button>
                </mw-button-group>
                <mw-button-group>
                    <mw-button icon="back" icon-position="left">后退</mw-button>
                    <mw-button>更多</mw-button>
                    <mw-button icon="next" icon-position="right">前进</mw-button>
                </mw-button-group>
              </div>
            `.replace(/^ {14}/gm, '').trim(),
            javasriptCode: `
              // app.js
              import Vue from 'vue'
              import ButtonGroup from 'min-wheel'
              Vue.component('mw-button-group', ButtonGroup);
              new Vue({
                  el: '#app',
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
