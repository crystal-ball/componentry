import React from 'react'
import { useTheme } from '../Theme/Theme'
import elem from '../elem-factory'

export default function Close(props) {
  return elem({
    'aria-label': 'close',
    as: 'button',
    componentClassNames: 'close',
    type: 'button',
    children: (
      <svg className='icon icon-close font' role='img'>
        <use href='#close' xlinkHref='#close' />
      </svg>
    ),
    ...useTheme('Close'),
    ...props,
  })
}
