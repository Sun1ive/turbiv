<template>
  <main>
    <FirstCarousel />
    <AboutUs />
    <Video />
    <FirstComment />
    <FirstParallax />
    <SecondComment />
    <SecondParallax />
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

export default {
  components: {
    FirstCarousel,
    AboutUs,
    Video,
    FirstParallax,
    FirstComment,
    SecondComment,
    SecondParallax,
  },
};
</script>

<style scoped lang="stylus">

</style>
