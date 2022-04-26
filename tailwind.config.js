/* eslint-disable import/no-unresolved */

'use strict'

const plugin = require('tailwindcss/plugin')
const { borderPlugin, createTheme, tailwindSafelist } = require('./dist/commonjs')

const { height, width, ...themeValues } = createTheme()

module.exports = {
  content: ['./src/**/*.ts', './src/**/*.mdx'],
  corePlugins: {
    preflight: false,
  },
  plugins: [plugin(borderPlugin)],
  theme: themeValues,
  safelist: tailwindSafelist,
}
