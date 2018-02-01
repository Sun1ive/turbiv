<template>
  <header>
    <v-container fluid>
      <v-layout justify-center align-center row wrap>
        <v-flex xs10 sm6 class="text-xs-center">
          <img class="logo" src="/111/logo1.jpg" alt="Logo">
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
        detailsOne: '‎+380969049987',
        detailsTwo: 'turbov1986@gmail.com',
      },
      {
        title: 'adress',
        icon: 'room',
        detailsOne: 'г. Турбов, ул. Мира, 14',
        detailsTwo: 'Винницкая обл., Липовецкий р-н',
      },
    ],
  }),
};
</script>

<style scoped lang="stylus">


.contactWrapper
  display flex
  .contacts
    text-align left

.icon
  font-size 3.1rem
  padding-right 1rem
</style>
