import Tab from './components/Dashboard';
import Tabs from './components/Tile';

export default {
    install (Vue) {
        Vue.component('tab', Tab);
        Vue.component('tabs', Tabs);
    }
}

export { Tab, Tabs };
