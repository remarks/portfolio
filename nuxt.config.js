export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Mark Pinero',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  purgeCSS: {
    whitelist: (whitelist) => {
      return whitelist.concat([
        'text-red-800',
        'text-purple-600',
        'text-orange-500',
        'text-gray-900',
        'text-teal-300',
        'text-blue-600'
      ])
    }
  },
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extractCSS: true,
    extend(config, ctx) {}
  }
}
