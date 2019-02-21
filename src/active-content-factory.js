import React from 'react'
import elem from './elem-factory'
import ariasComputer from './utils/arias'

// type Options = {
//   /** Arias to include for component */
//   arias: ComponentArias,
//   classes?: string,
//   /** Popper elements are tooltips and popovers, they include extra markup */
//   popper?: boolean,
// }

// type Props = {
//   children?: Node,
//   activeId?: string,
//   // withActive props
//   active: boolean,
//   guid: string,
// }

/**
 * Factory returns custom `<Content />` components defined by the options.
 */
export default (component, { arias, classes = '', popper = false } = {}) => {
  function ActiveContent({ active, children, guid, activeId = '', ...rest }) {
    // Create component content (return optionally wraps content in a width busting
    // container)
    const ComponentContent = elem({
      ...ariasComputer({
        active,
        activeId,
        guid,
        type: 'content',
        arias,
      }),
      classes,
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
      <div className={`${classes}-container`}>{ComponentContent}</div>
    ) : (
      ComponentContent
    )
  }
  ActiveContent.displayName = component
  return ActiveContent
}
