<template>
  <v-layout class="my-5" justify-center align-center wrap>
    <v-flex class="flex__carousel" xs10 sm10 md6>
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
    <v-flex xs10 sm10 md5 class="text-xs-center">
      <h1 class="mb-3">
        <slot name="head"></slot>
      </h1>
      <p class="text-xs-left">
        <slot name="firstPara"></slot>
      </p>
      <br />
      <p class="text-xs-left">У нас персональный подход к каждому потенциальному клиенту, поэтому если у Вас есть дополнительные вопросы, с радостью свяжемся с Вами и найдем решение. Вы останетесь довольны сотрудничеством с нами!
      </p>
      <br />
      <p>Для этого предлагаем Вам заполнить форму:</p>
      <slot name="button" />
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>


<style lang="stylus" scoped>
p
  font-size 1.1rem

.flex__carousel
  margin-right 2rem

@media (max-width 955px)
  .flex__carousel
    margin-right 0
    margin-bottom 2rem
</style>
