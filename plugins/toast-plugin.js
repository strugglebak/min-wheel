import Toast from '../src/toast'

export default {
    install(Vue, options) {
        // add $toast method
        Vue.prototype.$toast = function (propsData) {
            let Constructor = Vue.extend(Toast);
            let toast = new Constructor({
                propsData,
            });
            // the node in the toast component is text
            toast.$slots.default = [propsData.text];
            toast.$mount();
            document.body.appendChild(toast.$el);
        }
    }
}