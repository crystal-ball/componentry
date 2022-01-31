import React, { useContext } from 'react'
import { useTheme } from '../components/Theme/Theme'
import { ActiveCtx } from './active-container-component-builder'
import { type ARIAControls, computeARIA } from './aria'
import { type ActiveActionBaseProps } from './types'
import { element } from './element-creator'

interface ActiveActionBuilder {
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
export function activeActionBuilder<TProps extends ActiveActionBaseProps>(
  displayName: string,
  { action, aria = {}, defaultAs }: ActiveActionBuilder = {},
): React.FC<TProps> {
  function ActiveAction(props: TProps) {
    const { guid, ...activeCtx } = useContext(ActiveCtx)
    const { activeId, active, activate, deactivate, ...rest } = {
      ...useTheme<TProps>(displayName),
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

    return element({
      'as': defaultAs,
      'componentCx': `🅲${displayName}`,
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
