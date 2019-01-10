import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

import Chai from 'chai'
import Spies from 'chai-spies'

Vue.component('mw-button', Button);
Vue.component('mw-icon', Icon);
Vue.component('mw-button-group', ButtonGroup);

new Vue({
    el: '#app',
    data: {
        loadingState1: true,
        loadingState2: false,
        loadingState3: false,
    },
});

// unit test
Chai.use(Spies);
const expect = Chai.expect;
{
    const Constructor = Vue.extend(Icon);
    const vm = new Constructor({ 
        propsData: {
            name: 'settings'
        }
    }).$mount();

    let useEl = vm.$el.querySelector('use');
    let href = useEl.getAttribute('xlink:href');
    expect(href).to.equal('#icon-settings');

    vm.$el.remove();
    vm.$destroy();
}
{
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({ 
        propsData: {
            icon: null,
            iconPosition: 'left',
            loading: true 
        }
    }).$mount();

    let useEl = vm.$el.querySelector('use');
    let href = useEl.getAttribute('xlink:href');
    expect(href).to.equal('#icon-loading');
    vm.$el.remove();
    vm.$destroy();
}
{
    const div = document.createElement('div');
    document.body.appendChild(div);
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
            iconPosition: 'left',
            loading: false 
        }
    });
    vm.$mount(div);
    let svg = vm.$el.querySelector('svg');
    let { order } = window.getComputedStyle(svg);
    expect(order).to.eq('1');
    vm.$el.remove();
    vm.$destroy();
}
{
    const div = document.createElement('div');
    document.body.appendChild(div);
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
            iconPosition: 'right',
            loading: false 
        }
    });
    vm.$mount(div);
    let svg = vm.$el.querySelector('svg');
    let { order } = window.getComputedStyle(svg);
    expect(order).to.eq('2');
    vm.$el.remove();
    vm.$destroy();
}
{
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
        }
    });
    vm.$mount();
    let spy = Chai.spy(function () {
        console.log('function has been called');
     });

    vm.$on('click', spy);
    // hope this function will be called 
    let button = vm.$el;
    button.click();
    expect(spy).to.have.been.called();
}

