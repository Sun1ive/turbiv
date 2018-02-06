<template>
  <header>
    <div class="wrapper">
      <div class="container-fluid">
        <div class="row">
          <div class="col-6">
            <img 
              class="logo" 
              src="../../assets/logo.png" 
              alt="logo"
              @click="$router.push('/')"
            >
          </div>
          <div class="col-6">
            <div class="row">
              <div class="col details" v-for="item in contacts" :key="item.title">
                <i class="icon material-icons" v-text="item.icon" />
                <div class="contact">
                  <p>{{ item.detailsOne }}</p>
                  <p>{{ item.detailsTwo }}</p>
                </div>
              </div>
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
  data: () => ({
    contacts: [
      {
        title: 'phone',
        icon: 'phone',
        detailsOne: '‎+380969049987',
        detailsTwo: 'info@nuvola.com.ua',
      },
      {
        title: 'address',
        icon: 'room',
        detailsOne: 'г. Турбов, ул. Мира, 14',
        detailsTwo: 'Винницкая обл., Липовецкий р-н',
      },
    ],
  }),
};
</script>


<style scoped lang="stylus">
.row
  min-height 100px
  align-items center
  .icon
    font-size 2.5rem
    color #006FB2
  .details
    display flex
    align-items center
    p
      margin-left 1rem
      color #333

.logo
  cursor pointer
</style>
