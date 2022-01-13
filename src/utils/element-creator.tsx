import React, { ForwardedRef, createElement } from 'react'
import clsx, { type ClassValue } from 'clsx'
import { utilityStyles } from './style-utilities'

// Type used to *constrain* what props can be passed into element()
type ElementProps = {
  as?: React.ElementType
  className?: ClassValue
  style?: React.CSSProperties
}

// Create a generic type that extends passed in element attributes with library
// componentCx and themeCx options
type ElementCreator<Props> = Props & {
  componentCx?: ClassValue
  ref?: ForwardedRef<HTMLButtonElement>
  themeCx?: ClassValue
}

// 📝 Type docs
// ElementOptions<TProps> is needed for componentCx and themeCx which we don't
//   want to define in the component props
// interface ComponentProps is needed to type the shared props as, className,
//   and style

/**
 * Utility function handles calling React.createElement such that the component
 * render element can be specified with an `as` prop and all classes and styles
 * are merged properly.
 *
 * (This lets us create elements that are very flexible with much less verbose
 * code at the definition site)
 */
export function element<Props extends ElementProps>({
  as = 'div',
  className,
  componentCx,
  style,
  themeCx,
  ...merged
}: ElementCreator<Props>): React.ReactElement {
  // The componentry util will: filter out remaining library props, create base
  // styles, and create base classNames
  const { utilityCx, props, styles } = utilityStyles(merged)

  return createElement(as, {
    style: { ...styles, ...style },
    className: clsx(
      themeCx, // User defined default className from theme context
      componentCx, // Library defined component specific classNames, eg 'btn-sm'
      className, // User supplied className
      utilityCx, // Utility classNames, eg 'mt-xl'
    ),
    ...props,
  })
}
