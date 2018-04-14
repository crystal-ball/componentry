// @flow
import React from 'react'

import elementFactory from '../component-factories/element'

type Props = {
  font?: boolean,
  id: string,
}

/**
 * ⚠️ Requires SVGs are inlined into document somewhere
 */
export default elementFactory('Icon', ({ id, font = true, ...props }: Props) => ({
  role: 'img',
  tag: 'svg',
  className: {
    icon: true,
    [id]: true,
    font,
  },
  children: <use href={`#${id}`} xlinkHref={`#${id}`} />,
  ...props,
}))
