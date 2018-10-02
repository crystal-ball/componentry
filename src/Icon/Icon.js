// @flow
import React from 'react'
import elem from '../elem-factory'
import withTheme from '../withTheme'

type Props = {
  font?: boolean,
  id: string,
}

/**
 * ⚠️ Requires SVGs are inlined into document somewhere
 */
export default withTheme('Icon', ({ id, font = true, ...rest }: Props) =>
  elem({
    defaultAs: 'svg',
    role: 'img',
    classes: [`icon icon-${id}`, { font }],
    children: <use href={`#${id}`} xlinkHref={`#${id}`} />,
    ...rest,
  }),
)
