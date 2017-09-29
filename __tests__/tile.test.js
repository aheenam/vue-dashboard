import Tile from '../src/Tile'
import Vue from 'vue'

describe('tile-test', () => {

    const Constructor = Vue.extend(Tile);
    const vm = new Constructor({
        propsData: { x: 1, y: 1, w: 1, h: 1 }
      }).$mount()

    it('should match the snapshot', () => {
        expect(vm.$el).toMatchSnapshot()
    });

})
