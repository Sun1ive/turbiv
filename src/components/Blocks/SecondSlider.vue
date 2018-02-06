<template>
  <swiper :options="swiperOptions">
    <swiper-slide 
      v-for="(item, i) in items" 
      :key="i">
      <img :src="item.src" class="slider-img" alt="slide">
    </swiper-slide>
    <div class="swiper-button-prev" slot="button-prev" />
    <div class="swiper-button-next" slot="button-next" />
  </swiper>
</template>

<script>
import swiperOptions from '@/helpers/options.js';

export default {
  data: () => ({
    items: [
      { src: '/static/slider2/china.jpg' },
      { src: '/static/slider2/1.jpg' },
      { src: '/static/slider2/2.jpg' },
      { src: '/static/slider2/3.jpg' },
    ],
    swiperOptions,
  }),
};
</script>

<style scoped lang="stylus">
.slider-img
  width 100%
  height 380px

</style>
