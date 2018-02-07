<template>
  <div class="bedroom">
    <div class="wrapper">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col col-7">
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
          <div class="col text">
            <h1>{{ $t('bedroom products') }}</h1>
            <p align="justify">{{ $t('bedroom one') }}</p>
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
    items: [
      { src: '/static/product/1.jpg' },
      { src: '/static/product/2.jpg' },
      { src: '/static/product/3.jpg' },
      { src: '/static/product/4.jpg' },
      { src: '/static/product/5.jpg' },
      { src: '/static/product/6.jpg' },
      { src: '/static/product/7.jpg' },
      { src: '/static/product/8.jpg' },
    ],
    isActive: false,
  }),
};
</script>

<style scoped lang="stylus">
.bedroom
  min-height 80vh
  display flex
  align-items center
  padding 5rem 0

.slider-img
  height 450px
  background-size cover !important
  background-repeat no-repeat !important

.text
  text-align center
  h1
    margin-bottom 2rem
  p
    text-indent 3rem
  .fillForm
    text-align center
    text-indent inherit
    margin 1rem 0

.icon
  margin-right 1rem
</style>
