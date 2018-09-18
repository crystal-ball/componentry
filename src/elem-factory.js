import { createElement } from 'react'
import classnames from 'classnames'
import { filterProps } from './utils/clean-props'
import spacing from './utils/spacing'

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
  ...rest
}) => {
  const { space, props } = filterProps(rest)
  const { classNames, styles } = spacing(space)

  return createElement(as || defaultAs, {
    style: { ...styles, ...style },
    className: classnames(classes, className, classNames),
    ...props,
  })
}

export default elementFactory
