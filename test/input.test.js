import Vue from 'vue'
import Input from '../src/input'

// use macha and sinon-chai
const expect = chai.expect;

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {

  it('存在.', () => {
    expect(Input).to.exist
  })

  describe('props', () => {
    const Constructor = Vue.extend(Input);
    let vm;
    afterEach(() => {
      vm.$destroy()
    });

    it('接收 name', () => {
      vm = new Constructor({
        propsData: {
          name: '1234'
        }
      }).$mount();
      const labelElement = vm.$el.querySelector('label');
      expect(labelElement.innerText).to.equal('1234');
    });

    it('接收 alignment', () => {
      vm = new Constructor({
        propsData: {
          alignment: 'vertical'
        }
      }).$mount();
      const rootElement = vm.$el;
      expect(rootElement.classList.contains('align-vertical')).to.equal(true);
    });

    it('接收 value', () => {
      vm = new Constructor({
        propsData: {
          value: '1234'
        }
      }).$mount();
      const inputElement = vm.$el.querySelector('input');
      expect(inputElement.value).to.equal('1234');
    });

    it('接收 error', () => {
      vm = new Constructor({
        propsData: {
          error: 'hello world'
        }
      }).$mount();
      const useElement = vm.$el.querySelector('use');
      expect(useElement.getAttribute('xlink:href')).to.equal('#icon-error');
      const errorMessage = vm.$el.querySelector('.describe');
      expect(errorMessage.innerText).to.equal('hello world');
    });

    it('接收 info', () => {
      vm = new Constructor({
        propsData: {
          info: 'hello world'
        }
      }).$mount();
      const useElement = vm.$el.querySelector('use');
      expect(useElement.getAttribute('xlink:href')).to.equal('#icon-info');
      const infoMessage = vm.$el.querySelector('.describe');
      expect(infoMessage.innerText).to.equal('hello world');
    });

    it('接收 placeholder', () => {
      vm = new Constructor({
        propsData: {
          placeholder: '1234'
        }
      }).$mount();
      const inputElement = vm.$el.querySelector('input');
      expect(inputElement.placeholder).to.equal('1234');
    });

    it('接收 type', () => {
      vm = new Constructor({
        propsData: {
          type: 'password'
        }
      }).$mount();
      const inputElement = vm.$el.querySelector('input');
      expect(inputElement.type).to.equal('password');
    });

    it('接收 disabled', () => {
      vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount();
      const inputElement = vm.$el.querySelector('input');
      expect(inputElement.disabled).to.equal(true);
    });
    it('接收 readonly', () => {
      vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount();
      const inputElement = vm.$el.querySelector('input');
      // attention the read'O'nly here
      expect(inputElement.readOnly).to.equal(true);
    });
  });

  describe('事件', () => {
    const Constructor = Vue.extend(Input);
    let vm;
    afterEach(() => {
      vm.$destroy();
    });
    it('支持 change/input/focus/blur 事件', () => {
      ['change', 'input', 'focus', 'blur'].forEach((eventName) => {
          vm = new Constructor({}).$mount();
          const callback = sinon.fake();
          vm.$on(eventName, callback);
          //emit input change event
          let event = new Event(eventName);
          Object.defineProperty(
            event, 'target', {
              value: {value: 'hello world'}, enumerable: true
            }
          );
          let inputElement = vm.$el.querySelector('input');
          inputElement.dispatchEvent(event);
          expect(callback).to.have.been.calledWith('hello world');
        });
    });
  });
});