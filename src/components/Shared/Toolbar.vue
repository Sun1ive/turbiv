<template>
  <nav>
    <div class="toolbar" :class="{ fixed: fixed }">
      <div class="wrapper">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-6 col-md-7 col-sm-8">
              <ul class="menu">
                <li 
                  class="menu__item"
                  @click="location(button)"
                  v-for="button in menu" 
                  :key="button.title" 
                  flat
                  :to="button.path"
                >{{ button.title }}</li>
              </ul>
            </div>
            <div class="col-lg-6 col-md-5 col-sm-4">
              <ul class="button-menu">
                <li>
                  <Button @click.native="$emit('showModal')" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ul class="lang">
        <li 
          v-for="(locale, index) in locales" 
          :key="index"
          v-text="locale"
          @click="changeLang(locale)"
        />
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    locales: ['ru', 'en', 'ua'],
    fixed: false,
  }),
  computed: {
    menu() {
      /* eslint-disable default-case */ /* eslint-disable no-unreachable */
      switch (this.$root.locale) {
        case 'en':
          return this.$i18n.messages.en.menu; break;
        case 'ru':
          return this.$i18n.messages.ru.menu; break;
      }
      return this.$i18n.messages.ua.menu;
    },
  },
  created() {
    window.addEventListener('scroll', this.checkPos, { passive: true });
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
      if (pos >= 1000) {
        this.fixed = true;
      } else {
        this.fixed = false;
      }
    },
    changeLang(lang) {
      window.localStorage.setItem('locale', lang.toString());
      this.$i18n.locale = lang;
    },
  },
};
</script>

<style scoped lang="stylus">
.toolbar
  border-top: 1px solid #E1E1E1;
  border-bottom: 1px solid #E1E1E1;
  text-transform: uppercase;
  background-color: #fff;
  position: relative;
  .lang 
    position: absolute;
    right: 40%
    top: 0
  ul
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    min-height: 60px;
    li
      transition: 0.4s;
      &:nth-child(2)
        margin: 0 2rem
      &:nth-child(4)
        margin-left 2rem
      &:hover
        color: #0092D5;
        cursor: pointer;

.fixed 
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  transition: 0.5s ease;
  width: 100%;
  animation: showFixed .5s forwards linear;
  &:hover 
    opacity: 1

@keyframes showFixed {
  from {
    top: -50px;
  }
  to {
    top: 0px;
  }
}

.button-menu
  display: flex;
  justify-content: flex-end;
  .my-btn 
    height: 35px

@media (max-width 780px)
  .menu
    font-size .7rem
  .button-menu
    li
      button
        width 180px
        font-size .8rem
    
@media (max-width 575px)
  .menu
  .button-menu
    justify-content center
  .toolbar ul li:nth-child(2)
    margin 0 1rem
  .toolbar ul li:nth-child(4)
    margin-left 0.5rem

</style>
