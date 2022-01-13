import React, { useContext } from 'react'
import { useTheme } from '../components/Theme/Theme'
import { ActiveCtx } from './active-container-component-builder'
import { ARIAControls, computeARIA } from './aria'
import { ActiveContentBaseProps } from './types'
import { parseBaseCx } from './class-names'
import { element } from './element-creator'

interface ActiveContentBuilder {
  /** Map of aria attributes to render with component */
  aria?: ARIAControls
  /** Switch to include an absolute positioned wrapper for positioning+width styles */
  positioned?: boolean
}

/**
 * Factory returns custom `<Content />` components defined by the options.
 */
export function activeContentBuilder<TProps extends ActiveContentBaseProps>(
  displayName: string,
  { aria, positioned = false }: ActiveContentBuilder,
): React.FC<TProps> {
  const baseCx = parseBaseCx(displayName)

  function ActiveContent(props: TProps) {
    const { guid, ...activeCtx } = useContext(ActiveCtx)
    const {
      active,
      activeId,
      children,
      variant = `primary`,
      ...rest
    } = {
      ...useTheme<TProps>(displayName),
      ...activeCtx,
      ...props,
    }

    // Create component content (return optionally wraps content in a width busting
    // container)
    const content = element({
      ...computeARIA({
        active,
        activeId,
        guid,
        type: 'content',
        aria,
      }),
      componentCx: `${baseCx}-${variant}`,
      children: (
        <>
          {positioned && (
            <div className='tip-container'>
              <div className='tip' />
            </div>
          )}
          {children}
        </>
      ),
      ...rest,
    })

    // If the element is a popper, wrap it in a content container, this is used to
    // bust width of parent element
    return positioned ? <div className={`${baseCx}-container`}>{content}</div> : content
  }
  ActiveContent.displayName = displayName
  return ActiveContent
}
