<template>
  <nav>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      clipped
      temporary
    >
      <v-list dense>
        <v-list-tile 
          @click="drawer = !drawer" 
          v-for="button in menu" 
          :key="button.title"
          v-scroll-to="button.el"
        >
          <v-list-tile-action>
            <v-icon>{{ button.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ button.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar flat app>
      <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
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
      <v-spacer />
      <v-toolbar-items>
        <v-btn 
          flat
        >Связаться с нами</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  data: () => ({
    menu: [
      { title: 'Главная', el: 'header', icon: 'home' },
      { title: 'О нас', el: '.aboutUs', icon: 'star' },
      { title: 'Контакты', el: '#contact', icon: 'star' },
    ],
    drawer: false,
  }),
};
</script>

<style scoped lang="stylus">
.toolbar
  border-top 1px solid #E1E1E1

.toolbar__content, .toolbar__extension
  justify-content center
</style>
