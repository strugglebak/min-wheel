import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Footer from './footer'

import Toast from './toast'
import ToastPlugin from '../plugins/toast-plugin'

import Tabs from './tabs'
import TabsNav from './tabs-nav'
import TabsItem from './tabs-item'
import TabsContent from './tabs-content'
import TabsPane from './tabs-pane'

import EventHub from '../plugins/eventHub-plugin.js'

import Popover from './popover'
import Collapse from './collapse.vue'
import CollapseItem from './collapse-item.vue'

Vue.component('mw-button', Button);
Vue.component('mw-icon', Icon);
Vue.component('mw-button-group', ButtonGroup);
Vue.component('mw-input', Input);
Vue.component('mw-row', Row);
Vue.component('mw-col', Col);
Vue.component('mw-layout', Layout);
Vue.component('mw-header', Header);
Vue.component('mw-sider', Sider);
Vue.component('mw-content', Content);
Vue.component('mw-footer', Footer);

// register toast plugin
Vue.component('mw-toast', Toast);
Vue.use(ToastPlugin);

Vue.component('mw-tabs', Tabs);
Vue.component('mw-tabs-nav', TabsNav);
Vue.component('mw-tabs-item', TabsItem);
Vue.component('mw-tabs-content', TabsContent);
Vue.component('mw-tabs-pane', TabsPane);

Vue.component('mw-popover', Popover);

Vue.component('mw-collapse', Collapse);
Vue.component('mw-collapse-item', CollapseItem);

new Vue({
    el: '#app',
    data: {
        loadingState1: true,
        loadingState2: false,
        loadingState3: false,
        message: 'hello world',
        selected: 'tab1',
        positionChanged: 'top',
        eventHub: EventHub,
        selectedTab: ['tab1'],
    },
    methods: {
        inputChange (e) { console.log(e); },
        changeMessage () { this.message = this.message + '1'; },
        showToastAtTop() { let text = ` 更新成功 `; this.$toast( text, {closeButton: null, position: 'top', }); },
        showToastAtMiddle() { let text = ` 更新成功 `; this.$toast( text, { position: 'middle', }); },
        showToastAtBottom() { let text = ` 更新成功 `; this.$toast( text, { position: 'bottom', }); },
        positionChange(position) {
            console.log('change position')

            this.$children.forEach((e) => {
                if (e && e.$options.name === 'MwTabs') {
                    e.$children.forEach((eChild)=> {
                         if (eChild && eChild.$options.name === 'MwTabsNav') {
                            eChild.$children.forEach((e)=> {
                                if (e.$options.name === 'MwTabsItem' && this.selected === e.name) {
                                    this.eventHub.$emit('update:position-changed', position, e);
                                }
                            });
                         }
                     });
                }
            });
        }
    },
    created(){
        setTimeout(() => {
            // make a fake input change event
            let event = new Event('change');
            let inputElement = this.$el.querySelector('input')
            inputElement.dispatchEvent(event)
            console.log('hi')
        }, 3000);
    },
});
