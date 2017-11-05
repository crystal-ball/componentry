// @flow
import { createElement } from 'react'
import type { ComponentType, Node } from 'react'
import { string } from 'prop-types'
import classNames from 'classnames'

type Props = {
  as?: ComponentType<any> | string,
  children: Node,
  className: string
}

type Context = {
  guid: string
}

/**
 * Modal title uses the modal guid as an id to refer to modal `labelledby`
 */
const Title = ({ as, children, className, ...rest }: Props, { guid }: Context) =>
  createElement(
    as || 'h4',
    {
      id: guid,
      className: classNames('modal-title', className),
      ...rest
    },
    children
  )
Title.contextTypes = {
  guid: string
}

export default Title
