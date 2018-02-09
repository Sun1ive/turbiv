<template>
  <header>
    <div class="wrapper">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6 col-md-4 col-sm-12">
            <img 
              class="logo" 
              src="../../assets/logo.png" 
              alt="logo"
              @click="$router.push('/')"
            >
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 details" v-for="item in contacts" :key="item.title">
            <i class="icon material-icons" v-text="item.icon" />
            <div class="contact">
              <p><a class="tel" :href="`tel:${item.detailsOne}`">{{ item.detailsOne }}</a></p>
              <p><a class="tel" :href="`tel:${item.detailsTwo}`">{{ item.detailsTwo }}</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Toolbar @showModal="$emit('showModal')" />
  </header> 
</template>

<script>
import Toolbar from './Toolbar';

export default {
  components: {
    Toolbar,
  },
  computed: {
    contacts() {
      /* eslint-disable default-case */ /* eslint-disable no-unreachable */
      switch (this.$root.locale) {
        case 'en':
          return this.$i18n.messages.en.contacts; break;
        case 'ru':
          return this.$i18n.messages.ru.contacts; break;
      }
      return this.$i18n.messages.ua.contacts;
    },
  },
};
</script>


<style scoped lang="stylus">
.row
  min-height: 100px
  align-items: center
  .icon
    font-size: 2.5rem
    color: #006FB2
  .details
    display: flex
    align-items: center
    p
      margin-left: 1rem
      color: #333
.logo
  cursor: pointer

.col-sm-6
  margin 1rem 0

.col-sm-12
  text-align center

.tel
  color #333

@media (max-width 580px)
  .row
    .details
      justify-content center

@media (max-width 400px)
  .row
    .icon
      font-size 1.7rem
    .details
      font-size .8rem

</style>
