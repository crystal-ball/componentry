'use strict'

module.exports = {
  plugins: [
    require('./postcss'), // development entry for Componentry plugin
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
