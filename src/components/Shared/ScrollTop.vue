<template>
  <div class="scrolltop" @click="scrollToTop">
    <i class="icon material-icons">keyboard_arrow_up</i>
  </div>
</template>

<script>
export default {
  mounted() {
    window.addEventListener('wheel', this.scrollTop, { passive: true });
  },
  beforeDestroy() {
    window.removeEventListener('wheel', this.scrollTop);
  },
  methods: {
    scrollTop() {
      const offset = window.pageYOffset;
      const scroll = document.querySelector('.scrolltop');
      if (offset >= 300 && !scroll.classList.contains('visible')) {
        scroll.classList.add('visible');
      } else if (offset <= 300 && scroll.classList.contains('visible')) {
        scroll.classList.remove('visible');
      }
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style scoped lang='stylus'>
.scrolltop
  width: 70px;
  height: 70px;
  background-color: #fff;
  border: 1px solid #c0c0c0;
  position: fixed;
  bottom: -150px;
  right: 30px;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.3;
  transition: 0.4s linear;
  animation: topDown 2s linear infinite alternate;
  z-index: 15;
  .icon
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 5rem;
  &:hover
    background-color: rgba(0, 159, 227, 1);
    opacity: 1;
    transition: 0.4s linear;
    animation-play-state: paused;
    border-color: rgba(0, 159, 227, 1);
    .icon
      color: #fff;

.visible
  display: block;
  bottom: 9%;
  right: 30px

@keyframes topDown {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(5px);
  }
}

@media (max-width: 400px)
  .scrolltop
    height: 65px
    width: 65px
  .visible 
    bottom: 11%

</style>
