<template>
  <div class="contacts">
    <div class="wrapper">
      <div class="container-fluid">
        <div class="row justify-content-between">
          <div class="col col-7 flex">
            <div>
              <div class="head-title">Про нас</div>     
              <img class="logo" src="../../assets/logo.png" alt="logo">
            </div>
            <div class="text">NUVOLA – Ваш надежный партнер, который может взять на себя реализацию Ваших задач. Работаем с заказами по Украине и странам Европы</div>
          </div>
          <div class="col col-4 col-sm-5 col-xs-6">
            <Form />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="stylus">
.contacts
  padding 5rem 0
.flex
  display flex
  align-items center
  .head-title
    margin-bottom 1rem
  .text
    margin-left 3rem
    font-size 1.1rem
</style>
