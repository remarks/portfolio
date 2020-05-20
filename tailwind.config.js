/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

const defaultTheme = require('tailwindcss/defaultTheme')
const work = require('./data/work.json')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'Inter', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  variants: {},
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['components/**/*.vue', 'layouts/**/*.vue', 'pages/**/*.vue', 'plugins/**/*.js', 'nuxt.config.js'],
    options: {
      whitelist: [...work.map((p) => `text-${p.style}`), ...work.map((p) => `border-${p.style}`)]
    }
  }
}
