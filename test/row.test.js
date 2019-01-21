import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

const expect = chai.expect;

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {

  it('存在.', () => {
    expect(Row).to.exist
  })

  describe('props', () => {
    it('接收 ditch', (done) => {
        const div = document.createElement('div');
        div.id = 'app';
        document.body.appendChild(div);
        Vue.component('mw-row', Row);
        Vue.component('mw-col', Col);
        div.innerHTML = `
          <mw-row ditch="20">
            <mw-col></mw-col>
            <mw-col></mw-col>
          </mw-row>
        `;

        const vm = new Vue({
            el: '#app'
        });
        setTimeout(()=>{
            let row = vm.$el.querySelector('.row');
            expect(getComputedStyle(row).marginLeft).to.eq('-10px');
            expect(getComputedStyle(row).marginRight).to.eq('-10px');
            const cols = vm.$el.querySelectorAll('.col')
            expect(getComputedStyle(cols[0]).paddingRight).to.eq('10px')
            expect(getComputedStyle(cols[1]).paddingLeft).to.eq('10px')
            vm.$el.remove();
            vm.$destroy();
            done();
        });
    });

    it('接收 alignment', () => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        const Constructor = Vue.extend(Row);
        const vm = new Constructor({
        propsData: {
            alignment: 'right'
        }
        }).$mount(div);
        const element = vm.$el
        expect(getComputedStyle(element).justifyContent).to.equal('flex-end')
        div.remove()
        vm.$destroy()
    });
  });
});