import Vue from 'vue';
import Main from './main.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  store,
  render: h => h(Main),
}).$mount('#app');
