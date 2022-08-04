import React, { forwardRef } from 'react'
import { element } from '../../utils/element-creator'
import { DistributiveOmit, MergeTypes } from '../../utils/types'
import { UtilityProps } from '../../utils/utility-classes'
import { Icon } from '../Icon/Icon'
import { useThemeProps } from '../Provider/Provider'

/** Module augmentation interface for overriding component props' types */
export interface IconButtonPropsOverrides {}

export interface IconButtonPropsDefaults {
  /** Display variant color */
  color?: 'primary'
  /** Disables the element, preventing mouse and keyboard events */
  disabled?: boolean
  /** Button content */
  icon: string | React.ReactElement
  /** Toggles full width element layout */
  fullWidth?: boolean
  /** HTML element href */
  href?: string
  /** Sets the display size */
  size?: 'small' | 'large'
  /** Display variant */
  variant?: 'filled' | 'outlined'
}

export type IconButtonPropsBase<Elem extends React.ElementType = 'button'> = Omit<
  UtilityProps,
  'color'
> &
  MergeTypes<IconButtonPropsDefaults, IconButtonPropsOverrides> & { as?: Elem }

export type IconButtonProps<Elem extends React.ElementType = 'button'> =
  IconButtonPropsBase<Elem> &
    DistributiveOmit<React.ComponentPropsWithRef<Elem>, keyof IconButtonPropsBase<Elem>>

/**
 * IconButton provides action elements using icons.
 * @example
 * ```tsx
 * <IconButton id="coffee" onClick={() => buildSomethingDelightful()} />
 * ```
 * @see [📝 IconButton](https://componentry.design/docs/components/iconbutton)
 */
export interface IconButton {
  <Elem extends React.ElementType = 'button'>(
    props: IconButtonProps<Elem>,
  ): React.ReactElement | null
  displayName?: string
}

export const IconButton = forwardRef<HTMLElement, IconButtonProps>((props, ref) => {
  const {
    variant = 'filled',
    color,
    disabled,
    icon,
    size,
    ...merged
  } = {
    ...useThemeProps('IconButton'),
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
      `C9Y-IconButton-base C9Y-IconButton-${variant}`,
      {
        [`C9Y-IconButton-${color}Color`]: color,
        [`C9Y-IconButton-${size}Size`]: size,
      },
    ],
    children: typeof icon === 'string' ? <Icon id={icon} /> : icon,
    ...merged,
  })
}) as IconButton
IconButton.displayName = 'IconButton'
