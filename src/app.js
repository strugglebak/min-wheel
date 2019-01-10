import Vue from 'vue'
import Button from './button'
import Icon from './icon'

Vue.component('mw-button', Button);
Vue.component('mw-icon', Icon);

new Vue({
    el: '#app',
    data: {
        loadingState1: false,
        loadingState2: false,
        loadingState3: false,
    },
});