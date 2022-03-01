'use strict'

module.exports = {
  plugins: [
    // internal development entry for Componentry plugin, when published this is:
    // require('componentry/postcss')
    require('./dist/commonjs/plugin-postcss/index'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
