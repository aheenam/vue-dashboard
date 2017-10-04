import Dashboard from './components/Dashboard';
import Tile from './components/Tile';

export default {
    install (Vue) {
        Vue.component('dashboard', Dashboard);
        Vue.component('tile', Tile);
    }
}

export { Dashboard, Tile };
