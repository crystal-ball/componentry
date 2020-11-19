import React from 'react'
import { useTheme } from '../Theme/Theme'
import { ComponentBaseProps } from '../utils/types'
import { element } from '../utils/element-creator'

interface IconProps extends ComponentBaseProps<'svg'> {
  /** SVG id for href link */
  id: string
  /** Display variant */
  variant?: 'font'
}

/**
 * [Icon component 📝](https://componentry.design/components/icon)
 */
export const Icon: React.FC<IconProps> = (props) => {
  const { variant = 'font', id, ...rest } = { ...useTheme<IconProps>('Icon'), ...props }

  return element('Icon', {
    as: 'svg',
    role: 'img',
    componentCx: [`icon-${variant}`, `icon-${id}`],
    children: <use href={`#${id}`} xlinkHref={`#${id}`} />,
    ...rest,
  })
}
Icon.displayName = 'Icon'
