import React, { forwardRef } from 'react'
import classnames from 'classnames'
import ThemeProvider from '../ThemeProvider/ThemeProvider'

/**
 * HOC automates merging the theme values into library components, including:
 *
 * 1. Smart merges className to include BOTH theme and prop className (vs
 *    overriding the theme className with prop className)
 * 2. Merges theme values and props, where props will overwrite theme values of
 *    same type. This allows setting default component values in theme, and
 *    overriding them as needed per component with props.
 *
 * @param {string} name The component field name in theme, should match the
 * component `displayName`
 */
const withTheme = componentName => Component =>
  forwardRef((props, ref) => (
    <ThemeProvider.Consumer>
      {theme => {
        const componentTheme = theme[componentName] || {}

        return (
          <Component
            {...componentTheme}
            {...props}
            className={classnames(componentTheme.className, props.className)}
            ref={ref}
          />
        )
      }}
    </ThemeProvider.Consumer>
  ))

export default withTheme
