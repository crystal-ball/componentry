// @flow
import { createElement } from 'react'
import type { ComponentType, Node } from 'react'
import { object, shape } from 'prop-types'
import classNames from 'classnames'

import Button, { BaseButton } from '../Button/Button'
import arias from '../utils/arias'
import type { ComponentArias } from '../utils/arias'

type Options = {
  /** Determines whether to use Button or BaseButton components */
  baseButton?: boolean,
  /** Custom trigger static classes */
  classes?: string,
  /** Arias to include for component */
  componentArias: ComponentArias,
  /** Name of element, used for classes and handler selection */
  element?: string,
  /** The display name for the component, specified for better debugging */
  name: string,
  /** If the trigger can act as a toggle vs activate only */
  triggerType?: 'activate' | 'deactivate',
}

type Props = {
  // Component props
  as?: ComponentType<any> | string,
  children?: Node,
  className?: string,
  link?: boolean,
  activeId?: string,
  // Active boolean + change handlers from withActive HOC
  activate: Function,
  active: boolean,
  deactivate: Function,
  guid: string,
}

type Context = { [string]: { [string]: any } }

/**
 * Factory returns custom `<Trigger />` components defined by the options.
 */
export default ({
  baseButton,
  classes = '',
  componentArias,
  element = '',
  name,
  triggerType,
  ...optionsRest
}: Options = {}) => {
  const Trigger = (props: Props, { THEME = {} }: Context) => {
    const componentCtx = THEME[name] || {}
    const {
      activate,
      active,
      as,
      children,
      className,
      deactivate,
      guid,
      link,
      activeId = '',
      ...rest
    }: Props = { ...componentCtx, ...props }

    let onClick
    if (triggerType) {
      onClick = triggerType === 'activate' ? activate : deactivate
    } else if (activeId) {
      onClick = activeId === active ? deactivate : activate
    } else {
      onClick = active ? deactivate : activate
    }

    // Multi-active elems have different arias to handle multiple show/hide
    // elements. The passed id is used for trigger and content components,
    // these arias will override the standard componentArias
    const activeIdArias = activeId
      ? {
          active: activeId === active,
          id: `${activeId}-tab`,
          controls: `${activeId}-content`,
          selected: true,
        }
      : {}

    return createElement(
      as || (baseButton ? BaseButton : Button),
      {
        'data-test': element ? `${element}-trigger` : undefined,
        ...arias({
          guid,
          active,
          ...componentArias,
          ...activeIdArias,
        }),
        className: classNames(classes, componentCtx.className, className, {
          // For mutli-active triggers add active if the trigger is selected
          active: activeId && active === activeId,
          [`${element}-toggle`]: element,
        }),
        onClick,
        link,
        // For multi-active elems, the value is used in `withState` to handle
        // changing the active id
        value: activeId || undefined,
        // Pass through any miscellaneous configurations from component factory
        ...optionsRest,
        // Pass through props rest last to allow any instance overrides
        ...rest,
      },
      children,
    )
  }

  Trigger.displayName = name
  Trigger.contextTypes = { THEME: shape({ [name]: object }) }
  return Trigger
}
