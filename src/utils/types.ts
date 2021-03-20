/* eslint-disable @typescript-eslint/no-empty-interface */

import React from 'react'
import { ClassValue } from 'classnames'

/**
 * Utility type used to merge default component prop types with user defined overrides.
 * @example
 * export interface ExampleProps {}
 * interface DefaultExampleProps { radical: boolean }
 * type Props = MergePropTypes<DefaultExampleProps, ExampleProps>
 */
export type MergePropTypes<Defaults, Overrides> = {
  [Prop in keyof Defaults]: Prop extends keyof Overrides
    ? Overrides[Prop]
    : Defaults[Prop]
}

// Module augmentation interface for overriding utility props' types
export interface UtilityProps {}

/**
 * Componentry shared utility props for using utility styles
 */
interface DefaultUtilityProps {
  // --- Color
  /** Background color style */
  backgroundColor?: 'primary' | 'success' | 'warning' | 'critical'
  /** Border color style */
  borderColor?: 'primary'

  // --- Sizing
  /** Width style */
  width?: string

  // --- Spacing
  /** margin */
  m?: string | number
  /** margin-top */
  mt?: string | number
  /** margin-right */
  mr?: string | number
  /** margin-bottom */
  mb?: string | number
  /** margin-left */
  ml?: string | number
  /** margin-left && margin-right */
  mx?: string | number
  /** margin-top && margin-bottom  */
  my?: string | number
  /** padding */
  p?: string | number
  /** padding-top */
  pt?: string | number
  /** padding-right */
  pr?: string | number
  /** padding-bottom */
  pb?: string | number
  /** padding-left */
  pl?: string | number
  /** padding-left && padding-right */
  px?: string | number
  /** padding-top && padding-bottom */
  py?: string | number

  // --- Typography
  /** Text color style */
  fontColor?: 'anchor' | 'body' | 'heading' | 'primary'
  /** Text font-style style */
  fontStyle?: 'italic' | 'unset'
  /** Text font-weight style */
  fontWeight?: 'light' | 'normal' | 'bold'
  /** Text text-align style */
  textAlign?: 'left' | 'center' | 'right' | 'justify'
}

/**
 * Base props supported by all Componentry components. Includes the utility
 * styles props and the HTML attributes for the element DOM type.
 */
export type ComponentBaseProps<Element extends React.ElementType> = {
  /** Component element */
  as?: React.ElementType
  /** Component className, can be a string, array, or object */
  className?: ClassValue
} & MergePropTypes<DefaultUtilityProps, UtilityProps> &
  Omit<React.ComponentPropsWithoutRef<Element>, 'className'>

// --------------------------------------------------------
// Active components

export interface ActiveContainerBaseProps {
  /** Shorthand prop for passing children to Action component */
  Action?: React.ReactNode
  /** Shorthand prop for passing children to Content component */
  Content?: React.ReactNode
  /** Container children */
  children?: React.ReactNode

  /** Component element */
  as?: React.ElementType

  /** Sets a container content placement direction className */
  direction?: 'top' | 'left' | 'right' | 'bottom'
  /** Sets a container size className */
  size?: 'sm' | 'lg'

  /** Controlled active state */
  active?: boolean | string
  /** Starting active state */
  defaultActive?: boolean | string
  /** Called to handle activate event */
  activate?: (event: React.MouseEvent<HTMLButtonElement>) => void
  /** Called to handle deactivate event */
  deactivate?: (event: React.MouseEvent<HTMLButtonElement>) => void
  /** Called before activate event */
  onActivate?: (event: React.MouseEvent<HTMLButtonElement>) => void
  /** Called after activate event */
  onActivated?: (event: React.MouseEvent<HTMLButtonElement>) => void
  /** Called before deactivate event */
  onDeactivate?: (event: React.MouseEvent<HTMLButtonElement>) => void
  /** Called after deactivate event */
  onDeactivated?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export interface ActiveActionBaseProps {
  /** Component element */
  as?: React.ElementType
  /** Action/Content pairing id for compound active components */
  activeId?: string
  /** Component children */
  children?: React.ReactNode
  /** Component children end decoration */
  decoration?: React.ReactNode
}

export interface ActiveContentBaseProps {
  /** Component element */
  as?: React.ElementType
  /** Action/Content pairing id for compound active components */
  activeId?: string
  /** Component children */
  children?: React.ReactNode
}
