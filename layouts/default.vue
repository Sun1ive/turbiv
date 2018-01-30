<template>
  <v-app>
    <nuxt />
    <app-scroll />
  </v-app>
</template>

<script>
import ScrollTopVue from '../components/Shared/ScrollTop.vue';

export default {
  components: {
    'app-scroll': ScrollTopVue
  },
}
</script>
