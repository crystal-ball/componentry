import React from 'react'
import elem from '../elem-factory'
import { useTheme } from '../Theme/Theme'

/**
 * ⚠️ Requires SVGs are inlined into document somewhere
 */
export default function Icon(props) {
  const { id, font = true, ...rest } = { ...useTheme('Icon'), ...props }

  return elem({
    as: 'svg',
    role: 'img',
    componentClassNames: [`icon icon-${id}`, { font }],
    children: <use href={`#${id}`} xlinkHref={`#${id}`} />,
    ...rest,
  })
}
