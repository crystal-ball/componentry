import React, { useContext } from 'react'
import { useThemeProps } from '../components/Provider/Provider'
import { ComponentName } from '../config/config'
import { useVisible } from '../hooks'
import { ActiveCtx } from './active-container-component-builder'
import { ARIAControls, computeARIA } from './aria'
import { ActiveContentBaseProps } from './base-types'
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
export function activeContentBuilder<
  Name extends ComponentName,
  Props extends ActiveContentBaseProps,
>(displayName: Name, { aria, defaultAs }: ActiveContentBuilder): React.FC<Props> {
  function ActiveContent(props: Props) {
    const { guid, ...activeCtx } = useContext(ActiveCtx)
    const {
      active: _active,
      activeId,
      mounted = 'visible',
      ...rest
    } = {
      ...useThemeProps(displayName),
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
