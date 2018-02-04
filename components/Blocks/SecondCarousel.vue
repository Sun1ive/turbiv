<template>
  <slider 
    :speed="900"
    animation="fade"
  >
    <slider-item class="slider__item" v-for="(item, i) in items" :key="i">
      <img class="slider__img" :src="item.src" :alt="i">
    </slider-item>
  </slider>
</template>

<script>
import { Slider, SliderItem } from 'vue-easy-slider';

export default {
  components: {
    slider: Slider,
    'slider-item': SliderItem,
  },
  data: () => ({
    items: [
      // { src: '/slider2/1.jpg', text: 'Cотрудничество с лидирующими фабриками-производителями ткани', },
      // { src: '/slider2/2.jpg', text: 'Конкурентные цены', },
      // { src: '/slider2/3.jpg', text: 'Индивидуальный подход к каждому клиенту', },
      { src: '/slider2/4.jpg' },
    ],
  }),
};
</script>

<style lang="stylus" scoped>
.slider,
.items,
.slider-item
  height 600px !important

.slider__img
  width 100%

@media (max-width 1300px)
  .slider, .items, .slider-item
    height 400px !important

</style>
