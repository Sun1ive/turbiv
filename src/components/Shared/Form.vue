<template>
  <form 
    class="form" 
    :class="{ white: white }"
    @submit.prevent="onSubmit"
  >
    <slot name="close" />
    <div class="form__header">{{ $t('connect') }}</div>
    <input 
      type="text" 
      class="input"
      :placeholder="$t('your name')"
      v-model.lazy.trim="name"
    >
    <div 
      class="error" 
      v-if="$v.email.$error"
    >{{ $t('error email') }}</div>
    <input 
      type="email" 
      class="input"
      :placeholder="$t('your email')"
      @blur="$v.email.$touch()" 
      v-model.lazy.trim="email"
    >
    <div 
      class="error" 
      v-if="$v.phone.$error"
    >{{ $t('error phone') }}</div>
    <input 
      type="number" 
      class="input"
      :placeholder="$t('your phone')"
      @blur="$v.phone.$touch()"
      v-model.lazy.number="phone"
    >
    <Button :type="'submit'" />
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
  width 100%
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

.error
  color red
  border 1px solid red
  text-align center
  padding .5rem 0

.close
  position absolute
  right 0
  top 0
  width 25px
  height 25px
  background-image url('/static/close.svg')
  cursor pointer
</style>
