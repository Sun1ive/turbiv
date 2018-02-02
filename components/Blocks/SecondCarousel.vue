<template>
  <slider 
    :speed="900"
    animation="fade"
    height="600px"
  >
    <slider-item v-for="(item, i) in items" :key="i">
      <div class="slider-text">{{ item.text }}</div>
      <img class="slider__img" :src="item.src" :alt="i">
    </slider-item>
  </slider>
</template>

<script>
import { Slider, SliderItem } from 'vue-easy-slider';

export default {
  components: {
    'slider': Slider,
    'slider-item': SliderItem,
  },
  data: () => ({
    items: [
      {
        src: '/slider2/1.jpg',
        text: 'Cотрудничество с лидирующими фабриками-производителями ткани',
      },
      {
        src: '/slider2/2.jpg',
        text: 'Конкурентные цены',
      },
      {
        src: '/slider2/3.jpg',
        text: 'Индивидуальный подход к каждому клиенту',
      },
      {
        src: '/20.jpg',
        text: 'Вежливое обслуживание',
      },
    ]
  })
};
</script>

<style lang="stylus">
.slider__img
  width 100%
</style>
