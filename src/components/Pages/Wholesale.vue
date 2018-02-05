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
            <h1>Оптовая продажа ткани</h1>
            <p>На сегодня наша компания ведет активную работу по привлечению крупных заказов на производство домашнего текстиля. И за счет крупных партий заказов и персональных договоренностей с нашими партнерами-производителями ткани, мы получаем отличную цену. При необходимости, готовы рассмотреть запросы по оптовой продаже ткани в рулонах и договориться о дальнейшем сотрудничестве.</p>
            <br>
            <p>
            У нас персональный подход к каждому потенциальному клиенту, поэтому если у Вас есть дополнительные вопросы, с радостью свяжемся с Вами и найдем решение. Вы останетесь довольны сотрудничеством с нами!</p>
            <p class="fillForm">Для этого предлагаем Вам заполнить форму:</p>
            <button class="my-btn">
              <i class="icon material-icons">star</i>Связаться
            </button>
          </div>
        </div>
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
      { src: '/static/slider/2.jpg' },
      { src: '/static/parallax/1.jpg' },
    ],
  }),
};
</script>

<style scoped lang="stylus">
.bedroom
  padding 4rem 0

.slider-img
  height 450px
  display flex
  align-items center
  justify-content center
  font-size 5rem
  color #fff
  text-align center
  font-weight bold
  background-size cover !important
  background-repeat no-repeat !important

.text
  text-align center
  h1
    margin-bottom 2rem
  p
    text-align left
    text-indent 3rem
  .fillForm
    text-align center
    text-indent inherit
    margin 1rem 0

.icon
  margin-right 1rem
</style>
