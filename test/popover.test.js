import Vue from 'vue'
import Popover from '../src/popover'

Vue.component('mw-popover', Popover);

Vue.config.productionTip = false;
Vue.config.devtools = false;

const expect = chai.expect;

describe('Popover', () => {

  it('存在.', () => {
    expect(Popover).to.exist;
  });

  it('接受 offset', (done)=> {
    const div = document.createElement('div');
    document.body.appendChild(div);
    div.innerHTML = `
    <mw-popover offset=24 ref="a">
      <template slot="content">
      弹出内容
      </template>
      <button>点我</button>
    </mw-popover>
    `;
    const vm = new Vue({
      el: div
    });
    vm.$nextTick(() => {
      expect(vm.$refs.a.offset).to.eq('24');
      done();
      vm.$el.remove();
      vm.$destroy();
    });
  });
  it('接受 position', (done)=> {
    const div = document.createElement('div');
    document.body.appendChild(div);
    div.innerHTML = `
    <mw-popover position="bottom" ref="a">
      <template slot="content">
      弹出内容
      </template>
      <button>点我</button>
    </mw-popover>
    `;
    const vm = new Vue({
      el: div
    });
    vm.$nextTick(() => {
      expect(vm.$refs.a.position).to.eq('bottom');
      done();
      vm.$el.remove();
      vm.$destroy();
    });
  });
  it('接受 width', (done)=> {
    const div = document.createElement('div');
    document.body.appendChild(div);
    div.innerHTML = `
    <mw-popover width="400" ref="a">
      <template slot="content">
      弹出内容
      </template>
      <button>点我</button>
    </mw-popover>
    `;
    const vm = new Vue({
      el: div
    });
    vm.$nextTick(() => {
      expect(vm.$refs.a.width).to.eq('400');
      done();
      vm.$el.remove();
      vm.$destroy();
    });
  });
  it('接受 trigger', (done)=> {
    const div = document.createElement('div');
    document.body.appendChild(div);
    div.innerHTML = `
    <mw-popover trigger="hover" ref="a">
      <template slot="content">
      弹出内容
      </template>
      <button>点我</button>
    </mw-popover>
    `;
    const vm = new Vue({
      el: div
    });
    
    setTimeout(() => {
      let event = new MouseEvent('mouseenter', {
          view: window,
          bubbles: true,
          cancelable: true
      });
      let cb = vm.$el.querySelector('button');
      cb.dispatchEvent(event);

      vm.$nextTick(() => {
        const {contentWrapper} = vm.$refs.a.$refs;
        expect(contentWrapper).to.be.exist;
        done();
        vm.$el.remove();
        vm.$destroy();
      });
    }, 200);

  });
});