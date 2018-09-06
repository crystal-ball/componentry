import React from 'react'
import classnames from 'classnames'
import ThemeProvider from './ThemeProvider/ThemeProvider'
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
/* eslint-disable react/prop-types */
const withTheme = (namespace, Wrapped) => {
  const WithTheme = props => (
    <ThemeProvider.Consumer>
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
    </ThemeProvider.Consumer>
  )

  transferStatics(Wrapped, WithTheme)
  WithTheme.displayName = `withTheme(${Wrapped.displayName || Wrapped.name || namespace})`
  return WithTheme
}

export default withTheme
