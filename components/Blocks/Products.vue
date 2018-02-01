<template>
  <v-container fluid>
    <v-layout 
      justify-center 
      align-center
      class="my-5"
    >
      <v-flex xs10 sm6 lg4 class="text-xs-center">
        <h2 class="head-title">Наши товары</h2>
      </v-flex>
    </v-layout>
    <v-layout 
      justify-center
      aling-center 
      class="productsLayout"
    >
      <v-flex xs10 md5>
        <v-layout 
          justify-center 
          align-center
        >
          <router-link
            class="box_wrapper"
            tag="div" 
            to="product"
          >
            <div class="box">
              <div class="box__overlay" />
              <div class="box__sticker" />
              <div class="box__item">
                <h1>Цемент - стоит как гранит</h1>
              </div>
            </div>
          </router-link>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    products: [
      {
        title: 'Подушка из турбова',
        src: '/static/1.jpg',
        textBody: `Цемент ПЦ ІІ/А-Ш-500 використовується для надміцних фундаментів, балок і плит перекриття у житловому та промисловому будівництві. Також із даного цементу виготовляють залізобетонні конструкції підвищенної міцності.Завдяки підвищенній резистентності до корозії, морозостійкості та еластичності цемент М500, може використовуватись в умовах підвищенних температур та значній вологості.`,
      },
    ],
  }),
};
</script>

<style scoped lang="stylus">
.productsLayout
  min-height 600px
  margin-bottom 5rem
  .box
    background-image url('https://pmonolit.com.ua/wp-content/uploads/2017/08/c21.jpg');
    background-size cover
    min-height 600px
    min-width 600px
    display flex
    justify-content center
    align-items center
    position relative
    &__overlay
      position absolute
      background-color #347
      z-index 1
      width 100%
      height 100%
      opacity .4
      &:hover
        cursor pointer
    &__item
      color #fff
      z-index 2
</style>
