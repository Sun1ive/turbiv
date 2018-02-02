<template>
  <v-container>
    <app-review :items="items">
      <template slot="head">Производство товаров для спальни</template>
      <template slot="firstPara">За уют и комфорт в доме отвечает большое количество элементов декора. Мы уверены, что не малую роль отводится выбору домашнего текстиля. С гордостью можем сказать, что десятки тысяч семей из Европы уже оценили нашу продукцию. Почему наши клиенты и клиенты наших клиентов довольны продукцией? Все просто: 1. Мы производим товары для спальни наших клиентов из качественных и натуральных материалов; 2. Цены, которые мы предлагаем нашим партнерам, способны выдержать конкуренцию с любыми производителями, что при высоком качестве готовой продукции не оставляет другого выбора.</template>
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
    items: ['/111/1.jpg', '/111/2.jpg', '/111/3.jpg', '/111/4.jpg'],
    isActive: false,
  }),
};
</script>

<style scoped lang="stylus">
p
  text-indent 3rem

</style>
