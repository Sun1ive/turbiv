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
  height 535px

@media (max-width 1600px)
  .slider-img
    height 450px

@media (max-width 1500px)
  .slider-img
    height 430px

@media (max-width 1300px)
  .slider-img
    height 400px

@media (max-width 1200px)
  .slider-img
    height 320px

</style>
