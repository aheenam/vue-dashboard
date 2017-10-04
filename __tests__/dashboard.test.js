import { Dashboard } from '../src/index'
import Vue from 'vue'

describe('dashboard-test', () => {

    const Constructor = Vue.extend(Dashboard);
    const vm = new Constructor().$mount()

    it('should match the snapshot', () => {
        expect(vm.$el).toMatchSnapshot()
    });

})
