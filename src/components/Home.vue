<template>
  <main>
    <FirstCarousel />
    <AboutUs />
    <Video />
    <FirstComment />
    <FirstParallax />
    <SecondComment />
    <SecondParallax />
    <Products />
    <SecondSlider />
    <Contacts />
  </main>
</template>

<script>
import FirstCarousel from './Blocks/FirstCarousel';
import AboutUs from './Blocks/AboutUs';
import Video from './Blocks/Video';
import FirstParallax from './Blocks/FirstParallax';
import FirstComment from './Blocks/FirstComment';
import SecondComment from './Blocks/SecondComment';
import SecondParallax from './Blocks/SecondParallax';
import Products from './Blocks/Products';
import SecondSlider from './Blocks/SecondSlider';
import Contacts from './Blocks/Contacts';

export default {
  components: {
    FirstCarousel,
    AboutUs,
    Video,
    FirstParallax,
    FirstComment,
    SecondComment,
    SecondParallax,
    Products,
    SecondSlider,
    Contacts,
  },
};
</script>
