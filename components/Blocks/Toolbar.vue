<template>
 <v-toolbar flat app>
    <v-spacer />
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn 
        flat 
        v-scroll-to="{
          el: '.fifth',
          duration: 1000,
          easing: 'linear',
          offset: -250
        }">Link One</v-btn>
      <v-btn flat>Link Two</v-btn>
      <v-btn flat>Link Three</v-btn>
    </v-toolbar-items>
    <v-spacer />
    <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
  </v-toolbar>
</template>

<script>
export default {};
</script>

<style scoped>

</style>
