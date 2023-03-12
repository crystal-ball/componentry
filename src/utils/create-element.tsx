import clsx, { ClassValue } from 'clsx'
import React, { createElement as createReactElement } from 'react'
import { UtilityProps, createUtilityProps } from './utility-props'

/** Shared base props across all library components. */
type ElementBaseProps = {
  as?: React.ElementType
  className?: ClassValue
  componentClassName?: ClassValue
  style?: React.CSSProperties
  themeClassName?: ClassValue
} & UtilityProps

/**
 * `createElement` provides a convenience function for creating elements that support the
 * library core shared props.
 *
 * - Implements the `as` props
 * - Creates and merges utility props with component props
 *
 * @remarks
 * This adds another layer of abstraction to component creation but in return
 * eliminates a lot of library boilerplate calling React.createElement with the
 * correct values.
 *
 * For precompile components this additional overhead is computed at compile
 * time, eliminating execution cost.
 */
export function createElement<Props extends ElementBaseProps>({
  as = 'div',
  className,
  componentClassName,
  style,
  themeClassName,
  ...props
}: Props): React.ReactElement {
  const { filteredProps, utilityClassName, utilityStyle } = createUtilityProps(props)

  return createReactElement(as, {
    className: clsx(
      themeClassName, // User defined default classes from theme context
      componentClassName, // Library defined component specific classes, eg 'C9Y-Text-base'
      className, // User supplied className
      utilityClassName, // Utility classes, eg 'mt-xl'
    ),
    // Perf: Only create a merged styles object if there's styles included
    style: utilityStyle || style ? { ...utilityStyle, ...style } : undefined,
    ...filteredProps,
  })
}
