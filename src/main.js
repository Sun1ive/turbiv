import Vue from 'vue';
import VueSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import router from './router';
import '../src/style/main.styl';

Vue.use(VueSwiper);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
