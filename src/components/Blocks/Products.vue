<template>
  <div class="products">
    <div class="wrapper">
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <div class="head-title">{{ $t('some of our orders') }}</div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div 
            class="product__wrapper col-lg-6 col-md-6 col-sm-10 col-xs-12" 
            v-for="item in products" 
            :key="item.title"
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
          >
            <div 
              class="product hvr-outline-out" 
              :style="{ background: 'url(' + item.src + ')', }"
              @click="$router.push(item.path)"
            >
              {{ $t(item.title) }}
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
      {
        title: 'products block one',
        path: '/bedroom',
        src: '/static/products/1.jpg',
      },
      {
        title: 'products block two',
        path: '/wholesale',
        src: '/static/products/2.jpg',
      },
    ],
  }),
};
</script>

<style scoped lang="stylus">
.products 
  padding: 3rem 0;
  .head-title
    margin-bottom: 2rem
  
.product
  display: flex;
  width: 100%;
  height: 500px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-align: center;
  color: #fff;
  font-size: 2rem;
  text-shadow: 1px 1px 10px #006ead;
  z-index: 2;
  transition: 0.4s linear;
  font-weight: bold;
  &:hover
    color: #006ead;
    text-shadow: 1px 1px 5px #fff

@media (max-width: 775px) 
  .col-sm-10
    margin: 1rem 0

@media (max-width 500px)
  .product
    font-size 1.4rem
    height 300px

</style>
