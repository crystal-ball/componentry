import { Component } from 'react'
import { element, number, shape, string } from 'prop-types'

/**
 * The `<ThemeProvider>` is a shorthand for setting context values that can be used
 * for changing the default configuration values used by Componentry components.
 * The passed theme configurations are namespaced to prevent collisions.
 *
 * See the theme propTypes for available configurations.
 *
 * @export
 * @class ThemeProvider
 * @extends {Component}
 */
export default class ThemeProvider extends Component {
  static childContextTypes = {
    COMPONENTRY_THEME: shape({
      defaultButtonColor: string,
      svgDefinitionsFilePath: string,
      visibilityTransitionLength: number
    })
  }

  static propTypes = {
    children: element.isRequired,
    theme: shape({
      defaultButtonColor: string, // Theme color to default to
      svgDefinitionsFilePath: string, // File path used in SVG use href
      visibilityTransitionLength: number // Duration of visibility transitions
    }).isRequired
  }

  /**
   * Return a library namespace for theme configurations to prevent name collisions
   */
  getChildContext() {
    return { COMPONENTRY_THEME: { ...this.props.theme } }
  }

  render() {
    return this.props.children
  }
}
