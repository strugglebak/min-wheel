<template>
    <div class="container">
        <h3>基础上中下布局</h3>
        <mw-layout class="demo">
            <mw-header>header</mw-header>
            <mw-content>content</mw-content>
            <mw-footer>footer</mw-footer>
        </mw-layout>
        <prism language="html">{{ htmlCode1 }}</prism>

        <h3>带侧边栏的上中下布局</h3>
        <mw-layout class="demo">
            <mw-header>header</mw-header>
            <mw-layout>
                <mw-sider>sider</mw-sider>
                <mw-content>content</mw-content>
            </mw-layout>
            <mw-footer>footer</mw-footer>
        </mw-layout>
        <mw-layout class="demo">
            <mw-header>header</mw-header>
            <mw-layout>
                <mw-content>content</mw-content>
                <mw-sider>sider</mw-sider>
            </mw-layout>
            <mw-footer>footer</mw-footer>
        </mw-layout>
        <mw-layout class="demo">
            <mw-sider>sider</mw-sider>
            <mw-layout>
                <mw-header>header</mw-header>
                <mw-content>content</mw-content>
                <mw-footer>footer</mw-footer>
            </mw-layout>
        </mw-layout>
        <prism language="html">{{ htmlCode2 }}</prism>

        <prism language="javascript">{{ javasriptCode }}</prism>
    </div>
</template>
<script>
import Layout from '../../../src/layout'
import Header from '../../../src/header'
import Sider from '../../../src/sider'
import Content from '../../../src/content'
import Footer from '../../../src/footer'
import 'prismjs'
import Prism from 'vue-prism-component'

export default {
    components: {
        'mw-layout': Layout,
        'mw-header': Header,
        'mw-sider': Sider,
        'mw-content': Content,
        'mw-footer': Footer,
        Prism,
    },
    data() {
        return {
            htmlCode1: `
              <!-- index.html -->
              <div id="app">
                <mw-layout class="demo">
                    <mw-header>header</mw-header>
                    <mw-content>content</mw-content>
                    <mw-footer>footer</mw-footer>
                </mw-layout>
              </div>
            `.replace(/^ {14}/gm, '').trim(),
            htmlCode2: `
              <!-- index.html -->
              <div id="app">
                <mw-layout>
                    <mw-header>header</mw-header>
                    <mw-layout>
                        <mw-sider>sider</mw-sider>
                        <mw-content>content</mw-content>
                    </mw-layout>
                    <mw-footer>footer</mw-footer>
                </mw-layout>
                <mw-layout>
                    <mw-header>header</mw-header>
                    <mw-layout>
                        <mw-content>content</mw-content>
                        <mw-sider>sider</mw-sider>
                    </mw-layout>
                    <mw-footer>footer</mw-footer>
                </mw-layout>
                <mw-layout>
                    <mw-sider>sider</mw-sider>
                    <mw-layout>
                        <mw-header>header</mw-header>
                        <mw-content>content</mw-content>
                        <mw-footer>footer</mw-footer>
                    </mw-layout>
                </mw-layout>
              </div>
            `.replace(/^ {14}/gm, '').trim(),
            javasriptCode: `
              // app.js
              import Vue from 'vue'
              import {Layout, Header, Sider, Content, Footer} from 'min-wheel'
              Vue.component('mw-layout', Layout);
              Vue.component('mw-header', Header);
              Vue.component('mw-sider', Sider);
              Vue.component('mw-content', Content);
              Vue.component('mw-footer', Footer);
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

        & .header,& .content, & .footer, & .sider {
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        & .header, & .footer { background-color: #35495e; }
        & .content { background-color: #41b883; width: 100%; }
        & .sider { background-color: #282c34; width: 20%;}
        & .header, & .footer { min-height: 50px; }
        & .sider, & .content { min-height: 80px; }
        & pre {
            font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
            background: #282c34;
            border-radius: 4px;
            line-height: 1.4;
            font-size: 1.2em;
        }
    }
</style>