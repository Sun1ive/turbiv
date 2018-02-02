const nodeExternals = require('webpack-node-externals');

const pkg = require('./package');

module.exports = {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Nuvola',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui',
      },
      { hid: 'description', name: 'description', content: pkg.description },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans' },
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Global CSS
  */
  css: ['vuetify/src/stylus/main.styl'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['@/plugins/vuetify', '@/plugins/vuescrollto', '@/plugins/vuelidate', '@/plugins/form', '@/plugins/hover'],

  /*
  ** Nuxt.js modules
  */
  modules: [],

  /*
  ** Build configuration
  */
  build: {
    vendor: ['vuelidate', 'vue-scrollto'],
    extractCSS: true,
    babel: {
      presets: ['env', 'stage-3'],
      plugins: [
        'syntax-dynamic-import',
        [
          'transform-runtime',
          {
            polyfill: true,
            regenerator: true,
          },
        ],
      ],
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/],
          }),
        ];
      }
    },
  },
};
