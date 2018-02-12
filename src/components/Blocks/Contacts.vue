<template>
  <div class="contacts">
    <div class="wrapper">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-8 col-md-10 col-sm-12 flex">
            <div>
              <div class="head-title">{{ $t('about us') }}</div>     
              <img class="logo" src="../../assets/logo.png" alt="logo">
            </div>
            <div class="text">{{ $t('nuvola') }}</div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-10 col-xs-12">
            <Form />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="stylus">
.contacts
  display flex
  align-items center
.flex
  display flex
  align-items center
  .head-title
    margin-bottom 1rem
  .text
    margin-left 3rem
    font-size 1.1rem

@media (max-width 1300px)
  .row
    padding 3rem 0
    flex-direction column
    align-items center
    justify-content space-between

@media (max-width 460px)
  .flex
    flex-direction column
    text-align center
    justify-content space-between
    .text
      margin 0
      font-size .8rem
      margin-top 2rem
  .row
    padding 0

</style>
