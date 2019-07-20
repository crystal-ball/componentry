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
 *
 * NOTE: we could use the useContext to look up theme and pluck out any default
 * assigned classNames here... but first we're going to provide consistent and
 * useful classes on all elements...
 */
export default function elementFactory({
  as,
  classes,
  className,
  defaultAs = 'div',
  style,
  ...rest
}) {
  // The componentry util will: filter out remaining library props, create base
  // styles, and create base classNames
  const c = componentry(rest)

  return createElement(as || defaultAs, {
    style: { ...c.style, ...style },
    className: classnames(classes, className, c.className),
    ...c.rest,
  })
}
