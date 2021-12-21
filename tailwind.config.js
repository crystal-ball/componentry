'use strict'

module.exports = {
  // Scan .ts files, all of the required Tailwind classes are included in types
  content: ['./src/**/*.ts', './src/**/*.mdx'],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
