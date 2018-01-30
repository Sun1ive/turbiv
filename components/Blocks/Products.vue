<template>
  <v-container fluid>
    <v-layout 
      justify-center
      aling-center 
      class="my-5"
    >
      <v-flex xs10 md5>
        <v-layout justify-center align-center>
          <router-link
            class="box_wrapper"
            tag="div" 
            to="hello">
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
      <v-flex xs10 md5>
        <v-layout justify-center align-center>
          <router-link tag="div" to="hello">
            <div class="box">
              <div class="box__overlay" />
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
@import url('../../node_modules/hover.css/css/hover-min.css');

.layout
  min-height 600px
  .box
    background-image url('https://pmonolit.com.ua/wp-content/uploads/2017/08/c21.jpg');
    background-size cover
    min-height 600px
    min-width 600px
    display flex
    justify-content center
    align-items center
    position relative
    pointer-events: none;
    &__overlay
      position absolute
      background-color #347
      z-index 1
      width 100%
      height 100%
      opacity .4
    &__item
      color #fff
      z-index 2
    &:hover
      cursor pointer

</style>
