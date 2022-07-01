import clsx from 'clsx'
import React, { forwardRef } from 'react'
import { element } from '../../utils/element-creator'
import { MergeTypes, Resolve } from '../../utils/types'
import { UtilityProps } from '../../utils/utility-classes'
import { useThemeProps } from '../Provider/Provider'

// Module augmentation interface for overriding component props' types
export interface ButtonPropsOverrides {}

export interface ButtonPropsDefaults {
  children: React.ReactNode
  /** Button variant color */
  color?: 'primary'
  /** Disables the element, preventing mouse and keyboard events */
  disabled?: boolean
  /** Icon positioned after button content */
  endIcon?: React.ReactElement
  /** Toggles full width element layout */
  fullWidth?: boolean
  /** HTML element href */
  href?: string
  /** Sets the display size */
  size?: 'small' | 'large'
  /** Icon positioned before button content */
  startIcon?: React.ReactElement
  /** Display variant */
  variant?: 'filled' | 'outlined'
  /** Indicates whether buttons in a disabled state should be wrapped with a span */
  wrapWhenDisabled?: boolean
}

export type ButtonProps = Resolve<MergeTypes<ButtonPropsDefaults, ButtonPropsOverrides>> &
  UtilityProps &
  React.ComponentPropsWithRef<'button'>

// ✨ Nice display type for IntelliSense
export interface Button {
  (props: ButtonProps): React.ReactElement | null
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
          <span
            className={clsx('C9Y-Button-icon C9Y-Button-startIcon', {
              [`C9Y-Button-${size}SizeIcon`]: size,
            })}
          >
            {startIcon}
          </span>
        )}
        {children}
        {endIcon && (
          <span
            className={clsx('C9Y-Button-icon C9Y-Button-endIcon', {
              [`C9Y-Button-${size}SizeIcon`]: size,
            })}
          >
            {endIcon}
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
