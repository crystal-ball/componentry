import clsx from 'clsx'
import React, { forwardRef } from 'react'
import { element } from '../../utils/element-creator'
import { DistributiveOmit, MergeTypes } from '../../utils/types'
import { UtilityProps } from '../../utils/utility-classes'
import { Icon } from '../Icon/Icon'
import { useThemeProps } from '../Provider/Provider'

/** Module augmentation interface for overriding component props' types */
export interface ButtonPropsOverrides {}

export interface ButtonPropsDefaults {
  /** Button variant color */
  color?: 'primary'
  /** Disables the element, preventing mouse and keyboard events */
  disabled?: boolean
  /** Icon positioned after button content */
  endIcon?: string | React.ReactElement
  /** Toggles full width element layout */
  fullWidth?: boolean
  /** HTML element href */
  href?: string
  /** Sets the display size */
  size?: 'small' | 'large'
  /** Icon positioned before button content */
  startIcon?: string | React.ReactElement
  /** Display variant */
  variant?: 'filled' | 'outlined'
}

export type ButtonPropsBase<Elem extends React.ElementType = 'button'> = Omit<
  UtilityProps,
  'color'
> &
  MergeTypes<ButtonPropsDefaults, ButtonPropsOverrides> & { as?: Elem }

export type ButtonProps<Elem extends React.ElementType = 'button'> =
  ButtonPropsBase<Elem> &
    DistributiveOmit<React.ComponentPropsWithRef<Elem>, keyof ButtonPropsBase<Elem>>

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
  <Elem extends React.ElementType = 'button'>(
    props: ButtonProps<Elem>,
  ): React.ReactElement
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

  return element({
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
