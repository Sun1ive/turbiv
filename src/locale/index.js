import Vue from 'vue';
import VueI18n from 'vue-i18n';
import en from './en.json';
import ru from './ru.json';
import ua from './ua.json';

Vue.use(VueI18n);

const messages = {
  en,
  ru,
  ua,
};

/* eslint-disable */
export const i18n = new VueI18n({
  locale: 'ru',
  fallbackLocale: 'en',
  messages,
});
