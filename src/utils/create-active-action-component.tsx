import React, { useContext } from 'react'
import { ActiveActionBaseProps } from '../components/Active/active-types'
import { useThemeProps } from '../components/Provider/Provider'
import { ComponentName } from '../config/config'
import { ARIAControls, computeARIA } from './aria'
import { ActiveCtx } from './create-active-container-component'
import { createElement } from './create-element'

interface ActiveActionDefaults {
  /** Overrides component onClick to specified activate/deactivate action */
  action?: 'activate' | 'deactivate'
  /** Map of aria attributes to render with component */
  aria?: ARIAControls
  defaultAs?: React.ElementType
}

/**
 * Factory returns custom `<Action />` components defined by the fn options.
 * Componentry sets up actions to be buttons styled as links by default, this
 * can be overridden by passing an as and type props for an anchor.
 */
export function createActiveAction<
  Name extends ComponentName,
  Props extends ActiveActionBaseProps,
>(
  displayName: Name,
  { action, aria = {}, defaultAs }: ActiveActionDefaults = {},
): React.FC<Props> {
  function ActiveAction(props: Props) {
    const { guid, ...activeCtx } = useContext(ActiveCtx)
    const { activeId, active, activate, deactivate, ...rest } = {
      ...useThemeProps(displayName),
      ...activeCtx,
      ...props,
    }

    // Handle determining whether to call activate or deactivate on click
    // 1. If an action type was passed, call that action handler always
    // 2. else if in a compound-active context check if this activeId is active
    // 3. else use opposite of active status
    let onClick
    if (action) {
      onClick = action === 'activate' ? activate : deactivate
    } else if (activeId) {
      onClick = activeId === active ? deactivate : activate
    } else {
      onClick = active ? deactivate : activate
    }

    return createElement({
      as: defaultAs,
      componentClassName: `C9Y-${displayName}`,
      ...computeARIA({
        active,
        activeId,
        guid,
        type: 'action',
        aria,
      }),
      onClick,
      // For compound-active contexts, the value attr is to expose the activeId
      'data-active-id': activeId,
      ...rest,
    })
  }
  ActiveAction.displayName = displayName
  return ActiveAction
}
