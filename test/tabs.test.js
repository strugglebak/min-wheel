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
Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {

    it('存在.', () => {
        expect(Tabs).to.exist
    });

    it('接受 selected', (done) => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        div.innerHTML = `
            <mw-tabs selected="finance">
            <mw-tabs-nav>
                <mw-tabs-item name="woman" order=1> 美女 </mw-tabs-item>
                <mw-tabs-item name="finance" order=2 data-name="finance"> 财经 </mw-tabs-item>
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
        vm.$nextTick(() => {
            let x = vm.$el.querySelector(`.tabs-item[data-name="finance"]`);
            expect(x.classList.contains('active')).to.be.true;
            done();
            vm.$el.remove();
            vm.$destroy();
        });
    });

    it('接受 positionChanged', (done) => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        div.innerHTML = `
            <mw-tabs selected="finance"
                position-changed="left">
            <mw-tabs-nav>
                <mw-tabs-item name="woman" order=1> 美女 </mw-tabs-item>
                <mw-tabs-item name="finance" order=2> 财经 </mw-tabs-item>
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
        vm.$nextTick(() => {
            let x = vm.$el.querySelector(`.tabs`);
            expect(x.classList.contains('align-horizontal')).to.be.true;
            let style = getComputedStyle(vm.$el);
            expect(style['flexDirection']).to.eq('row');
            done();
            vm.$el.remove();
            vm.$destroy();
        });
    });

    it('接受 enableExtra', (done) => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        div.innerHTML = `
            <mw-tabs selected="finance"
                :enable-extra="false">
            <mw-tabs-nav>
                <template slot="actions">
                    <button>Extra Action</button>
                </template>
                <mw-tabs-item name="woman" order=1> 美女 </mw-tabs-item>
                <mw-tabs-item name="finance" order=2> 财经 </mw-tabs-item>
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
        vm.$nextTick(() => {
            let x = vm.$el.querySelector('.actions-wrapper');
            expect(x).to.eq(null);
            done();
            vm.$el.remove();
            vm.$destroy();
        });
    });
});