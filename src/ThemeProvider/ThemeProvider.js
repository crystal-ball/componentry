// @flow
import { createContext } from 'react'

/**
 * The `<ThemeProvider>` is a shorthand for setting context values that can be
 * used for changing the default configuration values used by Componentry
 * components. The passed theme configurations are namespaced to prevent
 * collisions.
 *
 * See the theme propTypes for available configurations.
 *
 * Note that we don't actually set any context here for default, b/c using the
 * ThemeProvider is entirely optional. Any theme defaults need to be handled by
 * the component. This way when a user doesn't use the ThemeProvider there is
 * still defaults.
 * @export
 * @class ThemeProvider
 * @extends {Component}
 */
const ThemeContext = createContext({})
export default ThemeContext
