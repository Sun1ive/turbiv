<template>
  <v-form @submit.prevent="onSubmit">
    <h1>Связь с нами</h1>
    <p v-if="$v.name.$error" class="red--text">Введите Ваше имя</p>
    <v-text-field 
      @blur="$v.name.$touch()"
      :error="$v.name.$error"
      v-model.lazy.trim="name" 
      label="Ваше имя"
    />
    <p v-if="$v.email.$error" class="red--text">Введите корректный e-mail</p>
    <v-text-field 
      @blur="$v.email.$touch()" 
      v-model.lazy.trim="email"
      type="email" 
      label="Ваш email"
      :error="$v.email.$error"
    />
    <p v-if="$v.phone.$error" class="red--text">Введите корректный номер</p>
    <v-text-field 
      @blur="$v.phone.$touch()"
      v-model.lazy.number="phone"
      type="number"
      label="Ваш телефон"
      :error="$v.phone.$error"
    />
    <v-btn
      color="primary" 
      type="submit"
      :disabled="hasErrors"
    >Отправить</v-btn>
  </v-form>
</template>

<script>
import { required, email, numeric } from 'vuelidate/lib/validators';

export default {
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

</style>
