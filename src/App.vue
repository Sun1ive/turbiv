<template>
  <div id="app">
    <Header @showModal="isActive = !isActive" />
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <Footer />
    <ScrollTop />
    <div class="modal" v-show="isActive">
      <div class="modal-content">
        <Form :white="true">
          <div 
            class="close" 
            slot="close"
            @click="isActive = !isActive"
          />
        </Form>
      </div>
    </div>
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
  data: () => ({
    isActive: false,
  }),
};
</script>

<style lang="stylus">
.fade-enter-active, .fade-leave-active
  transition: opacity .5s;

.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */
  opacity: 0;

</style>
