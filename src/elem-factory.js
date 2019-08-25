import { createElement } from 'react'
import classnames from 'classnames'
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
  componentClassNames,
  style,
  themeClassName,
  ...merged
}) {
  // The componentry util will: filter out remaining library props, create base
  // styles, and create base classNames
  const c = componentry(merged)

  return createElement(as, {
    style: { ...c.libraryStyles, ...style },
    className: classnames(
      themeClassName, // Context theme
      className, // JSX className prop
      componentClassNames, // Component props computed classes
      c.libraryClassNames, // Library props computed classes
    ),
    ...c.rest,
  })
}
