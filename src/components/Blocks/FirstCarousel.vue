<template>
  <swiper :options="swiperOptions">
    <swiper-slide 
      v-for="item in items" 
      :key="item.text">
      <div 
        :style="{ background: 'url(' + item.src + ')' ,}" 
        class="slider-img"
      >{{ $t(item.text) }}</div>
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
      {
        src: '/static/slider/1.jpg',
        text: 'first-slide',
      },
      {
        src: '/static/slider/5.jpg',
        text: 'second-slide',
      },
      {
        src: '/static/slider/3.jpg',
        text: 'third-slide',
      },
      {
        src: '/static/slider/2.jpg',
        text: 'fourth-slide',
      },
    ],
    swiperOptions,
  }),
};
</script>

<style scoped lang="stylus">
.slider-img
  min-height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 5rem;
  color: #fff;
  text-shadow: 2px 2px 10px #006ead;
  font-weight: bold;
  font-family: 'Open Sans', Arial, Helvetica, sans-serif;
  width: 100%

@media (max-width: 1300px)
  .slider-img
    min-height: 500px


</style>
