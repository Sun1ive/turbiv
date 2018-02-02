<template>
  <v-container fluid id="products">
    <v-layout align-center class="wrapper my-5">
      <v-flex xs12>
        <h2 class="head-title">Некоторые наши заказы</h2>
      </v-flex>
    </v-layout>
    <v-layout 
      justify-center 
      aling-center 
      class="productsLayout" 
      wrap
    >
      <v-flex xs10 sm7 md6 lg5>
        <v-layout align-center>
          <router-link
            class="box_wrapper"
            tag="div" 
            to="product-one"
          >
            <div class="box one">
              <div class="box__overlay" />
              <div class="box__sticker" />
              <div class="box__item">
                <h1 class="text-xs-center">Производство товаров для спальни</h1>
              </div>
            </div>
          </router-link>
        </v-layout>
      </v-flex>
      <v-flex xs10 sm7 md6 lg5>
        <v-layout justify-end align-center>
          <router-link
            class="box_wrapper"
            tag="div" 
            to="product-two"
          >
            <div class="box two">
              <div class="box__overlay" />
              <div class="box__sticker" />
              <div class="box__item">
                <h1 class="text-xs-center">Оптовая продажа ткани</h1>
              </div>
            </div>
          </router-link>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style scoped lang="stylus">
.productsLayout
  min-height 600px
  margin-bottom 5rem
  .box
    background-position center center
    background-size cover
    height 500px
    width 700px
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
      opacity .05
      &:hover
        cursor pointer
    &__item
      color #fff
      z-index 2
  .one
    background url('/static/products/1.jpg') center center no-repeat
    background-size cover
  .two
    background url('/static/products/2.jpg') center center no-repeat
    background-size cover


@media (max-width 1300px)
  .productsLayout
    .box
      width 500px
      height 500px
      h1
        font-size 2rem

@media (max-width 1100px)
  .productsLayout
    .box
      width 400px
      height 400px
      h1
        font-size 1.5rem

@media (max-width 1000px)
  .productsLayout
    .box
      width 500px
      height 500px
      margin 1rem 0

@media (max-width 600px)
  .productsLayout
    .box
      width 400px
      height 400px

@media (max-width 400px)
  .productsLayout
    .box
      width 300px
      height 300px
      h1
        font-size 1.2rem
        
</style>
