import { mount } from 'vue-test-utils';
import Counter from '../src/components/Counter.vue';
import expect from 'expect';

describe('Counter', () => {

    let wraper;
    beforeEach(() => {
        wraper = mount(Counter);
    });

    it('defaults to a count of 0', () => {
        expect(wraper.vm.count).toBe(0);
    });
    
    it('increments the count when the increment button is clicked', () => {
        expect(wraper.vm.count).toBe(0);
        wraper.find('.increment').trigger('click');
        expect(wraper.vm.count).toBe(1);
    });

    it('decrements the count when the decrement button is clicked', () => {
        wraper.setData({count: 5});
        wraper.find('.decrement').trigger('click');
        expect(wraper.vm.count).toBe(4);
    });
    
    it.only('never goes below cero', () => {
        expect(wraper.vm.count).toBe(0);
        expect(wraper.find('.decrement').hasStyle('display', 'none')).toBe(true);
        wraper.find('.increment').trigger('click');
        expect(wraper.find('.decrement').hasStyle('display', 'none')).toBe(false);
    });
    
    it('presents the current count', () => {
        expect(wraper.find('.count').html()).toContain(0);
        wraper.find('button').trigger('click');
        expect(wraper.find('.count').html()).toContain(1);
    });

});
