<template>
  <v-container fluid>
    <v-content>
      <app-carousel />
      <app-about />
      <app-video />
      <app-second />
      <app-parallax />
      <app-fourth />
      <app-second-parallax />
      <app-products />
      <app-sCarousel />
      <app-contacts />
    </v-content>
  </v-container>
</template>

<script>
import HeaderCarousel from '../components/Blocks/HeaderCarousel';
import AboutUs from '../components/Blocks/AboutUs';
import SecondBlock from '../components/Blocks/SecondBlock';
import Video from '../components/Blocks/Video';
import FirstParallax from '../components/Blocks/FirstParallax';
import FourthBlock from '../components/Blocks/FourthBlock';
import SecondParallax from '../components/Blocks/SecondParallax';
import Products from '../components/Blocks/Products';
import SecondCarousel from '../components/Blocks/SecondCarousel';
import Contacts from '../components/Blocks/Contacts';

export default {
  components: {
    'app-carousel': HeaderCarousel,
    'app-about': AboutUs,
    'app-second': SecondBlock,
    'app-video': Video,
    'app-parallax': FirstParallax,
    'app-fourth': FourthBlock,
    'app-second-parallax': SecondParallax,
    'app-products': Products,
    'app-sCarousel': SecondCarousel,
    'app-contacts': Contacts,
  },
};
</script>

