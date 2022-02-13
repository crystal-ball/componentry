import React from 'react'
import { useTheme } from '../Theme/Theme'
import { type ComponentBaseProps } from '../../utils/base-types'
import { type MergePropTypes } from '../../utils/types'
import { element } from '../../utils/element-creator'

// Module augmentation interface for overriding component props' types
export interface IconPropsOverrides {}

interface IconPropsDefaults {
  /** Adjusts the text baseline using a negative margin, this can be used to align font icons outside of flex containers */
  baseline?: boolean
  /** SVG id for href link */
  id: string
  /** Display variant */
  variant?: 'font'
}

type IconProps = MergePropTypes<IconPropsDefaults, IconPropsOverrides> &
  ComponentBaseProps<'svg'>

/**
 * [Icon component 📝](https://componentry.design/components/icon)
 */
export const Icon: React.FC<IconProps> = (props) => {
  const {
    baseline,
    variant = 'font',
    id,
    ...rest
  } = { ...useTheme<IconProps>('Icon'), ...props }

  return element({
    as: 'svg',
    role: 'img',
    componentCx: [
      `🅲Icon-base 🅲Icon-${variant} icon-${id}`,
      { '🅲Icon-baseline': baseline },
    ],
    children: <use href={`#${id}`} xlinkHref={`#${id}`} />,
    ...rest,
  })
}
Icon.displayName = 'Icon'
