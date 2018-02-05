import Vue from 'vue';
import Router from 'vue-router';
import Header from '../components/Header';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Header },
    { path: '/Bedroom', component: () => import('../components/pages/Bedroom') },
    { path: '/Wholesale', component: () => import('../components/pages/Wholesale') },
  ],
});
