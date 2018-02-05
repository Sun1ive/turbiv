<template>
  <main>
    <FirstCarousel />
    <AboutUs />
    <Video />
    <FirstParallax />
  </main>
</template>

<script>
import FirstCarousel from './Blocks/FirstCarousel';
import AboutUs from './Blocks/AboutUs';
import Video from './Blocks/Video';
import FirstParallax from './Blocks/FirstParallax';

export default {
  components: {
    FirstCarousel,
    AboutUs,
    Video,
    FirstParallax,
  },
};
</script>

<style scoped lang="stylus">

</style>
