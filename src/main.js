import 'element-ui/lib/theme-default/index.css';
import './assets/style/font-awesome-4.7.0/css/font-awesome.min.css';
import './assets/style/layout.scss';

import Vue from 'vue';
import store from './store';
import router from './router';
import ElementUI from 'element-ui';
import App from './App.vue';

Vue.use(ElementUI);

new Vue({
    store,
    router,
    el: '#app',
    render: h => h(App)
})