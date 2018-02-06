<template>
  <div id="app">
    <Header />
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <Footer />
    <ScrollTop />
  </div>
</template>

<script>
import Header from './components/Shared/Header';
import Footer from './components/Shared/Footer';
import ScrollTop from './components/Shared/ScrollTop';

export default {
  components: {
    Header,
    Footer,
    ScrollTop,
  },
};
</script>

<style lang="stylus">
.fade-enter-active, .fade-leave-active
  transition: opacity .5s;

.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */
  opacity: 0;

</style>
