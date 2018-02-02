<template>
  <div class="myContainer">
    <v-layout justify-space-between align-center>
      <v-flex class="text-xs-center" xs10 sm6 lg4>
        <div class="img first" />
        <div class="text">Быстрое <br/> исполнение заказа</div>
      </v-flex>
      <v-flex class="text-xs-center" xs10 sm6 lg4>
        <div class="img second" />
        <div class="text">Конкурентные <br/> цены</div>
      </v-flex>
      <v-flex class="text-xs-center my-5" xs10 sm6 lg4>
        <div class="img third" />
        <div class="text">Заказы из <br> 4 стран ЕВРОПЫ</div>
      </v-flex>
    </v-layout>
  </div>
</template>

<style scoped lang="stylus">
.myContainer
  max-width 1280px
  z-index 100
  width 100%
  left 50%
  bottom -45%
  transform translateX(-50%)
  background-color #fff
  position absolute
  .layout
    .flex
      &:nth-child(2)
      &:nth-child(3)
        border-left 1px solid #c0c0c0
  .img
    min-height 180px
    max-width 350px
    margin 0 auto

.first
  background url('/advantages/1.jpg') center center no-repeat
.second
  background url('/advantages/2.jpg') center center no-repeat
.third
  background url('/advantages/3.jpg') center center no-repeat

.text
  font-family Arial, Helvetica, sans-serif
  font-size 2rem
  font-weight bold
  line-height 2.5rem
  margin-top 1rem

</style>
