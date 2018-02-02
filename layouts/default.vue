<template>
  <v-app>
    <app-header />
    <nuxt />
    <app-footer />
    <app-scroll />
  </v-app>
</template>

<script>
import ScrollTopVue from '../components/Shared/ScrollTop.vue';
import Header from '../components/Blocks/Header';
import Footer from '../components/Blocks/Footer';

export default {
  transition: {
    name: 'test',
    mode: 'out-in'
  },
  components: {
    'app-scroll': ScrollTopVue,
    'app-header': Header,
    'app-footer': Footer,
  },
};
</script>

<style lang="stylus">
@import '../style/main.styl'

</style>
