import Vue from 'vue'
import Toast from '../src/toast'

const expect = chai.expect;

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Toast', () => {

  it('存在.', () => {
    expect(Toast).to.exist;
  });

  describe('props', function () {
    it('接受 isAutoClose', (done) => {
      let div = document.createElement('div');
      document.body.appendChild(div);
      const Constructor = Vue.extend(Toast);
      const vm = new Constructor({
        propsData: {
          isAutoClose: true,
          autoCloseDelay: 1
        }
      }).$mount(div);
      vm.$on('toastClose', () => {
        expect(document.body.contains(vm.$el)).to.eq(false);
        done();
      });
    });
    it('接受 autoCloseDelay', (done) => {
      let div = document.createElement('div');
      document.body.appendChild(div);
      const Constructor = Vue.extend(Toast);
      const vm = new Constructor({
        propsData: {
          isAutoClose: true,
          autoCloseDelay: 1
        }
      }).$mount(div);
      setTimeout(() => {
        expect(document.body.contains(vm.$el)).to.eq(false);
        done();
      }, 1500);
    });
    it('接受 isHtml', () => {
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
            isHtml: true
        }
      });
      vm.$slots.default = ['<strong id="test">hi</strong>'];
      vm.$mount();
      let strong = vm.$el.querySelector('#test');
      expect(strong).to.exist;
    });
    it('接受 closeButton', () => {
      const callback = sinon.fake();
      const Constructor = Vue.extend(Toast);
      const vm = new Constructor({
        propsData: {
          closeButton: {
            text: 'hello world',
            callback,
          },
        }
      }).$mount();
      let closeButton = vm.$el.querySelector('.close-button');
      expect(closeButton.textContent.trim()).to.eq('hello world');
      closeButton.click();
      expect(callback).to.have.been.called;
    });
    it('接受 position', () => {
      const Constructor = Vue.extend(Toast);
      const vm = new Constructor({
        propsData: {
          position: 'middle'
        }
      }).$mount();
      expect(vm.$el.classList.contains('align-middle')).to.eq(true);
    })
  });
});