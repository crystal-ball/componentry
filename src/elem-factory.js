import { createElement } from 'react'
import classnames from 'classnames'

/**
 * Utility function handles calling React.createElement such that the component
 * render element can be specified with an `as` prop and component `className`
 * prop is merged with the convenience `classes` config.
 *
 * (This lets us create elements that are very flexible with much less verbose
 * code at the definition site.)
 */
const elementFactory = ({ as, classes, className, defaultAs = 'div', ...rest }) =>
  createElement(as || defaultAs, {
    className: classnames(classes, className),
    ...rest,
  })

export default elementFactory
