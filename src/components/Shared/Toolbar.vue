<template>
  <nav>
    <div class="toolbar" :class="{ fixed: fixed }">
      <div class="wrapper">
        <div class="container-fluid">
          <div class="row">
            <div class="col">
              <ul>
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
            <div class="col">
              <ul class="button-menu">
                <li>
                  <Button @click.native="$emit('showModal')" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    menu: [
      { title: 'Главная', el: 'header', icon: 'home' },
      { title: 'О нас', el: '.aboutUs', icon: 'star' },
      { title: 'Контакты', el: '.contacts', icon: 'star' },
      { title: 'Наши товары', el: '.products', icon: 'star' },
    ],
    fixed: false,
  }),

  created() {
    window.addEventListener('scroll', this.checkPos);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.checkPos);
  },
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
};
</script>

<style scoped lang="stylus">
.toolbar
  border-top 1px solid #E1E1E1
  border-bottom 1px solid #E1E1E1
  text-transform uppercase
  background-color #fff
  box-shadow none
  ul
    padding 0
    margin 0
    display flex
    align-items center
    min-height 60px
    li
      transition .4s
      &:nth-child(2)
      &:nth-child(4)
        margin 0 1rem
      &:hover
        color #0092D5
        cursor pointer

.fixed
  position fixed
  top 0
  left 0
  z-index 3
  transition .5s ease
  width 100%
  animation showFixed 1s forwards linear
  &:hover
    opacity 1

@keyframes showFixed {
  from {
    top -200px
  } to {
    top 0px
  }
}

.button-menu
  display flex
  justify-content flex-end
  .my-btn
    height 35px
</style>
