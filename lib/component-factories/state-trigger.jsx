// @flow
import { createElement } from 'react'
import type { ComponentType } from 'react'
import classNames from 'classnames'

import Button from '../Button'
import arias from '../utils/arias'
import type { ComponentArias } from '../utils/arias'

type Options = {
  classes?: string,
  /** Arias to include for component */
  componentArias: ComponentArias,
  /** Name of element, used for classes and handler selection */
  element?: string,
  /** Specify if the trigger (which is a `<Button />`) should be anchor */
  link?: boolean,
  misc?: any
}

type Props = {
  // Component props
  as?: ComponentType<any> | string,
  children?: Node,
  className?: string,
  tabId?: string,
  // Active boolean + change handlers from withActive HOC
  activate: Function,
  active: boolean,
  deactivate: Function,
  guid: string
}

/**
 * Factory returns custom `<Trigger />` components defined by the options.
 * Trigger components handle setting aria attributes and calling passed state change
 * methods on click
 */
export default (
  {
    classes = '',
    componentArias,
    element = '',
    link = false,
    misc = {}
  }: Options = {}
) => ({
  activate,
  active,
  as,
  children,
  className,
  deactivate,
  guid,
  tabId = '',
  ...rest
}: Props) =>
  // $FlowFixMe
  createElement(
    as || Button,
    {
      'data-test': element ? `${element}-toggle` : null,
      ...arias({
        guid,
        active,
        ...componentArias,
        // Tabs have different arias to handle multiple show/hide elements. The
        // passed id is used for trigger and content components, these arias will
        // override the standard componentArias
        ...(tabId
          ? {
              active: tabId === active,
              id: `${tabId}-tab`,
              controls: `${tabId}-content`,
              selected: true
            }
          : {})
      }),
      className: classNames(className, classes, {
        // For tab triggers add active if the tab is selected
        active: tabId && active === tabId,
        [`${element}-toggle`]: element
      }),
      link,
      onClick: active ? deactivate : activate,
      // For tabs, the value is used in `withState` to handle changing the active
      // id. The trigger is always an activate trigger because any click will
      // activate that tab
      ...(tabId ? { value: tabId, onClick: activate } : {}),
      ...misc,
      // DO NOT PASS STATE PROPS THROUGH (SEE DECONSTRUCTION)!
      ...rest
    },
    children
  )
