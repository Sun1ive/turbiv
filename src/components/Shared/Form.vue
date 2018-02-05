<template>
  <form class="form" :class="{ white: white }">
    <slot name="close" />
    <div class="form__header">Связь с нами</div>
    <input 
      type="text" 
      class="input"
      placeholder="Ваше Имя(обязательно)"
      @blur="$v.name.$touch()"
      :error="$v.name.$error"
      v-model.lazy.trim="name">
    <input 
      type="email" 
      class="input"
      placeholder="Ваш email(обязательно)"
      @blur="$v.email.$touch()" 
      v-model.lazy.trim="email"
      label="Ваш email (Обязательно)"
      :error="$v.email.$error">
    <input 
      type="number" 
      class="input"
      placeholder="Ваш телефон(обязательно)"
      @blur="$v.phone.$touch()"
      v-model.lazy.number="phone"
      label="Ваш телефон (Обязательно)"
      :error="$v.phone.$error">
    <button class="my-btn hvr hvr-sweep-to-left" type="submit">Отправить</button>
  </form>
</template>

<script>
import { required, email, numeric } from 'vuelidate/lib/validators';

export default {
  props: {
    white: {
      type: Boolean,
      default: () => false,
    },
  },
  data: () => ({
    name: '',
    email: '',
    phone: '',
  }),
  validations: {
    name: {
      required,
    },
    email: {
      required,
      email,
    },
    phone: {
      required,
      numeric,
    },
  },
  computed: {
    hasErrors() {
      return this.$v.email.$invalid || this.$v.phone.$invalid || this.$v.name.$invalid;
    },
  },
  methods: {
    onSubmit() {
      /* eslint-disable no-console */
      console.log(123);
    },
  },
};
</script>

<style scoped lang="stylus">
.form
  display flex
  flex-direction column
  padding 2rem
  position relative
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

.white
  background-color #fff

.close
  position absolute
  right 5%
  top 5%
  width 25px
  height 25px
  background-image url('/static/close.svg')
  cursor pointer
</style>
