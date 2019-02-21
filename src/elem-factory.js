import { createElement } from 'react'
import classnames from 'classnames'
import componentry from './utils/componentry'

/**
 * Utility function handles calling React.createElement such that the component
 * render element can be specified with an `as` prop and component `className`
 * prop is merged with the convenience `classes` config.
 *
 * (This lets us create elements that are very flexible with much less verbose
 * code at the definition site.)
 */
const elementFactory = ({
  as,
  classes,
  className,
  defaultAs = 'div',
  style,
  themeClassName,
  ...rest
}) => {
  // The componentry util will: filter out remaining library props, create base
  // styles, and create base classNames
  const c = componentry(rest)

  return createElement(as || defaultAs, {
    style: { ...c.style, ...style },
    className: classnames(themeClassName, classes, className, c.className),
    ...c.rest,
  })
}

export default elementFactory
