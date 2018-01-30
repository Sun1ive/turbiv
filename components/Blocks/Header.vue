<template>
  <header @click="$router.push('/')">
    <v-container fluid>
      <v-layout justify-center align-center row wrap>
        <v-flex xs10 sm6 class="text-xs-center">
          <img class="logo" src="https://pmonolit.com.ua/wp-content/uploads/2017/12/cropped-logo.jpg" alt="Logo">
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex xs10 sm6 lg4>
          <v-layout justify-center align-center>
            <v-flex
              class="contactWrapper"
              v-for="contact in contacts"
              :key="contact.title"
            >
              <v-icon>{{ contact.icon }}</v-icon>
              <div class="contacts">
                <p>{{ contact.detailsOne }}</p>
                <p>{{ contact.detailsTwo }}</p>
              </div>
            </v-flex>
          </v-layout> 
        </v-flex>
      </v-layout>
    </v-container>
    <v-container fluid>
      <app-toolbar/>
    </v-container>
  </header>
</template>

<script>
import Toolbar from './Toolbar';

export default {
  components: {
    'app-toolbar': Toolbar,
  },
  data: () => ({
    contacts: [
      {
        title: 'phone',
        icon: 'phone',
        detailsOne: '067 415 77 11',
        detailsTwo: 'info@turbiv.com',
      },
      {
        title: 'adress',
        icon: 'room',
        detailsOne: 'м. Турбiв',
        detailsTwo: 'вул. Турбiв',
      },
    ],
  }),
};
</script>

<style scoped lang="stylus">
.logo
  width 88px
  height 88px

.contactWrapper
  display flex
  .contacts
    text-align left

.icon
  font-size 3.1rem
  padding-right 1rem
</style>
