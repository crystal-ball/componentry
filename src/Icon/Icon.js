import React from 'react'
import elem from '../elem-factory'
import { useTheme } from '../Theme/Theme'

/**
 * [Icon component 📝](https://componentry.design/components/icon)
 */
export default function Icon(props) {
  const { id, font, ...rest } = { ...useTheme('Icon'), ...props }

  return elem({
    as: 'svg',
    role: 'img',
    elemClassName: [`icon icon-${id}`, { font }],
    children: <use href={`#${id}`} xlinkHref={`#${id}`} />,
    ...rest,
  })
}
Icon.displayName = 'Icon'
