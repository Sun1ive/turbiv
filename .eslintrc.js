// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  env: {
    browser: true,
  },
  extends: [
    'airbnb-base',
    'prettier',
    'plugin:vue/base',
    'plugin:vue/essential',
    'plugin:vue/strongly-recommended',
    'plugin:vue/recommended',
  ],
  // required to lint *.vue files
  plugins: ['vue', 'import'],
  // add your custom rules here
  rules: {
    // don't require .vue extension when importing
    'import/extensions': 0,
    'linebreak-style': 0,
    'no-param-reassign': [2, { props: false }],
    'no-underscore-dangle': 0,
    'vue/max-attributes-per-line': 0,
    // allow optionalDependencies
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
  },
};