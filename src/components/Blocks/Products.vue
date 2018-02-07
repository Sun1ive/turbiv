<template>
  <div class="products">
    <div class="wrapper">
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <div class="head-title">{{ $t('some of our orders') }}</div>
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
  computed: {
    products() {
      if (this.$i18n.locale === 'ru') {
        return this.$i18n.messages.ru.products
      }
      return this.$i18n.messages.en.products
    }
  }
};
</script>

<style scoped lang="stylus">
.products
  padding: 3rem 0;
  .head-title
    margin-bottom: 2rem;


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
    color: #006ead
    text-shadow: 1px 1px 5px #fff

</style>
