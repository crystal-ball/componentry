import { FunctionComponent, ReactNode } from 'react'

export interface AriasFlags {
  controls?: boolean
  describedby?: boolean
  expanded?: boolean
  haspopup?: boolean
  hidden?: boolean
  id?: boolean
  labelledby?: boolean
  role?: boolean
  selected?: boolean
}

export interface ActiveContainerProps {
  /** Controls the active state for binary-active components */
  active?: boolean
  /** Sets the initial value for active */
  defaultActive?: boolean | string
  /** Handler called to transition from inactive to active */
  activate?: (evt: Event) => void
  /** Handler called to transition from active to inactive */
  deactivate?: (evt: Event) => void
  /** Sets the direction relative to component trigger to position content */
  direction?: 'top' | 'right' | 'bottom' | 'left' | 'overlay'
  /** Switch to enable a deactivate on external click handler */
  clickEvents?: boolean
  /** Switch to enable a deactivate on esc keypress handler */
  escEvents?: boolean
  /** Switch to enable calling activate+deactive on mouse enter and leave */
  mouseEvents?: boolean
  /** Listener fn that will be called before activation */
  onActivate?: (evt: Event) => void
  /** Listener fn that will be called after activation  */
  onActivated?: (evt: Event) => void
  /** Listener fn that will be called before deactivate */
  onDeactivate?: (evt: Event) => void
  /** Listener fn that will be called after deactivation */
  onDeactivated?: (evt: Event) => void
  /** Shorthand for setting the Active Content rendered JSX */
  Content?: ReactNode
  /** Shorthand for setting the Active Trigger rendered JSX */
  Trigger?: ReactNode
}

export interface ActiveContentProps {
  /** Unique id for this element in compound active context */
  activeId?: string
}

export interface ActiveTriggerProps {
  /** Unique id for this element in compound active context */
  activeId?: string
  /** Decorative element rendered after Trigger contents */
  decoration?: ReactNode
}

export interface ActionElementProps {
  /** Switch for a full width button that will fill its container */
  block?: boolean
  /** Sets a button fill color (theme color) */
  color?: string
  /** Sets a disabled style */
  disabled?: boolean
  /** Sets a button outline color (theme color) */
  outline?: string
  /** Sets a button size */
  size?: 'sm' | 'lg'
}

// --- Componentry props ----------------------------------

export interface BackgroundProps {
  /** Sets element `background` color (one of theme color) */
  background?: string
}

export interface BorderProps {
  /** Includes default border styles */
  border?: boolean
  /** Includes border top default border styles */
  borderTop?: boolean
  /** Includes border right default border styles */
  borderRight?: boolean
  /** Includes border bottom default border styles */
  borderBottom?: boolean
  /** Includes border left default border styles */
  borderLeft?: boolean
  /** Sets element `border-color` style (one of theme color) */
  borderColor?: string
  /** Sets a library `border-width-*` class */
  borderWidth?: 'sm' | 'md' | 'lg' | 'xl'
}

export interface FontProps {
  /** Sets the font color */
  fontColor?: string
  /** Sets the font size */
  fontSize?: string | number
  /** Sets the font weight */
  fontWeight?: 'light' | 'normal' | 'bold'
  /** Switch to style font italic */
  italic?: boolean
  /** Sets the font letter-spacing */
  letterSpacing?: number | string
  /** Sets element line-height */
  lineHeight?: number | string
  /** Switch to style font monospaced */
  monospace?: boolean
  /** Sets the text alignment */
  textAlign?: 'left' | 'center' | 'right' | 'justify'
  /** Switch to style font uppercase */
  uppercase?: boolean
}

export interface PositionProps {
  /** Sets element `position` style */
  position?: 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed'
}

export interface SizeProps {
  /** Sets a `width` style */
  width?: string | number
  /** Sets a `maxWidth` style */
  maxWidth?: string | number
  /** Sets a `minWidth` style */
  minWidth?: string | number
  /** Sets a `height` style */
  height?: string | number
  /** Sets a `maxHeight` style */
  maxHeight?: string | number
  /** Sets a `minHeight` style */
  minHeight?: string | number
}

export interface SpaceProps {
  m?: string | number
  mt?: string | number
  mr?: string | number
  mb?: string | number
  ml?: string | number
  mx?: string | number
  my?: string | number
  p?: string | number
  pt?: string | number
  pr?: string | number
  pb?: string | number
  pl?: string | number
  px?: string | number
  py?: string | number
}

export interface VariantProps {
  /** Sets the root className for style variants  */
  variant?: string
}

export type ComponentryProps = VariantProps &
  SpaceProps &
  SizeProps &
  PositionProps &
  FontProps &
  BorderProps &
  BackgroundProps

export type ActiveContentComponent = FunctionComponent<
  ActiveContentProps & ComponentryProps
>

export type ActiveTriggerComponent = FunctionComponent<
  ActiveTriggerProps & ComponentryProps
>

export type ActiveContainerComponent = FunctionComponent<
  ActiveContainerProps & ComponentryProps
> & {
  Content: ActiveContentComponent
  Trigger: ActiveTriggerComponent
}
