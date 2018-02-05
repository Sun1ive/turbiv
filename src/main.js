import Vue from 'vue';
import VueSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import VueScrollTo from 'vue-scrollto';

import { Vuetify, VParallax } from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import App from './App';
import router from './router';
import Information from './components/Templates/Infomation';
import Form from './components/Shared/Form';
import '../src/style/main.styl';

Vue.use(VueSwiper);
Vue.use(VueScrollTo, {
  duration: 1000,
  easing: 'linear',
  offset: -150,
});

Vue.use(Vuetify, {
  components: {
    VParallax,
  },
});
Vue.component('Information', Information);
Vue.component('Form', Form);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
