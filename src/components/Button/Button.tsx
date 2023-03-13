import clsx from 'clsx'
import React, { forwardRef } from 'react'
import { createElement } from '../../utils/create-element'
import { MergeTypes, Resolve } from '../../utils/types'
import { ElementTypeProps, UtilityProps } from '../../utils/utility-props'
import { Icon } from '../Icon/Icon'
import { useThemeProps } from '../Provider/Provider'

/** Module augmentation interface for overriding component props' types */
export interface ButtonPropsOverrides {}

export interface ButtonPropsDefaults {
  /** Display style */
  variant?: 'filled' | 'outlined'
  /** Theme color for display variant */
  color?: 'primary'
  /** Disables the element, preventing mouse and keyboard events */
  disabled?: boolean
  /** Icon positioned after button content */
  endIcon?: string | React.ReactElement
  /** Toggles full width element layout */
  fullWidth?: boolean
  /** HTML element href */
  href?: string
  /** Display size */
  size?: 'small' | 'large'
  /** Icon positioned before button content */
  startIcon?: string | React.ReactElement
}

export type ButtonProps<As extends React.ElementType = 'button'> = Resolve<
  MergeTypes<ButtonPropsDefaults, ButtonPropsOverrides> & { as?: As } & Omit<
      UtilityProps,
      'color'
    >
> &
  ElementTypeProps<As>

/**
 * Button provides action elements styled as buttons.
 * @example
 * ```tsx
 * <Button onClick={() => buildSomethingDelightful()}>
 *   Componentry
 * </Button>
 * ```
 * @see [📝 Button](https://componentry.design/docs/components/button)
 */
export interface Button {
  <As extends React.ElementType = 'button'>(props: ButtonProps<As>): React.ReactElement
  displayName?: string
}

export const Button = forwardRef<HTMLElement, ButtonProps>((props, ref) => {
  const {
    variant = 'filled',
    children,
    disabled,
    startIcon,
    endIcon,
    color,
    fullWidth,
    size,
    ...merged
  } = {
    ...useThemeProps('Button'),
    ...props,
  }

  return createElement({
    ref,
    disabled,
    // If an href is passed, this instance should render an anchor tag
    as: merged.href ? 'a' : 'button',
    // @ts-expect-error - Ensure button works for router library usage even though to isn't in props
    type: merged.href || merged.to ? undefined : 'button',
    componentClassName: [
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
            {typeof startIcon === 'string' ? <Icon id={startIcon} /> : startIcon}
          </span>
        )}
        {children}
        {endIcon && (
          <span
            className={clsx('C9Y-Button-icon C9Y-Button-endIcon', {
              [`C9Y-Button-${size}SizeIcon`]: size,
            })}
          >
            {typeof endIcon === 'string' ? <Icon id={endIcon} /> : endIcon}
          </span>
        )}
      </>
    ),
    ...merged,
  })
}) as Button
Button.displayName = 'Button'
