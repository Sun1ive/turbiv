<template>
  <div class="htt-first">
    <information 
      :reverse="true"
      data-aos="fade-up-left"
      data-aos-offset="200"
    >
      <template slot="head-title">{{ $t('reviews') }}</template>
      <template slot="head">{{ $t('andriy') }}</template>
      <template slot="text">{{ $t('andriy_review') }}</template>
      <img slot="img" class="img" src="/static/blocks/andriy.jpg" alt="chobanu">
    </information>
  </div>
</template>


<style scoped lang="stylus">
.htt-first
  padding: 3rem 0

@media (max-width 700px)
  .img
    margin-top 1rem

</style>