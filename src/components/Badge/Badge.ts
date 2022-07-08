import React from 'react'
import { element } from '../../utils/element-creator'
import { MergeTypes, Resolve } from '../../utils/types'
import { UtilityProps } from '../../utils/utility-classes'
import { useThemeProps } from '../Provider/Provider'

// Module augmentation interface for overriding component props' types
export interface BadgePropsOverrides {}

export interface BadgePropsDefaults {
  /** Variant color */
  color?: 'primary'
  /** Display variant */
  variant?: 'filled'
}

export type BadgeProps = Resolve<MergeTypes<BadgePropsDefaults, BadgePropsOverrides>> &
  Omit<UtilityProps, 'color'> &
  React.ComponentPropsWithoutRef<'div'>

// ✨ Nice display type for IntelliSense
export interface Badge {
  (props: BadgeProps): React.ReactElement | null
  displayName?: string
}

/**
 * [Badge component 📝](https://componentry.design/components/badge)
 * @experimental
 */
export const Badge: Badge = (props) => {
  const {
    color,
    variant = 'filled',
    ...rest
  } = {
    ...useThemeProps('Badge'),
    ...props,
  }

  return element({
    componentCx: [
      `C9Y-Badge-base C9Y-Badge-${variant}`,
      { [`C9Y-Badge-${color}Color`]: color },
    ],
    ...rest,
  })
}
Badge.displayName = 'Badge'
