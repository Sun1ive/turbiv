<template>
  <v-container fluid id="contact">
    <v-layout justify-space-around align-center>
      <v-flex xs4 class="box">
        <div class="mr-5">
          <div class="head-title mb-3">Про нас</div>     
          <img class="logo" src="logo.png" alt="logo">
        </div>
        <div class="text">NUVOLA – Ваш надежный партнер, который может взять на себя реализацию Ваших задач. Работаем с заказами по Украине и странам Европы</div>
      </v-flex>
      <v-flex xs3 class="text-xs-center">
        <app-form />
      </v-flex>
    </v-layout>
  </v-container>
</template>


<style lang="stylus" scoped>
.layout
  min-height 460px
  background-color #F4F4F4

.box
  display flex
  align-items center
  justify-content space-around

.text
  font-size 1.1rem

</style>
