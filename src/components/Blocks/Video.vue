<template>
  <div class="video">
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <video 
            src="/static/video/fabrica.webm"
            muted
            loop
            autoplay
          />
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped lang="stylus">
.video
  max-height 600px
  overflow hidden
  .col
    padding 0
</style>