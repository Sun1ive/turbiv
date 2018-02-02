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
    <div :class="{ fixed: fixed }" class="toolbar elevation-0">
      <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
      <div class="container">
        <div class="menuItems hidden-sm-and-down">
          <ul class="toolbar__items">
            <li 
              @click="location(button)"
              class="menuButton"
              v-for="button in menu" 
              :key="button.title" 
              flat
              :to="button.path"
            >{{ button.title }}</li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import debounce from 'lodash/debounce';

export default {
  data: () => ({
    menu: [
      { title: 'Главная', el: 'header', icon: 'home' },
      { title: 'О нас', el: '.aboutUs', icon: 'star' },
      { title: 'Контакты', el: '#contact', icon: 'star' },
      { title: 'Наши товары', el: '#products', icon: 'star' },
    ],
    drawer: false,
    fixed: false,
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
    checkPos() {
      const pos = window.pageYOffset;
      if (pos >= 1500) {
        this.fixed = true;
      } else {
        this.fixed = false;
      }
    },
  },
  created() {
    window.addEventListener('scroll', this.checkPos);
  },
  beforeDestroy() {
    window.removeEventListener('scrol', this.checkPos);
  },
};
</script>

<style scoped lang="stylus">
.toolbar
  border-top 1px solid #E1E1E1
  min-height 60px
  display flex
  align-items center
  transition .4s ease
  ul
    list-style none
  li
    text-transform uppercase
    transition .4s linear
    &:hover
      color #2EAEE4
      cursor pointer
    &:nth-child(2)
      margin 0 2rem
    &:nth-child(4)
      margin 0 2rem

.toolbar__content, .toolbar__extension
  justify-content center

.fixed
  position fixed
  top 0
  left 0
  z-index 5
  opacity 0.3
  &:hover
    opacity 1

</style>
