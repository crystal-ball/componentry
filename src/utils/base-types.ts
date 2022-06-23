/**
 * @file
 * Base types used for component prop type definitions.
 */

import React from 'react'

// --------------------------------------------------------
// Active components

export interface ActiveContainerBaseProps {
  /** Container children */
  children?: React.ReactNode

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
  /** Action/Content pairing id for compound active components */
  activeId?: string
  /** Component children */
  children?: React.ReactNode
}

export interface ActiveContentBaseProps {
  /** Action/Content pairing id for compound active components */
  activeId?: string
  /** Component children */
  children?: React.ReactNode
  /**
   * Controls when the component content is mounted where:
   * - `'always'` - The content will be mounted when the element is both visible
   *   and not visible
   * - `'visible'` - The content will only be mounted when visible, when not
   *   visible the contents are not rendered for performance.
   */
  mounted?: 'always' | 'visible'
}
