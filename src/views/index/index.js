import temp from './index.html';
import index from 'index';
import router from 'router';
import store from 'store';

new Vue({
    el:'#index',
    router,
    store,
    render:h => h(index)
});
