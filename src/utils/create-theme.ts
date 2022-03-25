import { themeDefaults } from '../theme-defaults'

/**
 * createTheme merges the passed custom theme values with the Componentry default values
 * to create a new theme. You can extend the default theme values using the `extend`
 * field. All other fields will overwrite the defaults entirely.
 * @example
 * ```ts
 * createTheme({
 *   // Using the extend field to add an additional gray to the defaults
 *   extend: {
 *     gray: {
 *       950: '#100'
 *     }
 *   },
 *   // Overwriting the fontWeight options to a single custom value
 *   fontWeight: {
 *     superBold: 900
 *   }
 * })
 * ```
 */
export function createTheme(themeCustomizations: any) {
  // Extend
  let theme: typeof themeDefaults = JSON.parse(JSON.stringify(themeDefaults))
  if (themeCustomizations.extend) {
    theme = deepMerge(theme, themeCustomizations.extend)
  }

  // Overrides
  Object.entries(themeCustomizations).forEach(([key, value]) => {
    if (key !== 'extend') {
      // @ts-expect-error -- Need to type the theme properly and include index access definition
      theme[key] = value
    }
  })

  return theme
}

export function deepMerge(base: any, overrides: any) {
  const merged = JSON.parse(JSON.stringify(base))

  Object.keys(overrides).forEach((key) => {
    if (!(key in merged)) {
      // If base doesn't have this key we can just assign the entire override
      merged[key] = overrides[key]
    } else if (typeof overrides[key] !== 'object') {
      // Else if it's a value the override wins over base
      merged[key] = overrides[key]
    } else {
      // Else if it's an object then recursively deep-merge it
      merged[key] = deepMerge(merged[key], overrides[key])
    }
  })

  return merged
}
