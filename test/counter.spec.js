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
    
    it('increments the count when the button is clicked', () => {
        expect(wraper.vm.count).toBe(0);
        wraper.find('button').trigger('click');
        expect(wraper.vm.count).toBe(1);
    });
    
    it('presents the current count', () => {
        expect(wraper.find('.count').html()).toContain(0);
        wraper.find('button').trigger('click');
        expect(wraper.find('.count').html()).toContain(1);
    });

});
