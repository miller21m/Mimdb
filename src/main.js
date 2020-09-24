import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import store from './store'

import router from './router';

Vue.config.productionTip = false

axios.defaults.baseURL='http://www.omdbapi.com'//The base url where all the data about movies and tv series stored


new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
