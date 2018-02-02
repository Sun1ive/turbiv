<template>
  <v-form :class="{ white: white }" class="form" @submit.prevent="onSubmit">
    <slot name="close"></slot>
    <h1 class="form__header">Связь с нами</h1>
    <p v-if="$v.name.$error" class="red--text">Введите Ваше имя</p>
    <v-text-field 
      @blur="$v.name.$touch()"
      :error="$v.name.$error"
      v-model.lazy.trim="name" 
      label="Ваше имя (Обязательно)"
    />
    <p v-if="$v.email.$error" class="red--text">Введите корректный e-mail</p>
    <v-text-field 
      @blur="$v.email.$touch()" 
      v-model.lazy.trim="email"
      type="email" 
      label="Ваш email (Обязательно)"
      :error="$v.email.$error"
    />
    <p v-if="$v.phone.$error" class="red--text">Введите корректный номер</p>
    <v-text-field 
      @blur="$v.phone.$touch()"
      v-model.lazy.number="phone"
      type="number"
      label="Ваш телефон (Обязательно)"
      :error="$v.phone.$error"
    />
    <button
      type="submit"
      class="my-btn hvr-sweep-to-left"
      :disabled="hasErrors"
    >Отправить</button>
    <!-- <v-btn
      color="primary" 
      type="submit"
      :disabled="hasErrors"
    >Отправить</v-btn> -->
  </v-form>
</template>

<script>
import { required, email, numeric } from 'vuelidate/lib/validators';

export default {
  props: {
    white: {
      type: Boolean,
      default: () => false
    }
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
      return this.$v.email.$invalid || this.$v.phone.$invalid || this.$v.name.$invalid
    }
  },
  methods: {
    onSubmit() {
      console.log(123);
    },
  },
};
</script>

<style scoped lang="stylus">
.form
  padding 3rem
  position relative
  &__header
    font-family 'Open Sans', Arial, Helvetica, sans-serif
    text-align center
</style>
