<template>
 <v-carousel 
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
        src: 'https://via.placeholder.com/1920x1080',
        id: 1,
      },
      {
        src: 'https://via.placeholder.com/1920x1080',
        id: 2,
      },
      {
        src: 'https://via.placeholder.com/1920x1080',
        id: 3,
      },
      {
        src: 'https://via.placeholder.com/1920x1080',
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
</style>
