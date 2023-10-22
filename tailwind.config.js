/* eslint-disable import/no-unresolved */

'use strict'

const plugin = require('tailwindcss/plugin')
const { borderPlugin, createTheme, tailwindSafelist } = require('./dist/commonjs')

const theme = createTheme()
delete theme.height
delete theme.width
delete theme.gridTemplateColumns
delete theme.gridTemplateRows

module.exports = {
  content: ['./src/**/*.ts', './src/**/*.tsx', './src/**/*.mdx'],
  corePlugins: {
    preflight: false,
  },
  theme,
  plugins: [plugin(borderPlugin)],
  safelist: tailwindSafelist,
}
