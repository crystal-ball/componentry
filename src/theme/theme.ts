import { deepMerge } from '../utils/deep-merge'
import { MergePropTypes } from '../utils/types'
import { themeDefaults } from './theme-defaults'

/** Module augmentation interface for overriding default theme values */
export interface ThemeOverrides {}

/** Application theme values */
export type Theme = MergePropTypes<typeof themeDefaults, ThemeOverrides>

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
export function createTheme(themeCustomizations: any): Theme {
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
