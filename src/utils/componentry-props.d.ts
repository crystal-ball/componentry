export interface ActiveContainerProps {
  active?: boolean
  defaultActive: boolean | string
  activate?: Function
  deactivate?: Function
  /** Direction is included as a className, used for creating style modifiers */
  direction: 'top' | 'right' | 'bottom' | 'left' | 'overlay'
  /** Toggles whether mouse events will call activate/deactivate handlers */
  mouseEvents?: boolean
  /** Called before activation */
  onActivate?: Function
  /** Called after activation */
  onActivated?: Function
  /** Called before deactivation */
  onDeactivate?: Function
  /** Called after deactivation */
  onDeactivated?: Function
  // TODO: Content, Trigger
}

export interface ActiveContentProps {
  activeId?: string
}

export interface ActiveTriggerProps {
  activeId?: string
  // TODO: decoration?: string | React.ComponentType<any>
}

export interface ButtonProps {
  /** Toggle the anchor button style */
  anchor?: boolean
  /** Sets atomic .btn-block for a full width button */
  block?: boolean
  /** Sets atomic .btn-<COLOR> (or .text-<COLOR>), should be a theme color or body or muted */
  color?: string
  /** Toggle the outline button style, should be a theme color */
  outline?: string
  /** Toggles the button size */
  size?: 'sm' | 'lg'
}

export interface FontProps {
  /** Sets atomic .text-<COLOR>, should be a theme color or body or muted */
  color?: string
  /** Sets atomic .text-<WEIGHT> */
  fontWeight?: 'light' | 'normal' | 'bold'
  /** Sets style value, numbers are converted to pixel value */
  fontSize?: string | number
  /** Sets atomic .text-italic */
  italic?: boolean
  /** Sets style value, numbers are converted to pixel value */
  letterSpacing?: number | string
  /** Sets style value, numbers converted to unitless value */
  lineHeight?: number | string
  /** Sets atomic .text-monospace */
  monospace?: boolean
  /** Sets atomic .text-<SIZE> */
  size?: 'sm' | 'lg'
  /** Sets atomic .text-<ALIGN> */
  textAlign: 'left' | 'center' | 'right' | 'justify'
  /** Sets atomic .text-uppercase */
  uppercase?: boolean
}

export interface SpaceProps {
  m?: string | number
  mt?: string | number
  mr?: string | number
  mb?: string | number
  ml?: string | number
  p?: string | number
  pt?: string | number
  pr?: string | number
  pb?: string | number
  pl?: string | number
}

export interface ComponentryProps {
  color?: string
}
