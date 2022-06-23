import React, { forwardRef } from 'react'
import { element } from '../../utils/element-creator'
import { MergeTypes, Resolve } from '../../utils/types'
import { UtilityProps } from '../../utils/utility-classes'
import { Icon } from '../Icon/Icon'
import { useThemeProps } from '../Provider/Provider'

// Module augmentation interface for overriding component props' types
export interface IconButtonPropsOverrides {}

export interface IconButtonPropsDefaults {
  /** Display variant color */
  color?: 'primary'
  /** Disables the element, preventing mouse and keyboard events */
  disabled?: boolean
  /** Button content */
  icon: string | JSX.Element
  /** Toggles full width element layout */
  fullWidth?: boolean
  /** HTML element href */
  href?: string
  /** Sets the display size */
  size?: 'small' | 'large'
  /** Indicates whether buttons in a disabled state should be wrapped with a span */
  wrapWhenDisabled?: boolean
  /** Display variant */
  variant?: 'transparent' | 'outlined'
}

export type IconButtonProps = Resolve<
  MergeTypes<IconButtonPropsDefaults, IconButtonPropsOverrides>
> &
  UtilityProps &
  React.ComponentPropsWithRef<'button'>

// ✨ Nice display type for IntelliSense
export interface IconButton {
  (props: IconButtonProps): React.ReactElement | null
  displayName?: string
}

/**
 * #### [📝 IconButton](https://componentry.design/docs/components/iconbutton)
 *
 * IconButton provides an accessible icon action element
 * @example
 * ```tsx
 * <IconButton id="code" onClick={() => buildSomethingRadical()} />
 * ```
 */
export const IconButton: IconButton = forwardRef((props, ref) => {
  const {
    variant = 'filled',
    color,
    disabled,
    icon,
    size,
    wrapWhenDisabled = true,
    ...merged
  } = {
    ...useThemeProps('IconButton'),
    ...props,
  }

  const contents = element({
    ref,
    disabled,
    // If an href is passed, this instance should render an anchor tag
    as: merged.href ? 'a' : 'button',
    type: merged.href ? undefined : 'button',
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

  return disabled && wrapWhenDisabled ? (
    <span className='C9Y-IconButton-DisabledWrapper'>{contents}</span>
  ) : (
    contents
  )
})
IconButton.displayName = 'IconButton'
