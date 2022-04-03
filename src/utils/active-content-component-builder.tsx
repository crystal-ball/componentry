import React, { useContext } from 'react'
import { type Components, useCtxProps } from '../components/Provider/Provider'
import { useVisible } from '../hooks'
import { ActiveCtx } from './active-container-component-builder'
import { type ARIAControls, computeARIA } from './aria'
import { type ActiveContentBaseProps } from './base-types'
import { element } from './element-creator'

interface ActiveContentBuilder {
  /** Map of aria attributes to render with component */
  aria?: ARIAControls
  defaultAs?: React.ElementType
  defaultRenderArrow?: boolean
}

/**
 * Factory returns custom `<Content />` components defined by the options.
 */
export function activeContentBuilder<TProps extends ActiveContentBaseProps>(
  displayName: keyof Components,
  { aria, defaultAs }: ActiveContentBuilder,
): React.FC<TProps> {
  function ActiveContent(props: TProps) {
    const { guid, ...activeCtx } = useContext(ActiveCtx)
    const {
      active: _active,
      activeId,
      mounted = 'visible',
      ...rest
    } = {
      ...useCtxProps(displayName),
      ...activeCtx,
      ...props,
    }

    const { active, visible } = useVisible(_active)

    if (!active && mounted === 'visible') return null

    return element({
      as: defaultAs,
      active: visible,
      componentCx: `C9Y-${displayName}`,
      ...computeARIA({
        active,
        activeId,
        aria,
        guid,
        type: 'content',
      }),
      ...rest,
    })
  }
  ActiveContent.displayName = displayName
  return ActiveContent
}
