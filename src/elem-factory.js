import { createElement } from 'react'
import cx from 'classnames'
import { componentry } from './utils/componentry'

/**
 * Utility function handles calling React.createElement such that the component
 * render element can be specified with an `as` prop and all classes and styles
 * are merged properly.
 *
 * (This lets us create elements that are very flexible with much less verbose
 * code at the definition site)
 */
export default function elementFactory({
  as = 'div',
  className,
  elemClassName,
  style,
  themeClassName,
  ...merged
}) {
  // The componentry util will: filter out remaining library props, create base
  // styles, and create base classNames
  const c = componentry(merged)

  // Ensure that input elements do not contain children included by default from
  // active factories
  if (as === 'input') {
    delete c.rest.children
  }

  return createElement(as, {
    style: { ...c.libraryStyles, ...style },
    className: cx(
      themeClassName, // User theme cx
      elemClassName, // Library component cx
      className, // User JSX cx
      c.libClassName, // Library system cx
    ),
    ...c.rest,
  })
}
