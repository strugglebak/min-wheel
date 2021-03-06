import Toast from '../src/toast'

let currentToast;

export default {
    install(Vue, options) {
        // add $toast method
        Vue.prototype.$toast = function (text, propsData) {
            if(currentToast) {
                currentToast.close();
            }
            currentToast = generateToastComponent(Vue, text, propsData, ()=> {
                currentToast = null;
            });
        }
    }
}

function generateToastComponent(Vue, text, propsData, callback) {
    let Constructor = Vue.extend(Toast);
    let toast = new Constructor({
        propsData,
    });
    // the node in the toast component is text
    toast.$slots.default = text;
    toast.$mount();
    toast.$on('toastClose', callback);
    document.body.appendChild(toast.$el);

    return toast;
}