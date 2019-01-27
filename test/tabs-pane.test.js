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

describe('TabsPane', () => {

    it('存在.', () => {
        expect(TabsPane).to.exist
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
});