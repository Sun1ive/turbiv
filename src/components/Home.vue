<template>
  <main>
    <FirstCarousel />
    <AboutUs />
    <Video />
  </main>
</template>

<script>
import FirstCarousel from './Blocks/FirstCarousel';
import AboutUs from './Blocks/AboutUs';
import Video from './Blocks/Video';

export default {
  components: {
    FirstCarousel,
    AboutUs,
    Video,
  },
};
</script>

<style scoped lang="stylus">

</style>
