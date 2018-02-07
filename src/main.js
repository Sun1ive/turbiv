import Vue from 'vue';
import VueSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import VueScrollTo from 'vue-scrollto';
import Vuelidate from 'vuelidate';
import { Vuetify, VParallax } from 'vuetify';
import AOS from 'aos';
import 'aos/dist/aos.css';

import App from './App';
import router from './router';
import Information from './components/Templates/Infomation';
import Form from './components/Shared/Form';
import Button from './components/Shared/Button';
import '../src/style/main.styl';
import { i18n } from './locale';

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
Vue.component('Button', Button);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  mounted() {
    AOS.init({
      offset: 200,
      duration: 600
    });
  },
  render: h => h(App),
});
