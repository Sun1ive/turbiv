<template>
  <div class="htt-second">
    <information 
      data-aos="fade-up-right"
      data-aos-offset="600"
      data-aos-easing="ease-in-sine"
    >
      <template slot="head-title">{{ $t('reviews') }}</template>
      <template slot="head">{{ $t('alexandr') }}</template>
      <template slot="text">{{ $t('alexandr_review') }}</template>
      <img slot="img" class="img" src="/static/blocks/alexandr.jpg" alt="muzika">
    </information>
  </div>
</template>


<style scoped lang="stylus">
.htt-second
  padding: 3rem 0

</style>