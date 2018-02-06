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
          <div class="col flex" v-for="item in products" :key="item.title">
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

.flex
  display flex
  justify-content center

.product
  width 550px
  height 480px
  display flex
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
    color #2db9e3
</style>
