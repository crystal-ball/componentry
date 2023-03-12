import React, { useContext } from 'react'
import { ActiveContentBaseProps } from '../components/Active/active-types'
import { useThemeProps } from '../components/Provider/Provider'
import { ComponentName } from '../config/config'
import { useVisible } from '../hooks'
import { ARIAControls, computeARIA } from './aria'
import { ActiveCtx } from './create-active-container-component'
import { createElement } from './create-element'

interface createActiveContent {
  /** Map of aria attributes to render with component */
  aria?: ARIAControls
  defaultAs?: React.ElementType
  defaultRenderArrow?: boolean
}

/**
 * Factory returns custom `<Content />` components defined by the options.
 */
export function createActiveContent<
  Name extends ComponentName,
  Props extends ActiveContentBaseProps,
>(displayName: Name, { aria, defaultAs }: createActiveContent): React.FC<Props> {
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

    return createElement({
      as: defaultAs,
      active: visible,
      componentClassName: `C9Y-${displayName}`,
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
