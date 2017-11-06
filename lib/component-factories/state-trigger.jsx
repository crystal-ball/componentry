// @flow
import { createElement } from 'react'
import type { ComponentType } from 'react'
import classNames from 'classnames'

import Button from '../Button'
import arias from '../utils/arias'
import type { ComponentArias } from '../utils/arias'

type Options = {
  /** Arias to include for component */
  componentArias: ComponentArias,
  /** Name of element, used for classes and handler selection */
  element: string,
  /** Specify if the trigger (which is a `<Button />`) should be anchor */
  link?: boolean
}

type Props = {
  // Component props
  as?: ComponentType<any> | string,
  children?: Node,
  className?: string,
  // Active boolean + change handlers from withActive HOC
  activate: Function,
  active: boolean,
  deactivate: Function,
  guid: string
}

/**
 * Factory returns custom `<Trigger />` components defined by the options.
 * Trigger components handle...
 */
export default ({ componentArias, element, link = false }: Options = {}) => ({
  activate,
  active,
  as,
  children,
  className,
  deactivate,
  guid,
  ...rest
}: Props) =>
  // $FlowFixMe
  createElement(
    as || Button,
    {
      'data-test': element ? `${element}-toggle` : null,
      ...arias({ guid, active, ...componentArias }),
      className: classNames(`${element}-toggle`, className),
      link,
      onClick: active ? deactivate : activate,
      // DO NOT PASS STATE PROPS THROUGH (SEE DECONSTRUCTION)!
      ...rest
    },
    children
  )
