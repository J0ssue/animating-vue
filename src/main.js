import Vue from "vue";
import router from './router/router.js';
import App from "./App.vue";
import './assets/sass/main.scss';

Vue.config.productionTip = false;

new Vue({
  router: router,
  render: h => h(App),
}).$mount("#app");