import React from 'react'
import { type ClassValue } from 'clsx'

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
export interface DefaultUtilityProps {
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
  /** Sets a bold font weight style */
  bold?: boolean
  /** Sets a 1px border-width style */
  border?: boolean
  /** Sets a border-width size style */
  borderWidth?: string | number
  /** Sets a 1px border-bottom-width style */
  borderBottom?: boolean
  /** Sets border color style */
  borderColor?: 'primary'
  /** Sets a 1px border-left-width style */
  borderLeft?: boolean
  /** Sets a 1px border-right-width style */
  borderRight?: boolean
  /** Sets a 1px border-top-width style */
  borderTop?: boolean
  /** Sets a disabled style */
  disabled?: boolean
  /** Sets a display style */
  display?:
    | 'block'
    | 'inline-block'
    | 'inline'
    | 'flex'
    | 'inline-flex'
    | 'flow-root'
    | 'grid'
    | 'inline-grid'
    | 'contents'
    | 'list-item'
    | 'hidden'
  /** Sets a text color style */
  color?: string
  /** Sets a font-family style */
  fontFamily?: 'body' | 'mono'
  /** Sets a font-size style */
  fontSize?: 'sm' | 'base' | 'lg'
  /** Text font-weight style */
  fontWeight?: 'light' | 'normal' | 'bold'
  /** Sets height style */
  height?: 'auto' | 'full' | 'screen' | 'min' | 'max' | 'fit' | string | number
  /** Sets a display: none style */
  invisible?: boolean
  /** Sets an italic style */
  italic?: boolean
  /** Sets justify-content style */
  justifyContent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'
  /** Sets a letter-spacing style */
  letterSpacing?: 'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest'
  /** Sets a line-height style */
  lineHeight?: 'none' | 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose' | number
  /** Sets a max-width style */
  maxWidth?: 'none' | 'full' | 'min' | 'max' | 'fit' | 'prose' | 0 | string
  /** Sets a max-height style */
  maxHeight?: 'full' | 'screen' | 'min' | 'max' | 'fit' | number
  /** Sets a min-height style */
  minHeight?: 'full' | 'screen' | 'min' | 'max' | 'fit' | 0
  /** Sets a min-width style */
  minWidth?: 'full' | 'min' | 'max' | 'fit' | 0
  /** Sets position style */
  position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky'
  /** Sets text-align style */
  textAlign?: 'left' | 'center' | 'right' | 'justify'
  /** Sets text-transform style */
  textTransform?: 'lowercase' | 'uppercase' | 'capitalize' | 'normal-case'
  /** Sets visible style */
  visible?: boolean
  /** Sets width style */
  width?: 'auto' | 'full' | 'screen' | 'min' | 'max' | 'fit' | string | number

  // --- Spacing

  gap?: string | number
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
