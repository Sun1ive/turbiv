<template>
 <v-carousel hide-delimiters lazy class="header__carousel">
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
        src: '/slider/1.jpg',
        id: 1,
      },
      {
        src: '/slider/7.jpg',
        id: 2,
      },
      {
        src: '/slider/15.jpg',
        id: 3,
      },
    ],
  }),
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
</style>
