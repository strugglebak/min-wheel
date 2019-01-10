import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('mw-button', Button);
Vue.component('mw-icon', Icon);
Vue.component('mw-button-group', ButtonGroup);

new Vue({
    el: '#app',
    data: {
        loadingState1: false,
        loadingState2: false,
        loadingState3: false,
    },
});