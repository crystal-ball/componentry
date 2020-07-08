import React, { useContext } from 'react'
import element from '../element'
import { elemArias } from '../utils/componentry'
import { useTheme } from '../Theme/Theme'
import { ActiveCtx } from './active-container-component'

/**
 * Factory returns custom `<Content />` components defined by the options.
 * @returns {import('react').FunctionComponent<any>}
 */
export default function ActiveContentFactory(
  name,
  {
    // Map of aria attributes to render with component
    arias,
    // The component name used for display and theme lookups
    displayName = `${name.slice(0, 1).toUpperCase()}${name.slice(1)}Content`,
    // Switch to include an absolute positioned wrapper for positioning+width styles
    positioned = false,
  } = {},
) {
  function ActiveContent(props) {
    const { active, activeId, children, guid, variant = `${name}-content`, ...rest } = {
      ...useTheme(displayName),
      ...useContext(ActiveCtx),
      ...props,
    }

    // Create component content (return optionally wraps content in a width busting
    // container)
    const content = element({
      ...elemArias({
        active,
        activeId,
        guid,
        type: 'content',
        arias,
      }),
      componentCx: variant,
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
    return positioned ? (
      // This className works right now b/c we're only passing a single className
      // in classes, but this is fragile... would be nice to be more explicity but
      // not add in unnecessary factory config code.
      <div className={`${name}-content-container`}>{content}</div>
    ) : (
      content
    )
  }
  ActiveContent.displayName = displayName
  return ActiveContent
}
