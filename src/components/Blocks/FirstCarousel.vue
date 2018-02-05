<template>
  <swiper :options="swiperOptions">
    <swiper-slide 
      v-for="item in items" 
      :key="item.text">
      <div 
        :style="{ background: 'url(' + item.src + ')' ,}" 
        class="slider-img"
        v-text="item.text" />
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
        text: 'Оперативный пошив крупных оптовых партий изделий «под ключ»',
      },
      {
        src: '/static/slider/5.jpg',
        text: 'Исполнение заказа из материала заказчика',
      },
      {
        src: '/static/slider/4.jpg',
        text: 'Производство небольших партий товаров (мелкий ОПТ)',
      },
      {
        src: '/static/slider/2.jpg',
        text: 'Продажа ткани в рулонах',
      },
    ],
    swiperOptions,
  }),
};
</script>

<style scoped lang="stylus">
.slider-img
  background-position 0 -80px !important
  min-height 700px
  display flex
  align-items center
  justify-content center
  font-size 5rem
  color #fff
  text-align center
  font-weight bold
</style>
