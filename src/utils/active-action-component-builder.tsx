import React, { useContext } from 'react'
import { useTheme } from '../components/Theme/Theme'
import { ActiveCtx } from './active-container-component-builder'
import { ARIAControls, computeARIA } from './aria'
import { ActiveActionBaseProps } from './types'
import { element } from './element-creator'

interface ActiveActionBuilder {
  /** Overrides component onClick to specified activate/deactivate action */
  action?: 'activate' | 'deactivate'
  /** Map of aria attributes to render with component */
  aria?: ARIAControls
}

/**
 * Factory returns custom `<Action />` components defined by the fn options.
 * Componentry sets up actions to be buttons styled as links by default, this
 * can be overridden by passing an as and type props for an anchor.
 */
export function activeActionBuilder<TProps extends ActiveActionBaseProps>(
  displayName: string,
  { action, aria = {} }: ActiveActionBuilder = {},
): React.FC<TProps> {
  const baseCx = displayName

  function ActiveAction(props: TProps) {
    const { guid, ...activeCtx } = useContext(ActiveCtx)
    const {
      activeId,
      as = 'button',
      type = 'button',
      variant = 'primary',
      // --- Render elements
      children,
      decoration,
      // --- Active context
      active,
      activate,
      deactivate,
      ...rest
    } = {
      ...useTheme<TProps>(displayName),
      ...activeCtx,
      ...props,
    }

    // Handle determining whether to call activate or deactivate on click
    // 1. If an action type was passed, call that action handler always
    // 2. else if in a compound-active context check if this activeId is active
    // 3. else use opposite of active status
    let onClick
    if (action) onClick = action === 'activate' ? activate : deactivate
    else if (activeId) onClick = activeId === active ? deactivate : activate
    else onClick = active ? deactivate : activate

    return element({
      as,
      type,
      ...computeARIA({
        active,
        activeId,
        guid,
        type: 'action',
        aria,
      }),
      'componentCx': [
        `${baseCx}-${variant}`,
        {
          // For compound-active contexts add an active class if activeIds match
          // (eg in tabs show which tab is selected)
          active: activeId && active === activeId,
        },
      ],
      onClick,
      // For compound-active contexts, the value attr is to expose the activeId
      'data-active-id': activeId,
      /* inputs cannot have children */
      'children':
        as === 'input' ? null : (
          <>
            {children}
            {decoration}
          </>
        ),
      // Pass through props rest last to allow any instance overrides
      ...rest,
    })
  }
  ActiveAction.displayName = displayName
  return ActiveAction
}
