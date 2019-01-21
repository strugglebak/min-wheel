import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

const expect = chai.expect;

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {

  it('存在.', () => {
    expect(Col).to.exist
  })

  describe('props', () => {
    const Constructor = Vue.extend(Col);
    let vm;
    afterEach(() => {
        vm.$destroy()
    });

    it('接收 scale', () => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        vm = new Constructor({
            propsData: {
                scale: 1
            }
        }).$mount(div);
        const element = vm.$el;
        expect(vm.$el.classList.contains('scale-1')).to.eq(true);
        div.remove();
    });
    it('接收 offset', () => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        vm = new Constructor({
            propsData: {
                offset: 1
            }
        }).$mount(div);
        const element = vm.$el;
        expect(vm.$el.classList.contains('offset-1')).to.eq(true);
        div.remove();
    });
    it('接收 pad', () => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        vm = new Constructor({
            propsData: {
                pad: {scale: 1, offset: 1}
            }
        }).$mount(div);
        const element = vm.$el;
        expect(vm.$el.classList.contains('pad-scale-1')).to.eq(true);
        expect(vm.$el.classList.contains('pad-offset-1')).to.eq(true);
        div.remove();
    });
    it('接收 narrowpc', () => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        vm = new Constructor({
            propsData: {
                narrowpc: {scale: 1, offset: 1}
            }
        }).$mount(div);
        const element = vm.$el;
        expect(vm.$el.classList.contains('narrowpc-scale-1')).to.eq(true);
        expect(vm.$el.classList.contains('narrowpc-offset-1')).to.eq(true);
        div.remove();
    });
    it('接收 pc', () => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        vm = new Constructor({
            propsData: {
                pc: {scale: 1, offset: 1}
            }
        }).$mount(div);
        const element = vm.$el;
        expect(vm.$el.classList.contains('pc-scale-1')).to.eq(true);
        expect(vm.$el.classList.contains('pc-offset-1')).to.eq(true);
        div.remove();
    });
    it('接收 widepc', () => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        vm = new Constructor({
            propsData: {
                widepc: {scale: 1, offset: 1}
            }
        }).$mount(div);
        const element = vm.$el;
        expect(vm.$el.classList.contains('widepc-scale-1')).to.eq(true);
        expect(vm.$el.classList.contains('widepc-offset-1')).to.eq(true);
        div.remove();
    });
  });
});