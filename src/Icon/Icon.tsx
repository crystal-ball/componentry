import React from 'react'
import { useTheme } from '../Theme/Theme'
import { element } from '../factories/element'
import { BaseProps } from '../utils/base-types'

interface IconProps
  extends BaseProps,
    Omit<
      React.ComponentPropsWithoutRef<'svg'>,
      'className' | 'fontStyle' | 'fontWeight'
    > {
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

  return element({
    as: 'svg',
    role: 'img',
    componentCx: `🅲-icon icon-${variant} icon-${id}`,
    children: <use href={`#${id}`} xlinkHref={`#${id}`} />,
    ...rest,
  })
}
Icon.displayName = 'Icon'
