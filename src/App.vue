<template>
  <div id="app">
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Shared/Header';
import Footer from './components/Shared/Footer';

export default {
  components: {
    Header,
    Footer,
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
