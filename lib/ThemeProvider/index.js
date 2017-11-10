// @flow
import { Component } from 'react'
import type { Node } from 'react'
import { number, shape, string } from 'prop-types'

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

type Props = {
  children: Node,
  theme: {
    defaultButtonColor: string, // Theme color to default to
    transitionDuration: number // Duration of visibility transitions
  }
}

export default class ThemeProvider extends Component<Props> {
  static childContextTypes = {
    THEME: shape({
      defaultButtonColor: string,
      transitionDuration: number
    })
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
