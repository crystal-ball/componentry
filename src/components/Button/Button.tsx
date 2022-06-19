import clsx from 'clsx'
import { type ForwardedRef, type ReactElement, type ReactNode, forwardRef } from 'react'
import { type ComponentBaseProps } from '../../utils/base-types'
import { element } from '../../utils/element-creator'
import { type MergePropTypes } from '../../utils/types'
import { Icon } from '../Icon/Icon'
import { useThemeProps } from '../Provider/Provider'

// Module augmentation interface for overriding component props' types
export interface ButtonPropsOverrides {}

export interface ButtonPropsDefaults {
  children: ReactNode
  /** Button variant color */
  color?: 'primary'
  /** Disables the element, preventing mouse and keyboard events */
  disabled?: boolean
  /** Icon positioned after button content */
  endIcon?: string | JSX.Element
  /** Toggles full width element layout */
  fullWidth?: boolean
  /** HTML element href */
  href?: string
  /** Sets the display size */
  size?: 'small' | 'large'
  /** Icon positioned before button content */
  startIcon?: string | JSX.Element
  /** Display variant */
  variant?: 'filled' | 'outlined'
  /** Indicates whether buttons in a disabled state should be wrapped with a span */
  wrapWhenDisabled?: boolean
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
 * <Button onClick={() => buildSomethingRadical()}>
 *   Build something radical
 * </Button>
 * ```
 */
export const Button: Button = forwardRef((props, ref) => {
  const {
    variant = 'filled',
    children,
    disabled,
    startIcon,
    endIcon,
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
  const contents = element({
    ref,
    disabled,
    // If an href is passed, this instance should render an anchor tag
    as: merged.href ? 'a' : 'button',
    // @ts-expect-error - Ensure button works for router library usage even though to isn't in props
    type: merged.href || merged.to ? undefined : 'button',
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
        {startIcon && (
          <span className={iconCx}>
            {typeof startIcon === 'string' ? <Icon id={startIcon} /> : startIcon}
          </span>
        )}
        {children}
        {endIcon && (
          <span className={iconCx}>
            {typeof endIcon === 'string' ? <Icon id={endIcon} /> : endIcon}
          </span>
        )}
      </>
    ),
    ...merged,
  })

  return disabled && wrapWhenDisabled ? (
    <span className={clsx('C9Y-Button-DisabledWrapper', { 'w-full': fullWidth })}>
      {contents}
    </span>
  ) : (
    contents
  )
})
Button.displayName = 'Button'
