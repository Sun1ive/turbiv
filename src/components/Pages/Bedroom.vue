<template>
  <div class="bedroom">
    <div class="wrapper">
      <div class="container-fluid">
        <div class="row align-items-center">
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
            <h1 class="bedroom__head">{{ $t('bedroom products') }}</h1>
            <p class="bedroom__text" align="justify">{{ $t('bedroom one') }}</p>
            <br>
            <p class="bedroom__text" align="justify">{{ $t('cooperation') }}</p>
            <p class="fillForm">{{ $t('fill form') }}</p>
            <Button
              @click.native="isActive = !isActive"
              class="bedroom__button"
            />
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

@media (max-width 760px)
  .bedroom
    .row
      justify-content center
    &__text
      font-size .8rem
    &__head
      font-size 1rem
    &__button
      width 150px
      height 30px
      font-size .9rem
</style>
