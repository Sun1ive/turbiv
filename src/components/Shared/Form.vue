<template>
  <form class="form">
    <div class="form__header">Связь с нами</div>
    <input 
      type="text" 
      class="input"
      placeholder="Ваше Имя(обязательно)">
    <input 
      type="email" 
      class="input"
      placeholder="Ваш email(обязательно)">
    <input 
      type="number" 
      class="input"
      placeholder="Ваш телефон(обязательно)">
    <button class="my-btn hvr hvr-sweep-to-left" type="submit">Отправить</button>
  </form>
</template>

<script>
export default {};
</script>

<style scoped lang="stylus">
.form
  display flex
  flex-direction column
  &__header
    font-size 2rem
    font-weight bold
    text-align center
    margin-bottom 2rem
  .input
    background-color #f4f4f4
    border 1px solid #c0c0c0
    padding 1rem
    margin 2px 0
  .my-btn
    margin-top 1rem
</style>
