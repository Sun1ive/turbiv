<template>
  <div class="advantages">
    <div class="wrapper">
      <div class="container-fluid">
        <div class="row">
          <div class="col advantage" v-for="(item, i) in items" :key="i">
            <img :src="item.src">
            <div class="advantage__text">{{ item.first }}</div>
            <div class="advantage__text">{{ item.second }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      { src: '/static/advantages/1.jpg', first: 'Быстрое', second: 'исполнение заказа' },
      { src: '/static/advantages/2.jpg', first: 'Конкурентные', second: 'цены' },
      { src: '/static/advantages/3.jpg', first: 'Заказы из', second: '4 стран ЕВРОПЫ' },
    ]
  }),
};
</script>


<style scoped lang="stylus">
.advantages
  position absolute
  top -15%
  z-index 5
  left 50%
  transform translateX(-50%)
  width 100%

.container-fluid
  background-color #fff
.advantage
  margin 2rem 0
  text-align center
  &:nth-child(2)
  &:nth-child(3)
    border-left 1px solid #c0c0c0 + 25%
  &__text
    font-size 2rem
    font-weight bold
</style>