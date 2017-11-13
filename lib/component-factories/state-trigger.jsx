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
  /** The display name for the component, specified for better debugging */
  name: string
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
  { classes = '', componentArias, element = '', name, ...optionsRest }: Options = {}
) => {
  const Trigger = ({
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
        'data-test': element ? `${element}-toggle` : undefined,
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
          [`${element}-toggle`]: element,
          // $FlowFixMe
          'inline-trigger': rest.link
        }),
        onClick: active ? deactivate : activate,
        // For tabs, the value is used in `withState` to handle changing the active
        // id. The trigger is always an activate trigger because any click will
        // activate that tab
        ...(tabId ? { value: tabId, onClick: activate } : {}),
        // Pass through any miscellaneous configurations from component factory
        ...optionsRest,
        // DO NOT PASS STATE PROPS THROUGH (SEE DECONSTRUCTION)!
        // Always pass ...rest last so that any instance props will override the
        // defaults or factory configurations
        ...rest
      },
      children
    )

  Trigger.displayName = name
  return Trigger
}
