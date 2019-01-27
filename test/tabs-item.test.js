import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsNav from '../src/tabs-nav'
import TabsItem from '../src/tabs-item'
import TabsContent from '../src/tabs-content'
import TabsPane from '../src/tabs-pane'


Vue.component('mw-tabs', Tabs);
Vue.component('mw-tabs-nav', TabsNav);
Vue.component('mw-tabs-item', TabsItem);
Vue.component('mw-tabs-content', TabsContent);
Vue.component('mw-tabs-pane', TabsPane);

const expect = chai.expect;
Vue.config.productionTip = false;
Vue.config.devtools = false;

global._babelPolyfill = false;

describe('TabsItem', () => {

    it('存在.', () => {
        expect(TabsItem).to.exist
    });

    it('接受 name', () => {
        const Constructor = Vue.extend(TabsItem)
        const vm = new Constructor({
            propsData: {
            name: 'xxx',
            }
        }).$mount();
        expect(vm.$el.getAttribute('data-name')).to.eq('xxx');
        vm.$el.remove();
        vm.$destroy();
    });
    it('接受 order', (done) => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        div.innerHTML = `
            <mw-tabs selected="finance">
                <mw-tabs-nav>
                    <mw-tabs-item name="woman" order=1> 美女 </mw-tabs-item>
                    <mw-tabs-item name="finance" order=2 data-name="xxx"> 财经 </mw-tabs-item>
                    <mw-tabs-item name="sports" order=3> 体育 </mw-tabs-item>
                </mw-tabs-nav>
                <mw-tabs-content>
                    <mw-tabs-pane name="woman"> 美女相关资讯 </mw-tabs-pane>
                    <mw-tabs-pane name="finance"> 财经相关资讯 </mw-tabs-pane>
                    <mw-tabs-pane name="sports"> 体育相关资讯 </mw-tabs-pane>
                </mw-tabs-content>
            </mw-tabs>
        `;
        let vm = new Vue({
            el: div
        });

        let x = vm.$el.querySelector(`.tabs-item[data-name="xxx"]`);
        const callback = sinon.fake();
        x.addEventListener('click', callback);
        x.click();

        vm.$nextTick(() => {
            let tabsPaneWrapper = vm.$el.querySelector(`.tabs-pane-wrapper`);
            expect(tabsPaneWrapper.style.transform).to.eq('translateX(-100%)');
            done();
            vm.$el.remove();
            vm.$destroy();
        });
    });
    it('接受 disabled', () => {
        const Constructor = Vue.extend(TabsItem);
        const vm = new Constructor({
            propsData: {
                disabled: true,
            }
        }).$mount();
        expect(vm.$el.classList.contains('disabled')).to.be.true;
        const callback = sinon.fake();
        vm.$on('click', callback);
        vm.$el.click();
        expect(callback).to.have.not.been.called;

        vm.$el.remove();
        vm.$destroy();
    });
});