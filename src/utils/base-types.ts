/**
 * @file
 * Base types used for component prop type definitions.
 */

import { type ClassValue } from 'clsx'
import { type ComponentPropsWithoutRef, type ElementType, type ReactNode } from 'react'
import { type UtilityProps } from './utility-classes'

/**
 * Base props supported by all Componentry components. Includes the utility
 * styles' props and the HTML attributes for the element DOM type.
 */
export type ComponentBaseProps<Element extends ElementType> = {
  /** Component element */
  as?: ElementType
  /** Component className, can be a string, array, or object */
  className?: ClassValue
} & UtilityProps &
  Omit<ComponentPropsWithoutRef<Element>, 'className'>

// --------------------------------------------------------
// Active components

export interface ActiveContainerBaseProps {
  /** Container children */
  children?: ReactNode

  /** Component element */
  as?: ElementType

  /** Sets a container content placement direction className */
  direction?: 'top' | 'left' | 'right' | 'bottom'
  /** Sets a container size className */
  size?: 'sm' | 'lg'

  /** Controlled active state */
  active?: boolean | string
  /** Starting active state */
  defaultActive?: boolean | string
  /** Called to handle activate event */
  activate?: (event: KeyboardEvent | MouseEvent | TouchEvent | React.MouseEvent) => void
  /** Called to handle deactivate event */
  deactivate?: (event: KeyboardEvent | MouseEvent | TouchEvent | React.MouseEvent) => void
  /** Called before activate event */
  onActivate?: (event: KeyboardEvent | MouseEvent | TouchEvent | React.MouseEvent) => void
  /** Called after activate event */
  onActivated?: (
    event: KeyboardEvent | MouseEvent | TouchEvent | React.MouseEvent,
  ) => void
  /** Called before deactivate event */
  onDeactivate?: (
    event: KeyboardEvent | MouseEvent | TouchEvent | React.MouseEvent,
  ) => void
  /** Called after deactivate event */
  onDeactivated?: (
    event: KeyboardEvent | MouseEvent | TouchEvent | React.MouseEvent,
  ) => void
}

export interface ActiveActionBaseProps {
  /** Component element */
  as?: ElementType
  /** Action/Content pairing id for compound active components */
  activeId?: string
  /** Component children */
  children?: ReactNode
}

export interface ActiveContentBaseProps {
  /** Component element */
  as?: ElementType
  /** Action/Content pairing id for compound active components */
  activeId?: string
  /** Component children */
  children?: ReactNode
  /**
   * Controls when the component content is mounted where:
   * - `'always'` - The content will be mounted when the element is both visible
   *   and not visible
   * - `'visible'` - The content will only be mounted when visible, when not
   *   visible the contents are not rendered for performance.
   */
  mounted?: 'always' | 'visible'
}
