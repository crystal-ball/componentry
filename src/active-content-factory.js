import React from 'react'
import elem from './elem-factory'
import ariasComputer from './utils/arias'
import { useActive } from './Active/useActive'
import { useTheme } from './Theme/Theme'

/**
 * Factory returns custom `<Content />` components defined by the options.
 */
export default (
  component,
  {
    // Map of aria attributes to render with component
    arias,
    // The base css class for this component
    baseClass = `${component}-content`,
    // The component name used for display and theme lookups
    name = `${component.slice(0, 1).toUpperCase()}${component.slice(1)}Trigger}`,
    // Switch to include a content wrapper for positioning+width styles
    popper = false,
  } = {},
) => {
  function ActiveContent(props) {
    const { active, activeId, children, guid, ...rest } = {
      ...useTheme(name),
      ...useActive(),
      ...props,
    }

    // Create component content (return optionally wraps content in a width busting
    // container)
    const content = elem({
      ...ariasComputer({
        active,
        activeId,
        guid,
        type: 'content',
        arias,
      }),
      classes: baseClass,
      children: (
        <>
          {popper && (
            <div className="tip-container">
              <div className="tip" />
            </div>
          )}
          {children}
        </>
      ),
      ...rest,
    })

    // If the element is a popper, wrap it in a content container, this is used to
    // bust width of parent element
    return popper ? (
      // This className works right now b/c we're only passing a single className
      // in classes, but this is fragile... would be nice to be more explicity but
      // not add in unnecessary factory config code.
      <div className={`${component}-container`}>{content}</div>
    ) : (
      content
    )
  }
  ActiveContent.displayName = name
  return ActiveContent
}
