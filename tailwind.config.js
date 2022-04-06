/* eslint-disable import/no-unresolved */

'use strict'

const plugin = require('tailwindcss/plugin')
const { borderPlugin, createTheme } = require('./dist/commonjs')

const { height, width, ...themeValues } = createTheme()

module.exports = {
  // Scan .ts files, all of the required Tailwind classes are included in types
  content: ['./src/**/*.ts', './src/**/*.mdx'],
  corePlugins: {
    preflight: false,
  },
  plugins: [plugin(borderPlugin)],
  theme: {
    extend: {},
    ...themeValues,
    // Semantic colors
    textColor: {
      inverse: '#eff',
    },
    backgroundColor: {
      primary: themeValues.colors.primary,
    },
  },

  safelist: [
    // Semantic colors
    { pattern: /bg-primary-[\d.]+/ },
    { pattern: /text-(inverse)/ },
  ],
}
