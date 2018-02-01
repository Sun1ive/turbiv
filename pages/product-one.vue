<template>
  <v-container>
    <v-layout class="my-5" justify-space-around align-center>
      <v-flex xs10 sm6 lg5>
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
      <v-flex xs10 sm6 lg5 class="text-xs-center">
        <h1>hello world</h1>
        <p class="text-xs-left">Цемент ПЦ ІІ/А-Ш-500 використовується для надміцних фундаментів, балок і плит перекриття у житловому та промисловому будівництві. Також із даного цементу виготовляють залізобетонні конструкції підвищенної міцності.Завдяки підвищенній резистентності до корозії, морозостійкості та еластичності цемент М500, може використовуватись в умовах підвищенних температур та значній вологості.</p>
        <v-btn color="primary">
          <v-icon left>email</v-icon>
          Связаться
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      '/111/1.jpg',
      '/111/2.jpg',
      '/111/3.jpg',
      '/111/4.jpg',
    ]
  }),
};
</script>

<style scoped>

</style>
