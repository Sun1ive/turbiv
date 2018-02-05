<template>
  <div id="app">
    <Header />
    <router-view/>
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
#app
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color #F4F4F4

</style>
