import Vue from 'vue'
import Button from './button'
import Icon from './icon'

Vue.component('mw-button', Button);
Vue.component('mw-icon', Icon);

new Vue({
    el: '#app'
});