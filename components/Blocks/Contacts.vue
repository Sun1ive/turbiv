<template>
  <v-container fluid id="contact">
    <v-layout justify-space-around align-center>
      <v-flex xs4 class="box">
        <div class="mr-5">
          <h1>TURB0V</h1>        
          <img src="https://pmonolit.com.ua/wp-content/uploads/2017/12/cropped-logo-150x150.jpg" alt="logo">
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nisi sequi accusamus culpa dolores, facilis deleniti doloribus vero laudantium repudiandae nostrum adipisci quam aliquam perspiciatis neque nobis autem possimus voluptas.</p>
        </div>
      </v-flex>
      <v-flex xs3 class="text-xs-center">
        <v-form @submit.prevent="onSubmit">
          <h1>Зв'язок з нами</h1>
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
            type="submit"
            :disabled="hasErrors"
          >Отправить</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
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

<style lang="stylus" scoped>
.layout
  min-height 400px
  background-color #F4F4F4

.box
  display flex
  align-items center
  justify-content space-around

</style>
