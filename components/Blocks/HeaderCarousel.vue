<template>
  <v-container fluid>
    <v-carousel 
      hide-delimiters 
      lazy 
      class="header__carousel"
    >
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        transition="fade"
        reverseTransition="fade"
      />
    </v-carousel>
    <app-custom />
  </v-container>
</template>

<script>
import Custom from './CustomBlock';

export default {
  components: {
    'app-custom': Custom,
  },
  data: () => ({
    items: [
      {
        src: '/slider/1.jpg',
        id: 1,
      },
      {
        src: '/slider/2.jpg',
        id: 2,
      },
      {
        src: '/slider/3.jpg',
        id: 3,
      },
      {
        src: '/slider/4.jpg',
        id: 4,
      },
    ],
  }),
};
</script>

<style lang="stylus">
.container
  position relative
  .header__carousel
    height 600px
</style>
