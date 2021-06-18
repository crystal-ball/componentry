/* eslint-disable @typescript-eslint/no-empty-interface */

import React from 'react'
import { ClassValue } from 'clsx'

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
  /** Sets active style */
  active?: boolean | string
  /** Sets align-content style */
  alignContent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'stretch'
  /** Sets align-items style */
  alignItems?: 'start' | 'end' | 'center' | 'baseline' | 'stretch'
  /** Sets align-self style */
  alignSelf?: 'auto' | 'start' | 'end' | 'center' | 'baseline' | 'stretch'
  /** Sets background color style */
  backgroundColor?: 'primary' | 'success' | 'warning' | 'critical'
  /** Sets a border style */
  border?: boolean
  /** Sets a border bottom style */
  borderBottom?: boolean
  /** Sets border color style */
  borderColor?: 'primary'
  /** Sets a border left style */
  borderLeft?: boolean
  /** Sets a border right style */
  borderRight?: boolean
  /** Sets a border top style */
  borderTop?: boolean
  /** Sets a border width style */
  borderWidth?: never
  /** Sets a disabled style */
  disabled?: boolean
  /** Sets a text color style */
  fontColor?: 'anchor' | 'body' | 'heading' | 'primary'
  /** Sets a font-family style */
  fontFamily?: 'primary' | 'monospace'
  /** Sets a font-size style */
  fontSize?: 'sm' | 'base' | 'lg'
  /** Text font-weight style */
  fontWeight?: 'light' | 'normal' | 'bold'
  /** Sets an italic style */
  italic?: boolean
  /** Sets justify-content style */
  justifyContent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'
  /** Sets position style */
  position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky'
  /** Sets text-align style */
  textAlign?: 'left' | 'center' | 'right' | 'justify'
  /** Sets text-transform style */
  textTransform?: 'lowercase' | 'uppercase' | 'capitalize'
  /** Sets visible style */
  visible?: boolean
  /** Sets width style */
  width?: string | number
  /** Sets height style */
  height?: string | number

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
  /** Internal flag for switching between runtime and precompile modes */
  __precompile?: boolean
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
