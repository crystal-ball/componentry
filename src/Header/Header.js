// @flow
import React, { type Node } from 'react'
import elementFactory from '../component-factories/element'

type Props = {
  children: Node,
  /** Activates subheader styles, including reduction in font size and muted text color */
  subheader?: boolean,
}

export default elementFactory(
  'Header',
  ({ subheader, children, ...props }: Props) => ({
    as: 'h1',
    className: {
      'text-muted': subheader,
    },
    children: subheader ? <small>{children}</small> : children,
    ...props,
  }),
)
