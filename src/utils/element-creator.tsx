import clsx, { ClassValue } from 'clsx'
import React, { createElement } from 'react'
import { UtilityProps, createUtilityClasses } from './utility-classes'

/**
 * ElementProps includes the shared props _including internal componentCx prop_
 * for all library components.
 */
type ElementProps = {
  as?: React.ElementType
  className?: ClassValue
  componentCx?: ClassValue
  style?: React.CSSProperties
  themeCx?: ClassValue
} & UtilityProps

/**
 * element de-duplicates component code for merging classNames and providing a
 * fallback value for component `as` prop.
 *
 * @remarks
 * This adds another layer of abstraction to component creation but in return
 * eliminates a lot of library boilerplate calling React.createElement with the
 * correct values.
 *
 * For precompile components this additional overhead is computed at compile
 * time, eliminating execution cost.
 */
export function element<Props extends ElementProps>({
  as = 'div',
  className,
  componentCx,
  style,
  themeCx,
  ...merged
}: Props): React.ReactElement {
  // Shared filter point to convert utility props to utility classes
  const { filteredProps, utilityClasses, utilityStyles } = createUtilityClasses(merged)

  return createElement(as, {
    className: clsx(
      themeCx, // User defined default className from theme context
      componentCx, // Library defined component specific classNames, eg 'btn-sm'
      className, // User supplied className
      utilityClasses, // Utility classNames, eg 'mt-xl'
    ),
    // Only create a merged styles object if there's styles included
    style: utilityStyles || style ? { ...utilityStyles, ...style } : undefined,
    ...filteredProps,
  })
}
