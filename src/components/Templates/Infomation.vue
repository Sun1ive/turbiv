<template>
  <div class="wrapper">
    <div class="container-fluid">
      <div :class="{ reverse: reverse }" class="row align-items-center">
        <div class="col-lg-6 col-md-12 col-sm-12">
          <div class="head-title">
            <slot name="head-title" />
          </div>
          <h1>
            <slot name="head" />
          </h1>
          <p class="text__field" align="justify">
            <slot name="text" />
          </p>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12">
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

.reverse
  flex-direction row-reverse
  .col
    margin 5rem 0 5rem 3rem

.col-md-12
  margin 1rem 0

.head-title
  margin-bottom 1rem

@media (max-width 775px)
  .row
    flex-direction column

@media (max-width 500px)
  .text__field
    font-size 0.7rem

</style>
