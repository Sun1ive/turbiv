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
          @click="location(button)"
          class="menuButton"
          v-for="button in menu" 
          :key="button.title" 
          flat
          :to="button.path"
        >
          {{ button.title }}
        </v-btn>
      </v-toolbar-items>
      <v-spacer />
      <v-toolbar-items class="hidden-sm-and-down">
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
      { title: 'Наши товары', el: '#products', icon: 'star' },
    ],
    drawer: false,
  }),
  methods: {
    location(button) {
      if (this.$route.path !== '/') {
        this.$router.push('/');
        setTimeout(() => {
          this.$scrollTo(button.el, 1000);
        }, 750);
      } else {
        this.$scrollTo(button.el, 1000);
      }
    },
  },
};
</script>

<style scoped lang="stylus">
.toolbar
  border-top 1px solid #E1E1E1

.toolbar__content, .toolbar__extension
  justify-content center
</style>
