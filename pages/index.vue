<template>
  <v-container fluid>
    <v-content>
      <app-carousel />
      <app-about />
      <app-video />
      <app-first-comment />
      <app-parallax />
      <app-second-comment />
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
import FirstComment from '../components/Blocks/FirstComment';
import Video from '../components/Blocks/Video';
import FirstParallax from '../components/Blocks/FirstParallax';
import SecondComment from '../components/Blocks/SecondComment';
import SecondParallax from '../components/Blocks/SecondParallax';
import Products from '../components/Blocks/Products';
import SecondCarousel from '../components/Blocks/SecondCarousel';
import Contacts from '../components/Blocks/Contacts';

export default {
  components: {
    'app-carousel': HeaderCarousel,
    'app-about': AboutUs,
    'app-first-comment': FirstComment,
    'app-video': Video,
    'app-parallax': FirstParallax,
    'app-second-comment': SecondComment,
    'app-second-parallax': SecondParallax,
    'app-products': Products,
    'app-sCarousel': SecondCarousel,
    'app-contacts': Contacts,
  },
};
</script>

