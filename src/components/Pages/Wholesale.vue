<template>
  <div class="wholesale">
    <div class="wrapper">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <swiper :options="swiperOptions">
              <swiper-slide 
                v-for="item in items" 
                :key="item.text">
                <div 
                  :style="{ background: 'url(' + item.src + ')' ,}" 
                  class="slider-img"
                />
              </swiper-slide>
              <div class="swiper-button-prev" slot="button-prev" />
              <div class="swiper-button-next" slot="button-next" />
            </swiper>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <h1>{{ $t('whosale title') }}</h1>
            <p align="justify">{{ $t('whosale one') }}</p>
            <br>
            <p align="justify">{{ $t('cooperation') }}</p>
            <p class="fillForm">{{ $t('fill form') }}</p>
            <Button @click.native="isActive = !isActive" />
          </div>
        </div>
      </div>
    </div>
    <div class="modal" v-show="isActive">
      <div class="modal-content">
        <Form :white="true">
          <div 
            class="close" 
            slot="close"
            @click="isActive = !isActive"
          />
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
import swiperOptions from '@/helpers/options.js';

export default {
  data: () => ({
    swiperOptions,
    items: [{ src: '/static/slider/2.jpg' }],
    isActive: false,
  }),
};
</script>

<style scoped lang="stylus">


.wholesale
  padding: 5rem 0
  .row
    min-height 60vh
    text-align center
    align-items center
    justify-content space-around
  .col-sm-12
    text-align center
    .fillForm
      margin 1rem 0

.icon
  margin-right: 1rem

@media (max-width 760px)
  .wholesale
    .row
      justify-content center

</style>
