<template>
  <v-flex xs10 sm6 lg5 class="text-xs-center">
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
</template>

<style lang="stylus" scoped>
p
  font-size 1.1rem
</style>
