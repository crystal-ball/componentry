import React from 'react'
import { useTheme } from '../Theme/Theme'
import elem from '../elem-factory'

export const closeBase = {
  'aria-label': 'close',
  as: 'button',
  componentClassNames: 'close',
  type: 'button',
  children: (
    <svg className='icon icon-close font' role='img'>
      <use href='#close' xlinkHref='#close' />
    </svg>
  ),
}

export default function Close(props) {
  return elem({
    ...closeBase,
    ...useTheme('Close'),
    ...props,
  })
}
Close.displayName = 'Close'
