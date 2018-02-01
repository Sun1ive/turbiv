<template>
  <slider 
    height="700px"
    :speed="900"
    animation="fade"
  >
    <slider-item v-for="(item, i) in items" :key="i">
      <div class="slider-text">{{ item.text }}</div>
      <img :src="item.src" :alt="i">
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
        src: '/2.jpg',
        id: 1,
        text: 'Cотрудничество с лидирующими фабриками-производителями ткани',
      },
      {
        src: '/5.jpg',
        id: 2,
        text: 'Конкурентные цены',
      },
      {
        src: '/9.jpg',
        id: 3,
        text: 'Индивидуальный подход к каждому клиенту',
      },
      {
        src: '/20.jpg',
        id: 4,
        text: 'Вежливое обслуживание',
      },
    ]
  })
};
</script>

<style lang="stylus">

</style>
