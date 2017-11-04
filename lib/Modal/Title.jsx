// @flow
import React from 'react'
import type { Element } from 'react'
import { string } from 'prop-types'
import classNames from 'classnames'

type Props = {
  children: Node,
  className: string
}

type Context = {
  C_GUID: string
}

// Just need id
const Title = (
  { children, className, ...rest }: Props,
  { C_GUID }: Context
): Element<'h3'> => (
  <h3 className={classNames('modal-title', className)} {...rest} id={C_GUID}>
    {children}
  </h3>
)
Title.contextTypes = {
  C_GUID: string
}

export default Title
