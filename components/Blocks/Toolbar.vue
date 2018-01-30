<template>
  <v-toolbar flat app>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn
        class="menuButton"
        v-for="button in menu" 
        :key="button.title" 
        v-scroll-to="button.el"
        flat
      >
        {{ button.title }}
      </v-btn>
    </v-toolbar-items>
    <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
  </v-toolbar>
</template>

<script>
export default {
  data: () => ({
    menu: [
      { title: 'Главная', el: '.header__carousel' },
      { title: 'О нас', el: '.aboutUs' },
      { title: 'Контакты', el: '#contact' },
    ]
  })
};
</script>

<style scoped lang="stylus">
.toolbar
  border-top 1px solid #E1E1E1

.toolbar__content, .toolbar__extension
  justify-content center
</style>
