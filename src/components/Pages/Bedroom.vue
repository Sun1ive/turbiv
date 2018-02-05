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
            <h1>Производство товаров для спальни</h1>
            <p>За уют и комфорт в доме отвечает большое количество элементов декора. Мы уверены, что не малую роль отводится выбору домашнего текстиля. С гордостью можем сказать, что десятки тысяч семей из Европы уже оценили нашу продукцию. Почему наши клиенты и клиенты наших клиентов довольны продукцией? Все просто: 1. Мы производим товары для спальни наших клиентов из качественных и натуральных материалов; 2. Цены, которые мы предлагаем нашим партнерам, способны выдержать конкуренцию с любыми производителями, что при высоком качестве готовой продукции не оставляет другого выбора. 
            </p>
            <br>
            <p>
            У нас персональный подход к каждому потенциальному клиенту, поэтому если у Вас есть дополнительные вопросы, с радостью свяжемся с Вами и найдем решение. Вы останетесь довольны сотрудничеством с нами!</p>
            <p class="fillForm">Для этого предлагаем Вам заполнить форму:</p>
            <button class="my-btn  hvr hvr-sweep-to-left" @click="isActive = !isActive">
              <i class="icon material-icons">email</i>Связаться
            </button>
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
