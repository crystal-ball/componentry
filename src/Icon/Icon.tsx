/* eslint-disable @typescript-eslint/no-empty-interface */

import React from 'react'
import { useTheme } from '../Theme/Theme'
import { ComponentBaseProps, MergePropTypes } from '../utils/types'
import { element } from '../utils/element-creator'

// Module augmentation interface for overriding utility props' types
export interface IconProps {}

interface DefaultIconProps {
  /** SVG id for href link */
  id: string
  /** Display variant */
  variant?: 'font'
}

type Props = MergePropTypes<DefaultIconProps, IconProps> & ComponentBaseProps<'svg'>

/**
 * [Icon component 📝](https://componentry.design/components/icon)
 */
export const Icon: React.FC<Props> = (props) => {
  const { variant = 'font', id, ...rest } = { ...useTheme<Props>('Icon'), ...props }

  return element('Icon', {
    as: 'svg',
    role: 'img',
    componentCx: [`${variant}-variant`, `icon-${id}`],
    children: <use href={`#${id}`} xlinkHref={`#${id}`} />,
    ...rest,
  })
}
Icon.displayName = 'Icon'
