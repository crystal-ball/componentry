// @flow
import { createElement } from 'react'
import type { ComponentType, Element } from 'react'
import classNames from 'classnames'

import Button from '../Button'

type Options = {
  /**
   * Name of element, used for classes and handler selection
   */
  element: string,
  /**
   * Specify if the trigger (which is a `<Button />`) should be a `link` style
   * button.
   */
  link?: boolean,
  /**
   * Specify the trigger type to create a trigger that will fire only one type of
   * activation event
   */
  trigger?: 'activate' | 'deactivate'
}

type Props = {
  as?: ComponentType<any> | string,
  active: boolean,
  children?: Node,
  className?: string,
  'data-test'?: string,
  activate: Function,
  deactivate: Function
}

/**
 * Individual triggers are defined for `<Activate />`, `<Deactivate />` and
 * `<Toggle />` for convenience specifying desired behavior in templates.
 *
 * Module is component factory for returning a trigger of specified type.
 * @param {string} trigger The type of trigger, sets the `onClick` behavior of
 *                         returned component.
 */
export default ({ element, link = true, trigger }: Options = {}): Element<*> => {
  const Trigger = ({
    as,
    active,
    activate,
    children,
    className,
    deactivate,
    ...rest
  }: Props) => {
    let onClick
    if (trigger) {
      onClick = trigger === 'activate' ? activate : deactivate
    } else {
      onClick = active ? deactivate : activate
    }

    // $FlowFixMe
    return createElement(
      as,
      {
        className: classNames(`${element}-toggle`, className),
        link,
        onClick,
        ...rest
      },
      children
    )
  }

  Trigger.defaultProps = {
    as: Button,
    'data-test': `${element}-toggle`
  }

  // $FlowFixMe
  return Trigger
}
