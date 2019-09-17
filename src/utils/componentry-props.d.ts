export interface ActiveContainerProps {
  /** Controls the active state for binary-active components */
  active?: boolean
  /** Sets the initial value for active */
  defaultActive: boolean | string
  /** Handler called to transition from inactive to active */
  activate?: Function
  /** Handler called to transition from active to inactive */
  deactivate?: Function
  /** Sets the direction relative to component trigger to position content */
  direction: 'top' | 'right' | 'bottom' | 'left' | 'overlay'
  /** Switch to enable a deactivate on external click handler */
  clickEvents?: boolean
  /** Switch to enable a deactivate on esc keypress handler */
  escEvents?: boolean
  /** Switch to enable calling activate+deactive on mouse enter and leave */
  mouseEvents?: boolean
  /** Listener fn that will be called before activation */
  onActivate?: Function
  /** Listener fn that will be called after activation  */
  onActivated?: Function
  /** Listener fn that will be called before deactivate */
  onDeactivate?: Function
  /** Listener fn that will be called after deactivation */
  onDeactivated?: Function
  // TODO: Content, Trigger
}

export interface ActiveContentProps {
  /** Unique id for this element in compound active context */
  activeId?: string
}

export interface ActiveTriggerProps {
  /** Unique id for this element in compound active context */
  activeId?: string
  // TODO: decoration?: string | React.ComponentType<any>
}

export interface ButtonProps {
  /** Switch to style the button like an anchor */
  anchor?: boolean
  /** Switch for a full width button that will fill its container */
  block?: boolean
  /** Sets a button fill color */
  color?: string
  /** Sets a button outline color */
  outline?: string
  /** Sets a button size */
  size?: 'sm' | 'lg'
}

export interface FontProps {
  /** Sets the font color */
  color?: string
  /** Sets the font weigth */
  fontWeight?: 'light' | 'normal' | 'bold'
  /** Sets the font size */
  fontSize?: string | number
  /** Switch to style font italic */
  italic?: boolean
  /** Sets the font letter-spacing */
  letterSpacing?: number | string
  /** Sets element line-height */
  lineHeight?: number | string
  /** Switch to style font monospaced */
  monospace?: boolean
  /** Sets the font size */
  size?: 'sm' | 'lg'
  /** Sets the text alignment */
  textAlign: 'left' | 'center' | 'right' | 'justify'
  /** Switch to style font uppercase */
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
