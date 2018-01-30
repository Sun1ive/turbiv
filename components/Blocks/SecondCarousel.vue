<template>
 <v-carousel class="second-carousel"
      hide-delimiters
      lazy
    >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      transition="fade"
      reverseTransition="fade"
    />
  </v-carousel>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        src: '/2.png',
        id: 1,
      },
      {
        src: '/5.png',
        id: 2,
      },
      {
        src: '/9.png',
        id: 3,
      },
      {
        src: '/20.png',
        id: 4,
      },
    ]
  })
};
</script>

<style lang="stylus">
  .fade
    &-enter-active, &-leave-active, &-leave-to
      transition: .8s ease-in-out
      position: absolute
      top: 0
      left: 0

    &-enter, &-leave, &-leave-to
      opacity: 0

.second-carousel
  box-shadow none
</style>
