'use strict'

module.exports = {
  // Scan .ts files, all of the required Tailwind classes are included in types
  content: ['./src/**/*.ts', './src/**/*.mdx'],
  theme: {
    extend: {},
    spacing: {
      0: 0,
      0.5: '0.25rem', // 4px
      1: '0.5rem', // 8px
      1.5: '0.75rem', // 12px
      2: '1rem', // 16px
      3: '1.5rem', // 24px
      4: '2rem', // 32px
      5: '2.5rem', // 40px
      6: '3rem', // 48px
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
