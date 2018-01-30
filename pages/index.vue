<template>
  <v-container fluid>
    <app-header />
    <v-content>
      <app-carousel />
      <app-about />
      <app-video />
      <app-second />
      <app-parallax />
      <app-fourth />
      <app-sParallax />
      <app-sCarousel />
      <app-contacts />
    </v-content>
    <app-footer />
  </v-container>
</template>

<script>
import Header from '../components/Blocks/Header';
import HeaderCarousel from '../components/Blocks/HeaderCarousel';
import AboutUs from '../components/Blocks/AboutUs';
import SecondBlock from '../components/Blocks/SecondBlock';
import Video from '../components/Blocks/Video';
import FirstParallax from '../components/Blocks/FirstParallax';
import FourthBlock from '../components/Blocks/FourthBlock';
import SecondParallax from '../components/Blocks/SecondParallax';
import SecondCarousel from '../components/Blocks/SecondCarousel';
import Contacts from '../components/Blocks/Contacts';
import Footer from '../components/Blocks/Footer';

export default {
  components: {
    'app-header': Header,
    'app-carousel': HeaderCarousel,
    'app-about': AboutUs,
    'app-second': SecondBlock,
    'app-video': Video,
    'app-parallax': FirstParallax,
    'app-fourth': FourthBlock,
    'app-sParallax': SecondParallax,
    'app-sCarousel': SecondCarousel,
    'app-contacts': Contacts,
    'app-footer': Footer,
  },
};
</script>

<style lang="stylus">
@import '../styles/global.styl'

</style>
