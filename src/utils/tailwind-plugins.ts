/**
 * Utility plugin for generating border utility classes using Tailwind
 * @example
 * ```js
 * // tailwind.config.js
 * const { borderPlugin } = require('componentry')
 * const plugin = require('tailwindcss/plugin')
 *
 * module.exports = {
 *   plugins: [
 *     plugin(borderPlugin),
 *   ]
 * }
 * ```
 */
export function borderPlugin({ matchUtilities, theme }: any) {
  matchUtilities(
    {
      border: (value: string) => ({
        border: value,
      }),
      'border-t': (value: string) => ({
        'border-top': value,
      }),
      'border-r': (value: string) => ({
        'border-right': value,
      }),
      'border-b': (value: string) => ({
        'border-bottom': value,
      }),
      'border-l': (value: string) => ({
        'border-left': value,
      }),
    },
    { values: theme('border') },
  )
}
