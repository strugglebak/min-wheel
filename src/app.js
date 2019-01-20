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

new Vue({
    el: '#app',
    data: {
        loadingState1: true,
        loadingState2: false,
        loadingState3: false,
        message: 'hello world',
    },
    methods: {
        inputChange (e) {
            console.log(e);
        },
        changeMessage () {
            this.message = this.message + '1';
        },
        showToast() {
            // you can use this.$toast here
            // and this is the api of toast
            this.$toast({
                text: '这里出现 toast',
                isAutoClose: false,
                autoCloseDelay: 5000,
            });
        },
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
