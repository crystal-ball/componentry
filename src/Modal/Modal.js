import React, { createContext, useContext, useRef } from 'react'
import cx from 'classnames'
import { nanoid } from 'nanoid'

import { closeBase } from '../Close/Close'
import { useTheme } from '../Theme/Theme'
import element from '../element'
import { useActive, useActiveSrollReset, useNoScroll, useVisible } from '../hooks'
import staticComponent from '../factories/static-component'

const ModalCtx = createContext({})

/**
 * [Modal component 📝](https://componentry.design/components/modal)
 */
export default function Modal(props) {
  // Guid instance property will be uniquely assigned once for each modal
  // instance, this unique id is then passed to all children through context
  // where it can be used to wire together title aria attributes
  const { current: guid } = useRef(nanoid())

  const {
    active: propsActive,
    align,
    children,
    deactivate,
    scroll = 'overlay', // overlay, container, body
    size,
    transitionDuration,
    ...rest
  } = {
    ...useTheme('Modal'),
    ...useActive(),
    ...props,
  }

  // Generate timed active/visible values for css property animations
  const { active, visible } = useVisible(propsActive, transitionDuration)

  // Disable scrolling on the body when the modal is open to allow long modals
  // to scroll within the `.modal` container.
  useNoScroll(active)

  // Handle resetting scrolled modal content on modal open
  const containerRef = useRef(null)
  const contentRef = useRef(null)
  useActiveSrollReset(active, containerRef)
  useActiveSrollReset(active, contentRef)

  // Modal elements structure
  // div.modal-overlay       - Modal overlay background with close handler
  //   div.modal-positioner  - Manages positioning of modal container
  //     div.modal-container - Contains the modal header,body,footer elements
  return (
    <ModalCtx.Provider value={{ active, deactivate, guid }}>
      {element({
        'onClick': deactivate,
        'componentCx': [
          'modal-overlay',
          'fade',
          `modal-${scroll}-scroll`,
          {
            visible,
          },
        ],
        'aria-hidden': String(!active),
        'aria-labelledby': guid,
        'role': 'presentation',
        'tabIndex': '-1',
        'children': (
          /* eslint-disable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events */
          <div ref={containerRef} className='modal-positioner'>
            {/* ℹ️ Stop propogation of clicks inside modal or they will trigger the modal background deactivate handler */}
            <div
              ref={contentRef}
              className={cx('modal-container', align, {
                visible,
                [`modal-${size}`]: size,
              })}
              role='dialog'
              onClick={(evt) => evt.stopPropagation()}
            >
              {children}
            </div>
          </div>
          /* eslint-enable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events */
        ),
        ...rest,
      })}
    </ModalCtx.Provider>
  )
}
Modal.displayName = 'Modal'

/**
 * [Modal close component 📝](https://componentry.design/components/modal)
 */
Modal.Close = staticComponent('ModalClose', closeBase)

/**
 * [Modal header component 📝](https://componentry.design/components/modal)
 */
Modal.Header = function ModalHeader(props) {
  const { children, close, ...rest } = {
    ...useTheme('ModalHeader'),
    ...props,
  }
  const { deactivate } = useContext(ModalCtx)

  return element({
    componentCx: 'modal-header',
    children: (
      <>
        {children}
        {/* Modal header close is a shorthand for enabling the default close button,
        For custom close components, the componenent must be passed as a header child */}
        {close && <Modal.Close onClick={deactivate} />}
      </>
    ),
    ...rest,
  })
}
Modal.Header.displayName = 'ModalHeader'

/**
 * [Modal title component 📝](https://componentry.design/components/modal)
 */
Modal.Title = function ModalTitle(props) {
  return element({
    as: 'h2',
    id: useContext(ModalCtx).guid,
    componentCx: 'modal-title',
    ...useTheme('Modaltitle'),
    ...props,
  })
}
Modal.Title.displayName = 'ModalTitle'

/**
 * [Modal body component 📝](https://componentry.design/components/modal)
 */
Modal.Body = function ModalBody(props) {
  const bodyRef = useRef(null)
  useActiveSrollReset(useContext(ModalCtx).active, bodyRef)

  return element({
    ref: bodyRef,
    componentCx: 'modal-body',
    ...useTheme('ModalBody'),
    ...props,
  })
}
Modal.Body.displayName = 'ModalBody'

/**
 * [Modal footer component 📝](https://componentry.design/components/modal)
 */
Modal.Footer = staticComponent('ModalFooter', {
  componentCx: 'modal-footer',
})
