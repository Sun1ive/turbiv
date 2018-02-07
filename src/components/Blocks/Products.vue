<template>
  <div class="products">
    <div class="wrapper">
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <div class="head-title">Некоторые наши заказы</div>
          </div>
        </div>
        <div class="row justify-content-between">
          <div class="col" v-for="item in products" :key="item.title">
            <div 
              class="product hvr-outline-out" 
              :style="{ background: 'url(' + item.src + ')', }"
              @click="$router.push(item.path)"
            >
              {{ item.title }}
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
      { title: 'Производство товаров для спальни', path: '/bedroom', src: '/static/products/1.jpg' },
      { title: 'Оптовая продажа ткани', path: '/wholesale', src: '/static/products/2.jpg' },
    ],
  }),
};
</script>

<style scoped lang="stylus">
.products
  padding 3rem 0
  .head-titleform
    margin-bottom 2rem

.product
  display flex
  width 100%
  height 550px
  justify-content center
  align-items center
  cursor pointer
  text-align center
  color #fff
  font-size 2rem
  z-index 2
  transition .4s
  font-weight bold
  &:hover
    color #006ead

</style>
