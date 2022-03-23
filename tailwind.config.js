'use strict'

const plugin = require('tailwindcss/plugin')

module.exports = {
  // Scan .ts files, all of the required Tailwind classes are included in types
  content: ['./src/**/*.ts', './src/**/*.mdx'],
  theme: {
    extend: {},
    colors: {
      inverse: '#eff',
      gray: {
        // Tailwind Gray - https://tailwindcss.com/docs/customizing-colors
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
      },
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
      info: {
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#93c5fd',
        400: '#60a5fa',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
        800: '#1e40af',
        900: '#1e3a8a',
      },
      success: {
        100: '#f4f9ed',
        200: '#e4f1d2',
        300: '#d4e8b7',
        400: '#b3d681',
        500: '#93c54b',
        600: '#84b144',
        700: '#58762d',
        800: '#425922',
        900: '#2c3b17',
      },

      // Typography
      body: '#1f2937',
      link: '#7d77ff',

      // Borders
      container: '#d1d5db',
      modal: '#374151',
    },
    spacing: {
      0: 0,
      px: '1px',
      0.5: '0.25rem', // 4px
      1: '0.5rem', // 8px
      1.5: '0.75rem', // 12px
      2: '1rem', // 16px
      3: '1.5rem', // 24px
      4: '2rem', // 32px
      5: '2.5rem', // 40px
      6: '3rem', // 48px
    },

    border: {
      DEFAULT: '1px solid #607d8b', // example easy 'default' border setup
      focused: '1px solid #bfdbfe', // example semantic border
    },
  },
  corePlugins: {
    preflight: false,
  },

  safelist: [
    // margin, padding, gap
    { pattern: /m[trblxy]?-([\d.]+|px)/ },
    { pattern: /p[trblxy]?-([\d.]+|px)/ },
    { pattern: /gap(-[xy])?-([\d.]+|px)/ },

    // backgroundColor, borderColor, textColor
    { pattern: /bg-(primary|info|success)-[\d.]+/ },
    { pattern: /border(-focused)?/ },
    { pattern: /text-(body|link)/ },
  ],

  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          border: (value) => ({
            border: value,
          }),
          'border-t': (value) => ({
            'border-top': value,
          }),
          'border-r': (value) => ({
            'border-right': value,
          }),
          'border-b': (value) => ({
            'border-bottom': value,
          }),
          'border-l': (value) => ({
            'border-left': value,
          }),
        },
        { values: theme('border') },
      )
    }),
  ],
}
