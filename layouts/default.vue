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
.fade-enter-active, .fade-leave-active
  transition: opacity 1s;

.fade-enter, .fade-leave-to
  opacity: 0;

.container
  padding 0

p
  margin-bottom 0

.carousel
  height 600px

.application--wrap > main:not(.content)
  flex-direction: column

.head-title
  color #2EAEE4
  font-weight normal
</style>
