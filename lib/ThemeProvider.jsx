import { Component } from 'react';
import { element, number, shape, string } from 'prop-types';

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
    componentry_visibilityTransitionLength: number,
    componentry_svgDefinitionsFilePath: string
  };

  static propTypes = {
    children: element.isRequired,
    theme: shape({
      visibilityTransitionLength: number, // Duration of visibility transitions
      svgDefinitionsFilePath: string // File path used in SVG use href
    })
  };

  static defaultProps = {
    theme: {}
  };

  /**
   * Namespace all theme configurations with `componentry_` to prevent any possible
   * name collisions in consuming apps. Return value to set context for all library
   * components.
   */
  getChildContext() {
    const { theme } = this.props;
    const nameSpacedTheme = {};

    Object.keys(theme).forEach(config => {
      nameSpacedTheme[`componentry_${config}`] = theme[config];
    });

    return nameSpacedTheme;
  }

  render() {
    return this.props.children;
  }
}
