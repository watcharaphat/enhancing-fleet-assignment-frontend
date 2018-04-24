// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import App from './App';
import router from './router';
import store from './store';
import './assets/sass/main.scss';

Vue.use(Vuex);
Vue.config.productionTip = false;

// axios config
axios.defaults.baseURL = 'http://watcharaphat.com:3000';
// axios.defaults.headers = {
//   'Access-Control-Allow-Origin': '*',
//   'Allow-Control-Allow-Origin': '*',
// };

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
