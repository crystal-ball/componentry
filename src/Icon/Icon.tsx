import React from 'react'
import { useTheme } from '../Theme/Theme'
import { element } from '../factories/element'
import { UtilityProps } from '../base-types'

interface IconProps extends UtilityProps {
  /** SVG id for href link */
  id: 'string'
  /** Display variant */
  variant?: 'font'
}

/**
 * [Icon component 📝](https://componentry.design/components/icon)
 */
export const Icon: React.FC<IconProps> = (props) => {
  const { variant = 'font', id, ...rest } = { ...useTheme('Icon'), ...props } as IconProps

  return element({
    as: 'svg',
    role: 'img',
    componentCx: `🅲-icon icon-${variant} icon-${id}`,
    children: <use href={`#${id}`} xlinkHref={`#${id}`} />,
    ...rest,
  })
}
Icon.displayName = 'Icon'
