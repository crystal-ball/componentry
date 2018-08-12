import React from 'react'
import classnames from 'classnames'
import ThemeProvider from './ThemeProvider/ThemeProvider'

/**
 * HOC automates merging the theme values into library components, including:
 *
 * 1. Smart merges className to include BOTH theme and prop className (vs
 *    overriding the theme className with prop className)
 * 2. Merges theme values and props, where props will overwrite theme values of
 *    same type. This allows setting default component values in theme, and
 *    overriding them as needed per component with props.
 *
 * ## TODO: Create a wrapper for passing refs only as needed, see Material-ui
 *    RootRef component for an example
 */
/* eslint-disable react/prop-types */
const withTheme = (name, Wrapped) => {
  /* eslint-disable no-param-reassign */
  if (name) Wrapped.displayName = name // eslint-disable-line
  if (!name) name = Wrapped.displayName || Wrapped.name
  /* eslint-enable no-param-reassign */

  const Themed = props => (
    <ThemeProvider.Consumer>
      {theme => {
        const componentTheme = theme[name] || {}

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

  Themed.displayName = `withTheme${name}`
  return Themed
}

export default withTheme
