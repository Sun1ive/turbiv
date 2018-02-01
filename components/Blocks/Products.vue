<template>
  <v-container fluid id="products">
    <v-layout 
      align-center
      class="my-5"
      justify-center
    >
      <v-flex xs10 sm9>
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
            to="product-one"
          >
            <div class="box one">
              <div class="box__overlay" />
              <div class="box__sticker" />
              <div class="box__item">
                <h1>Цемент - стоит как гранит</h1>
              </div>
            </div>
          </router-link>
        </v-layout>
      </v-flex>
      <v-flex xs10 md5>
        <v-layout 
          justify-center 
          align-center
        >
          <router-link
            class="box_wrapper"
            tag="div" 
            to="product-two"
          >
            <div class="box two">
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
export default {};
</script>

<style scoped lang="stylus">
.productsLayout
  min-height 600px
  margin-bottom 5rem
  .box
    background-position center center
    background-size cover
    min-height 600px
    min-width 700px
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
  .one
    background-image url('/static/products/11.jpg');
  .two
    background-image url('/static/products/22.jpg');

</style>
