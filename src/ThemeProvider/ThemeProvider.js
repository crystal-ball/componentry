// @flow
import { Component, createContext } from 'react'
import type { Node } from 'react'
import { number, shape } from 'prop-types'

export const themeDefaults = { transitionDuration: 300 }

/**
 * The `<ThemeProvider>` is a shorthand for setting context values that can be used
 * for changing the default configuration values used by Componentry components.
 * The passed theme configurations are namespaced to prevent collisions.
 *
 * See the theme propTypes for available configurations.
 *
 * Note that we don't actually set any context here for default, b/c using the
 * ThemeProvider is entirely optional. Any theme defaults need to be handled by
 * the component (or /utils/theme when components). This way when a user doesn't
 * use the ThemeProvider there is still defaults.
 * @export
 * @class ThemeProvider
 * @extends {Component}
 */

const ThemeContext = createContext(themeDefaults)
export default ThemeContext

// LEGACY
// ---------------------------------------------------------------------------

export type Theme = {
  /** Default duration for theme visibility transitions */
  transitionDuration: number,
  /**
   * All components can have default behaviors configured using a context object for
   * that component. The values are spread into each component instance.
   */
  [string]: { [string]: any },
}

type Props = {
  children: Node,
  theme: Theme,
}

export class LegacyThemeProvider extends Component<Props> {
  static childContextTypes = {
    THEME: shape({
      transitionDuration: number,
      // Component configurations not declared, explicit declaration not necessary
    }),
  }

  /**
   * Return a library namespace for theme configurations to prevent name collisions
   */
  getChildContext() {
    return { THEME: { ...this.props.theme } }
  }

  render() {
    return this.props.children
  }
}
