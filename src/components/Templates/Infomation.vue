<template>
  <div class="wrapper">
    <div class="container-fluid">
      <div :class="{ reverse: reverse }" class="row align-items-center">
        <div class="col col-6">
          <div class="head-title">
            <slot name="head-title" />
          </div>
          <h1>
            <slot name="head" />
          </h1>
          <p align="justify">
            <slot name="text" />
          </p>
        </div>
        <div class="col">
          <slot name="img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    reverse: {
      type: Boolean,
      default: false
    }
  },
};
</script>


<style scoped lang="stylus">
  h1
    font-weight bold
    margin-bottom 1rem
  .img
    width 100%

.col-6
  margin 5rem 3rem 5rem 0

.reverse
  flex-direction row-reverse
  .col-6
    margin 5rem 0 5rem 3rem

.head-title
  margin-bottom 1rem

</style>
