/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

const work = require('./data/work.json')

module.exports = {
  theme: {},
  variants: {},
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['components/**/*.vue', 'layouts/**/*.vue', 'pages/**/*.vue', 'plugins/**/*.js', 'nuxt.config.js'],
    whitelist: (whitelist) => {
      const textColors = work.map((p) => `text-${p.style}`)
      const borderColors = work.map((p) => `border-${p.style}`)

      return [...whitelist, ...textColors, ...borderColors]
    }
  }
}
