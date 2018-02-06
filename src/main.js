import Vue from 'vue';
import VueSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import VueScrollTo from 'vue-scrollto';
import Vuelidate from 'vuelidate';
import { Vuetify, VParallax } from 'vuetify';

import App from './App';
import router from './router';
import Information from './components/Templates/Infomation';
import Form from './components/Shared/Form';
import Button from './components/Shared/Button';
import '../src/style/main.styl';

Vue.use(VueSwiper);
Vue.use(Vuelidate);
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
Vue.component('Button', Button)

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
