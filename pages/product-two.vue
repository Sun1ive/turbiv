<template>
  <v-container>      
    <app-review :items="items">
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
    items: ['/pages/5.jpg', '/pages/6.jpg', '/pages/7.jpg'],
    isActive: false,
  }),
};
</script>

<style scoped>

</style>
