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
      <v-flex xs10 sm6 lg5 class="text-xs-center">
        <h1 class="mb-3">Производство товаров для спальни</h1>
        <p class="text-xs-left">За уют и комфорт в доме отвечает большое количество элементов декора. Мы уверены, что не малую роль отводится выбору домашнего текстиля. С гордостью можем сказать, что десятки тысяч семей из Европы уже оценили нашу продукцию. Почему наши клиенты и клиенты наших клиентов довольны продукцией? Все просто: 1. Мы производим товары для спальни наших клиентов из качественных и натуральных материалов; 2. Цены, которые мы предлагаем нашим партнерам, способны выдержать конкуренцию с любыми производителями, что при высоком качестве готовой продукции не оставляет другого выбора. </p>
        <br />
        <p class="text-xs-left">У нас персональный подход к каждому потенциальному клиенту, поэтому если у Вас есть дополнительные вопросы, с радостью свяжемся с Вами и найдем решение. Вы останетесь довольны сотрудничеством с нами!</p>
        <v-btn color="primary">
          <v-icon left>email</v-icon>
          Связаться
        </v-btn>
      </v-flex>
    </v-layout>
    <v-dialog>
      <app-form />
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: ['/111/1.jpg', '/111/2.jpg', '/111/3.jpg', '/111/4.jpg'],
  }),
};
</script>

<style scoped lang="stylus">
p
  text-indent 3rem
</style>
