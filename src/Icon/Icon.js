import React from 'react'
import elem from '../elem-factory'
import withTheme from '../withTheme'

/**
 * ⚠️ Requires SVGs are inlined into document somewhere
 */
export default withTheme('Icon', ({ id, font = true, ...rest }) =>
  elem({
    defaultAs: 'svg',
    role: 'img',
    classes: [`icon icon-${id}`, { font }],
    children: <use href={`#${id}`} xlinkHref={`#${id}`} />,
    ...rest,
  }),
)
