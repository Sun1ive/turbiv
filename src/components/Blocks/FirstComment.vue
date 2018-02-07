<template>
  <div class="htt-first">
    <information :reverse="true">
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

</style>