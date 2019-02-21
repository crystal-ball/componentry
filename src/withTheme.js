import React from 'react'
import classnames from 'classnames'
import { Context } from './Theme/Theme'
import transferStatics from './utils/transfer-statics'

/**
 * HOC automates merging the theme values into library components, including:
 *
 * 1. Smart merges className to include BOTH theme and prop className (vs
 *    overriding the theme className with prop className)
 * 2. Merges theme values and props, where props will overwrite theme values of
 *    same type. This allows setting default component values in theme, and
 *    overriding them as needed per component with props.
 * 3. Sets a `displayName` for components. (Technically not a responsibility for
 *    this component, but we need the namespace for theme context so it works
 *    out)
 *
 * TODO: Create a wrapper for passing refs only as needed, see Material-ui
 * RootRef component for an example
 */
const withTheme = (namespace, Wrapped) => {
  const WithTheme = props => (
    <Context.Consumer>
      {theme => {
        const componentTheme = theme[namespace] || {}

        return (
          <Wrapped
            {...componentTheme}
            {...props}
            className={classnames(componentTheme.className, props.className)}
          />
        )
      }}
    </Context.Consumer>
  )

  transferStatics(Wrapped, WithTheme)
  /* eslint-disable no-param-reassign */
  if (!Wrapped.displayName) Wrapped.displayName = namespace
  /* eslint-enable no-param-reassign */

  WithTheme.displayName = `withTheme(${namespace})`
  return WithTheme
}

export default withTheme
