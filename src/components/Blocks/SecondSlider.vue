<template>
  <swiper :options="swiperOptions">
    <swiper-slide 
      v-for="item in items" 
      :key="item.text">
      <div 
        :style="{ background: 'url(' + item.src + ')' ,}" 
        class="slider-img"
      />
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
  display flex
  align-items center
  justify-content center
  font-size 5rem
  color #fff
  text-align center
  font-weight bold
  background-size cover !important
  background-repeat no-repeat !important
  width 100%

</style>
