import Vue from 'vue'
import Collapse from '../src/collapse'
import CollapseItem from '../src/collapse-item'

Vue.config.productionTip = false;
Vue.config.devtools = false;

const expect = chai.expect;

describe('Collapse', () => {

  it('存在.', () => {
    expect(Collapse).to.exist;
  });

  it('接受 accordion', (done) => {
    Vue.component('mw-collapse', Collapse)
    Vue.component('mw-collapse-item', CollapseItem)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
        <mw-collapse accordion>
          <mw-collapse-item title="标题1" name="1"><span id="content-1">1</span></mw-collapse-item>
          <mw-collapse-item title="标题2" name="2"><span id="content-2">2</span></mw-collapse-item>
          <mw-collapse-item title="标题3" name="3"><span id="content-3">3</span></mw-collapse-item>
        </mw-collapse>
    `;
    const vm = new Vue({
      el: div,
    });
    setTimeout(() => {
      vm.$el.querySelector('[data-name="2"]').click()
      vm.$nextTick(() => {
        expect(vm.$el.querySelector('#content-1')).to.not.exist;
        expect(vm.$el.querySelector('#content-2')).to.exist;
        done();
        vm.$el.remove();
        vm.$destroy();
      });
    });
  });

  it('接受 selected', (done) => {
    Vue.component('mw-collapse', Collapse);
    Vue.component('mw-collapse-item', CollapseItem);
    const div = document.createElement('div');
    document.body.appendChild(div);
    div.innerHTML = `
        <mw-collapse :selected="xxx">
          <mw-collapse-item title="标题1" name="1"><span id="content-1">1</span></mw-collapse-item>
          <mw-collapse-item title="标题2" name="2"><span id="content-2">2</span></mw-collapse-item>
          <mw-collapse-item title="标题3" name="3"><span id="content-3">3</span></mw-collapse-item>
        </mw-collapse>
    `;
    const vm = new Vue({
      el: div,
      data: {
        xxx: ['1', '2']
      }
    });
    setTimeout(() => {
      expect(vm.$el.querySelector('#content-1')).to.exist;
      expect(vm.$el.querySelector('#content-2')).to.exist;
      expect(vm.$el.querySelector('#content-3')).to.not.exist;
      done();
      vm.$el.remove();
      vm.$destroy();
    });
  });
});