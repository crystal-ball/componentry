import clsx from 'clsx'
import { ForwardedRef, JSXElementConstructor, ReactElement, forwardRef } from 'react'
import { type ComponentBaseProps } from '../../utils/base-types'
import { element } from '../../utils/element-creator'
import { type MergePropTypes } from '../../utils/types'
import { Icon } from '../Icon/Icon'
import { useThemeProps } from '../Provider/Provider'

// Module augmentation interface for overriding component props' types
export interface ButtonPropsOverrides {}

export interface ButtonPropsDefaults {
  children: ReactElement
  /** Button variant color */
  color?: 'primary'
  /** Disables the element, preventing mouse and keyboard events */
  disabled?: boolean
  /** Icon positioned after button content */
  endIcon?:
    | string
    | JSXElementConstructor<{ className?: string; [Prop: string]: unknown }>
  /** Toggles full width element layout */
  fullWidth?: boolean
  /** HTML element href */
  href?: string
  /** Sets the display size */
  size?: 'small' | 'large'
  /** Icon positioned before button content */
  startIcon?:
    | string
    | JSXElementConstructor<{ className?: string; [Prop: string]: unknown }>
  /** Indicates whether buttons in a disabled state should be wrapped with a span */
  wrapWhenDisabled?: boolean
  /** Display variant */
  variant?: 'filled' | 'outlined'
}

export type ButtonProps = MergePropTypes<ButtonPropsDefaults, ButtonPropsOverrides> &
  ComponentBaseProps<'button'>

// ✨ Nice display type for IntelliSense
export interface Button {
  (props: ButtonProps & { ref?: ForwardedRef<unknown> }): ReactElement | null
  displayName?: string
}

/**
 * #### [📝 Button](https://componentry.design/docs/components/button)
 *
 * Button provides actionable elements for creating accessible user interactions.
 * @example
 * ```tsx
 * <Button onClick={() => buildRadical()}>
 *   Build something radical
 * </Button>
 * ```
 */
export const Button: Button = forwardRef((props, ref) => {
  const {
    variant = 'filled',
    children,
    disabled,
    startIcon: StartIcon,
    endIcon: EndIcon,
    color,
    fullWidth,
    size,
    wrapWhenDisabled = true,
    ...merged
  } = {
    ...useThemeProps('Button'),
    ...props,
  }

  const iconCx = clsx('C9Y-Button-Icon', { [`C9Y-Button-Icon-${size}Size`]: size })
  const decoratedStartIcon =
    StartIcon === undefined ? null : typeof StartIcon === 'string' ? (
      <Icon id={StartIcon} className={iconCx} />
    ) : (
      <StartIcon className={iconCx} />
    )

  const decoratedEndIcon =
    EndIcon === undefined ? null : typeof EndIcon === 'string' ? (
      <Icon id={EndIcon} className={iconCx} />
    ) : (
      <EndIcon className={iconCx} />
    )

  const contents = element({
    ref,
    disabled,
    // If an href is passed, this instance should render an anchor tag
    as: merged.href ? 'a' : 'button',
    type: merged.href ? undefined : 'button',
    componentCx: [
      `C9Y-Button-base C9Y-Button-${variant}`,
      {
        [`C9Y-Button-${color}Color`]: color,
        [`C9Y-Button-${size}Size`]: size,
        'w-full': fullWidth,
      },
    ],
    children: (
      <>
        {decoratedStartIcon}
        {children}
        {decoratedEndIcon}
      </>
    ),
    ...merged,
  })

  return disabled && wrapWhenDisabled ? (
    <span className='C9Y-Button-DisabledWrapper'>{contents}</span>
  ) : (
    contents
  )
})
Button.displayName = 'Button'
