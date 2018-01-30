<template>
  <v-container fluid id="contact">
    <v-layout justify-space-around align-center>
      <v-flex xs4 class="box">
        <div class="mr-5">
          <h1>TURB0V</h1>        
          <img src="https://pmonolit.com.ua/wp-content/uploads/2017/12/cropped-logo-150x150.jpg" alt="logo">
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nisi sequi accusamus culpa dolores, facilis deleniti doloribus vero laudantium repudiandae nostrum adipisci quam aliquam perspiciatis neque nobis autem possimus voluptas.</p>
        </div>
      </v-flex>
      <v-flex xs3 class="text-xs-center">
        <v-form>
          <h1>Зв'язок з нами</h1>
          <v-text-field label="Ваше имя" />
          <v-text-field label="Ваш email" />
          <v-text-field label="Ваш телефон" />
          <v-btn>Click me</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style lang="stylus" scoped>
.layout
  min-height 400px
  background-color #F4F4F4

.box
  display flex
  align-items center
  justify-content space-around

</style>
