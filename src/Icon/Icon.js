import React from 'react'
import element from '../element'
import { useTheme } from '../Theme/Theme'

/**
 * [Icon component 📝](https://componentry.design/components/icon)
 */
export default function Icon(props) {
  /** @type {{ variant: string, id: string }} */
  const { variant = 'font', id, ...rest } = { ...useTheme('Icon'), ...props }

  return element({
    as: 'svg',
    role: 'img',
    componentCx: `🅲-icon icon-${variant} icon-${id}`,
    children: <use href={`#${id}`} xlinkHref={`#${id}`} />,
    ...rest,
  })
}
Icon.displayName = 'Icon'
