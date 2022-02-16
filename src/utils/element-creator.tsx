import React, { createElement } from 'react'
import clsx, { type ClassValue } from 'clsx'
import { type UtilityProps, createUtilityClasses } from './utility-classes'

/**
 * ElementProps includes the shared props _including internal componentCx prop_
 * for all library components.
 */
type ElementProps = {
  as?: React.ElementType
  className?: ClassValue
  componentCx?: ClassValue
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
  themeCx,
  ...merged
}: Props): React.ReactElement {
  // Shared filter point to convert utility props to utility classes
  const { filteredProps, utilityClasses } = createUtilityClasses(merged)

  return createElement(as, {
    className: clsx(
      themeCx, // User defined default className from theme context
      componentCx, // Library defined component specific classNames, eg 'btn-sm'
      className, // User supplied className
      utilityClasses, // Utility classNames, eg 'mt-xl'
    ),
    ...filteredProps,
  })
}
