import Toast from '../src/toast'

export default {
    install(Vue, options) {
        // add $toast method
        Vue.prototype.$toast = function (text) {
            let Constructor = Vue.extend(Toast);
            let toast = new Constructor({});
            // the node in the toast component is text
            toast.$slots.default = [text];
            toast.$mount();
            document.body.appendChild(toast.$el);
        }
    }
}