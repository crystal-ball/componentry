/* eslint-disable import/no-unresolved */

'use strict'

const plugin = require('tailwindcss/plugin')
const { borderPlugin, themeDefaults } = require('./dist/commonjs')

const { height, width, ...themeValues } = themeDefaults

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
      primary: {
        100: '#f2f1ff',
        200: '#dfddff',
        300: '#cbc9ff',
        400: '#a4a0ff',
        500: '#7d77ff',
        600: '#716be6',
        700: '#4b4799',
        800: '#383673',
        900: '#26244d',
      },
    },
  },

  safelist: [
    // Semantic colors
    { pattern: /bg-primary-[\d.]+/ },
    { pattern: /text-(inverse)/ },
  ],
}
