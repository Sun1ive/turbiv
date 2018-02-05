<template>
  <div class="products">
    <div class="wrapper">
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <div class="head-title">Некоторые наши заказы</div>
          </div>
        </div>
        <div class="row">
          <div class="col" v-for="item in products" :key="item.title">
            <div 
              class="product" 
              :style="{ background: 'url(' + item.src + ')', }"
              @click="$router.push(item.path)"
            >
              <div class="overlay" />
              <h2>{{ item.title }}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    products: [
      { title: 'Производство товаров для спальни', path: '/bedroom', src: '/static/products/1.png' },
      { title: 'Оптовая продажа ткани', path: '/wholesale', src: '/static/products/2.jpg' },
    ],
  }),
};
</script>

<style scoped lang="stylus">
.products
  padding 3rem 0
  .head-title
    margin-bottom 2rem

.product
  width 600px
  height 480px
  display flex
  justify-content center
  align-items center
  cursor pointer
  text-align center
  position relative
  .overlay
    position absolute
    top 0
    left 0
    opacity .05
    background-color #334477
    z-index 1
  h2
    color #fff
    font-size 2rem
    z-index 2 
</style>
