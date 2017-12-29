// @flow
import { createElement } from 'react'
import type { ComponentType, Node } from 'react'
import { object, shape, string } from 'prop-types'
import classNames from 'classnames'

type Props = {
  as?: ComponentType<any> | string,
  children: Node,
  className: string,
}

type Context = {
  guid: string,
  THEME: {
    ModalTitle: { [string]: any },
  },
}

/**
 * Modal title uses the modal guid as an id to refer to modal `labelledby`
 */
const Title = (props: Props, { guid, THEME = { ModalTitle: {} } }: Context) => {
  const componentCtx = THEME.ModalTitle || {}
  const { as, children, className, ...rest } = { ...componentCtx, ...props }

  return createElement(
    as || 'h4',
    {
      id: guid,
      className: classNames('modal-title', className),
      ...rest,
    },
    children,
  )
}
Title.displayName = 'ModalTitle'
Title.contextTypes = {
  guid: string,
  THEME: shape({ ModalTitle: object }),
}

export default Title
