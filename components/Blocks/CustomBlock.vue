<template>
  <div class="myContainer">
    <v-layout justify-space-between align-center>
      <v-flex class="text-xs-center" xs10 sm6 lg4>
        <div class="img first" />
        <h1>Завжди у наявності</h1>
      </v-flex>
      <v-flex class="text-xs-center" xs10 sm6 lg4>
        <div class="img second" />
        <h1>Завжди у наявності</h1>
      </v-flex>
      <v-flex class="text-xs-center my-5" xs10 sm6 lg4>
        <div class="img third" />
        <h1>Завжди у наявності</h1>
      </v-flex>
    </v-layout>
  </div>
</template>

<style scoped lang="stylus">
.myContainer
  max-width 1280px
  z-index 5
  width 100%
  left 50%
  bottom -25%
  transform translateX(-50%)
  background-color #fff
  position absolute
  .layout
    .flex
      &:nth-child(2)
      &:nth-child(3)
        border-left 1px solid #c0c0c0

.first
  background url('https://pmonolit.com.ua/wp-content/uploads/2016/09/1.jpg') center center no-repeat
  min-height 180px
  max-width 350px
  margin 0 auto
.second
  background url('https://pmonolit.com.ua/wp-content/uploads/2016/09/1.jpg') center center no-repeat
  min-height 180px
  max-width 350px
  margin 0 auto
.third
  background url('https://pmonolit.com.ua/wp-content/uploads/2016/09/1.jpg') center center no-repeat
  min-height 180px
  max-width 350px
  margin 0 auto


</style>
