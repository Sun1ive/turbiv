<template>
  <button 
    class="my-btn hvr-sweep-to-left"
    :type="type"
  >
    <i class="icon material-icons">email</i>
    {{ $t('connect') }}
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'button'
    }
  }
}
</script>



<style scoped lang="stylus">
.my-btn
  color #fff
  width 200px
  height 50px
  background-color #1565C0
  font-family 'Open Sans', Arial, Helvetica, sans-serif
  font-size 1.2rem
  font-weight bold
  border none
  display: flex
  justify-content: center
  align-items: center
  margin 0 auto
  &:hover
    cursor pointer
  .icon
    margin-right .7rem
</style>