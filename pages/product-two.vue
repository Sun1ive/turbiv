<template>
  <v-container>
    <v-layout class="my-5" justify-space-around align-center>
      <v-flex xs10 sm6 lg5>
        <v-carousel 
          hide-delimiters
          lazy
        >
          <v-carousel-item
            v-for="(item,i) in items"
            :src="item"
            :key="i"
            transition="fade"
            reverseTransition="fade"
          />
        </v-carousel>
      </v-flex>
      <app-review>
        <template slot="head">Производство товаров для спальни</template>
        <template slot="firstPara">На сегодня наша компания ведет активную работу по привлечению крупных заказов на производство домашнего текстиля. И за счет крупных партий заказов и персональных договоренностей с нашими партнерами-производителями ткани, мы получаем отличную цену. При необходимости, готовы рассмотреть запросы по оптовой продаже ткани в рулонах и договориться о дальнейшем сотрудничестве.</template>
        <v-btn 
          color="primary" 
          @click="isActive = !isActive"
          slot="button"
        >
          <v-icon left>email</v-icon>
          Связаться
        </v-btn>
      </app-review>
    </v-layout>
    <v-dialog 
      v-model="isActive"
      width="500"
    >
      <app-form :white="true">
        <div 
          class="close" 
          slot="close"
          @click="isActive = !isActive"
        />
      </app-form>
    </v-dialog>
  </v-container>
</template>

<script>
import ProductReview from '../components/Shared/ProductReview';

export default {
  components: {
    'app-review': ProductReview,
  },
  data: () => ({
    items: ['/111/5.jpg', '/111/6.jpg', '/111/7.jpg', '/111/8.jpg'],
    isActive: false,
  }),
};
</script>

<style scoped>

</style>
