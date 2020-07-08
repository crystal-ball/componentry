import { createElement } from 'react'
import cx from 'classnames'
import { componentry } from './utils/componentry'

/**
 * @typedef {Object} ElementFactoryOptions
 * @property {string} [as] Element type of tag name, React component, or React fragment
 * @property {string} [className] Component props className
 * @property {any} [componentCx] Library component className
 * @property {{ [x: string]: any }} [style] Inline component styles
 * @property {string} [themeCx] Theme className
 */

/**
 * Utility function handles calling React.createElement such that the component
 * render element can be specified with an `as` prop and all classes and styles
 * are merged properly.
 *
 * (This lets us create elements that are very flexible with much less verbose
 * code at the definition site)
 * @param {ElementFactoryOptions} opts
 * @returns {import('react').ReactElement}
 */
export default function element({
  as = 'div',
  className,
  componentCx,
  style,
  themeCx,
  ...merged
}) {
  // The componentry util will: filter out remaining library props, create base
  // styles, and create base classNames
  const { utilityCx, props, styles } = componentry(merged)

  return createElement(as, {
    style: { ...styles, ...style },
    className: cx(
      themeCx,
      componentCx,
      className, // User supplied className
      utilityCx,
    ),
    ...props,
  })
}
