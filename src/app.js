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
    '可以生成 icon'
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
    '可以设置 icon'
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings'
        }
    }).$mount()
    const useElement = vm.$el.querySelector('use')
    expect(useElement.getAttribute('xlink:href')).to.equal('#icon-settings')
    vm.$destroy()
}
{
    '可以设置 loading'
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
            loading: true
        }
    }).$mount()
    const useElements = vm.$el.querySelectorAll('use')
    expect(useElements.length).to.equal(1)
    expect(useElements[0].getAttribute('xlink:href')).to.equal('#icon-loading')
    vm.$destroy()
}
{
    'icon 默认的 order 是 1'
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
        }
    }).$mount(div)
    const icon = vm.$el.querySelector('svg')
    expect(getComputedStyle(icon).order).to.eq('1')
    vm.$el.remove()
    vm.$destroy()
}
{
    '设置 iconPosition 可以改变 order'
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
            iconPosition: 'right'
        }
    }).$mount(div)
    const icon = vm.$el.querySelector('svg')
    expect(getComputedStyle(icon).order).to.eq('2')
    vm.$el.remove()
    vm.$destroy()
}
{
    '点击 button 触发 click 事件'
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

