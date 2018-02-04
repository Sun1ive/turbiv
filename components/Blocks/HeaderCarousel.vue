<template>
  <v-container fluid>
    <slider 
      height="800px"
      :speed="900"
      animation="fade"
    >
      <slider-item v-for="(item, i) in items" :key="i">
        <div class="slider-text">{{ item.text }}</div>
        <img :src="item.src" :alt="i">
      </slider-item>
    </slider>
    <app-custom />
  </v-container>
</template>

<script>
import { Slider, SliderItem } from 'vue-easy-slider';
import Custom from './CustomBlock';

export default {
  components: {
    'app-custom': Custom,
    slider: Slider,
    'slider-item': SliderItem,
  },
  data: () => ({
    items: [
      {
        src: '/slider/4.jpg',
        text: 'Оперативный пошив крупных оптовых партий изделий «под ключ»',
      },
      {
        src: '/slider/3.jpg',
        text: 'Исполнение заказа из материала заказчика',
      },
      {
        src: '/slider/1.jpg',
        text: 'Производство небольших партий товаров (мелкий ОПТ)',
      },
      {
        src: '/slider/2.jpg',
        text: 'Продажа ткани в рулонах',
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
