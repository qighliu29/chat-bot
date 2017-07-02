import Vue from 'vue';
import store from './store';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import App from './App.vue';

Vue.use(ElementUI);

new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App)
})
