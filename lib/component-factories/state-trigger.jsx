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
  activate: Function,
  active: boolean,
  as?: ComponentType<any> | string,
  children?: Node,
  className?: string,
  deactivate: Function,
  guid: string
}

/**
 * Individual triggers are defined for `<Activate />`, `<Deactivate />` and
 * `<Toggle />` for convenience specifying desired behavior in templates.
 *
 * Module is component factory for returning a trigger of specified type.
 * @param {string} trigger The type of trigger, sets the `onClick` behavior of
 *                         returned component.
 */
export default ({ componentArias, element, link = true }: Options = {}) => ({
  as,
  active,
  activate,
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
