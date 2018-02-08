<template>
  <div class="aboutUs" data-aos="fade-up">
    <Advantages />
    <Information class="inform">
      <template slot="head-title">{{ $t('about us') }}</template>
      <template slot="head">Nuvola</template>
      <template slot="text">{{ $t('company') }}</template>
      <img slot="img" class="img" src="/static/blocks/team.jpg" alt="team">
    </Information>
  </div>
</template>

<script>
import Advantages from './Advantages';

export default {
  components: {
    Advantages,
  }  
}
</script>


<style scoped lang="stylus">
.aboutUs
  position relative
  z-index 2

.inform
  padding-top 15rem

.img
  margin-top: 5.5rem

@media (max-width 1024px)
  .inform
    padding-top 1rem

@media (max-width 600px)
  .img
    margin-top 1rem
</style>
