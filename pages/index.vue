<template>
  <v-app>
    <app-header />
    <v-content>
      <app-carousel />
      <app-first />
      <app-second />
      <app-third />
      <app-fourth />
      <app-fifth />
      <app-contacts />
    </v-content>
    <app-footer />
  </v-app>
</template>

<script>
import Header from '../components/Header';
import HeaderCarousel from '../components/HeaderCarousel';
import FirstBlock from '../components/FirstBlock';
import SecondBlock from '../components/SecondBlock';
import ThirdBlock from '../components/ThirdBlock';
import FourthBlock from '../components/FourthBlock';
import FifthBlock from '../components/FifthBlock';
import Contacts from '../components/Contacts';
import Footer from '../components/Footer';

export default {
  components: {
    'app-header': Header,
    'app-carousel': HeaderCarousel,
    'app-first': FirstBlock,
    'app-second': SecondBlock,
    'app-third': ThirdBlock,
    'app-fourth': FourthBlock,
    'app-fifth': FifthBlock,
    'app-contacts': Contacts,
    'app-footer': Footer,
  },
};
</script>

<style lang="stylus">
@import '../styles/global.styl'

</style>
