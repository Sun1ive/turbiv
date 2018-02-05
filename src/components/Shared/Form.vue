<template>
  <form class="form">
    <input class="input" placeholder="Ваше Имя(обязательно)">
    <input type="email" class="input" placeholder="Ваш email(обязательно)">
    <input type="number" class="input" placeholder="Ваш телефон(обязательно)">
    <button class="my-btn" type="submit">Отправить</button>
  </form>
</template>

<script>
export default {};
</script>

<style scoped lang="stylus">
.form
  display flex
  flex-direction column
  .input
    background-color #f4f4f4
    border 1px solid #c0c0c0
    padding 1rem
    margin 2px 0
</style>
