<template>
  <div class="advantages">
    <div class="wrapper">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-12 advantage" v-for="(item, i) in advantages" :key="i">
            <img class="advantage__img" :src="item.src">
            <div class="advantage__text">{{ item.first }}</div>
            <div class="advantage__text">{{ item.second }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    advantages() {
      /* eslint-disable default-case */ /* eslint-disable no-unreachable */
      switch (this.$root.locale) {
        case 'en':
          return this.$i18n.messages.en.advantages; break;
        case 'ru':
          return this.$i18n.messages.ru.advantages; break;
      }
      return this.$i18n.messages.ua.advantages;
    },
  },
};
</script>


<style scoped lang="stylus">
.advantages
  position: absolute;
  top: -15%;
  z-index: 5;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;

.container-fluid
  background-color: #fff

.advantage
  margin: 2rem 0;
  text-align: center;
  &:nth-child(2), &:nth-child(3)
    border-left: 1px solid #c0c0c0 + 25%;
  &__text
    font-size: 2rem;
    font-weight: bold
  &__img
    height 200px
    width 300px

@media (max-width 1024px)
  .advantages
    position relative

@media (max-width 600px)
  .advantage
    &__img
      width 100%
    &__text
      font-size 1.3rem
</style>