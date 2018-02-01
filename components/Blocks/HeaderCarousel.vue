<template>
  <v-container fluid>
    <!-- <v-carousel 
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
    </v-carousel> -->
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
    <app-custom />
  </v-container>
</template>

<script>
import { Slider, SliderItem } from 'vue-easy-slider';
import Custom from './CustomBlock';

export default {
  components: {
    'app-custom': Custom,
    'slider': Slider,
    'slider-item': SliderItem,
  },
  data: () => ({
    items: [
      {
        src: '/slider/1.jpg',
        id: 1,
        text: 'Оперативный пошив крупных оптовых партий изделий «под ключ»'
      },
      {
        src: '/slider/2.jpg',
        id: 2,
        text: 'Исполнение заказа из материала заказчика.'
      },
      {
        src: '/slider/3.jpg',
        id: 3,
        text: 'Производство небольших партий товаров (мелкий ОПТ)'
      },
      {
        src: '/slider/4.jpg',
        id: 4,
        text: 'Продажа ткани в рулонах.'
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
