import React, { createElement } from 'react'
import cx from 'classnames'
import { componentry } from '../utils/componentry'

// Type used to *constrain* what props can be passed into element()
interface ElementProps {
  as?: React.ElementType
  className?: Parameters<typeof cx>[0]
  style?: React.CSSProperties
}

// Create a generic type that extends passed in element attributes with library
// componentCx and themeCx options
type ElementOptions<TAttrs> = TAttrs & {
  componentCx?: Parameters<typeof cx>[0]
  themeCx?: Parameters<typeof cx>[0]
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
export function element<TProps extends ElementProps>({
  as = 'div',
  className,
  componentCx,
  style,
  themeCx,
  ...merged
}: ElementOptions<TProps>): React.ReactElement {
  // The componentry util will: filter out remaining library props, create base
  // styles, and create base classNames
  /* @ts-ignore BaseProps isn't fully typed out to match componentry() yet */
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
