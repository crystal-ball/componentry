import React, { createContext, useContext, useRef } from 'react'
import classNames from 'classnames'
import nanoid from 'nanoid'
import elem from '../elem-factory'
import { closeBase } from '../Close/Close'
import { useActive, useActiveSrollReset, useNoScroll, useVisible } from '../hooks'
import { useTheme } from '../Theme/Theme'

const ModalCtx = createContext()

/**
 * Modal component
 * TODO: trap tab focus within modal on activation
 */
export default function Modal(props) {
  // Guid instance property will be uniquely assigned once for each modal
  // instance, this unique id is then passed to all children through context
  // where it can be used to wire together title aria attributes
  const { current: guid } = useRef(process.env.NODE_ENV === 'test' ? 'guid' : nanoid())

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
      {elem({
        onClick: deactivate,
        componentClassNames: classNames(
          'modal-overlay',
          'fade',
          `modal-${scroll}-scroll`,
          { visible },
        ),
        'aria-hidden': String(!active),
        'aria-labelledby': guid,
        role: 'presentation',
        tabIndex: '-1',
        children: (
          /* eslint-disable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events */
          <div className='modal-positioner' ref={containerRef}>
            {/* ℹ️ Stop propogation of clicks inside modal or they will trigger the modal background deactivate handler */}
            <div
              className={classNames('modal-container', align, {
                visible,
                [`modal-${size}`]: size,
              })}
              ref={contentRef}
              onClick={evt => evt.stopPropagation()}
              role='dialog'
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
 * Modal themed close component
 */
Modal.Close = function ModalClose(props) {
  return elem({
    ...closeBase,
    ...useTheme('ModalClose'),
    ...props,
  })
}
Modal.Close.displayName = 'ModalClose'

/**
 * Modal header close is a shorthand for enabling the default close button,
 * For custom close components, the componenent must be passed as a header child
 */
Modal.Header = function ModalHeader(props) {
  const { children, close, ...rest } = {
    ...useTheme('ModalHeader'),
    ...props,
  }

  return elem({
    componentClassNames: 'modal-header',
    children: (
      <>
        {children}
        {close && <Modal.Close onClick={useContext(ModalCtx).deactivate} />}
      </>
    ),
    ...rest,
  })
}
Modal.Header.displayName = 'ModalHeader'

Modal.Title = function ModalTitle(props) {
  return elem({
    as: 'h2',
    id: useContext(ModalCtx).guid,
    componentClassNames: 'modal-title',
    ...useTheme('Modaltitle'),
    ...props,
  })
}
Modal.Title.displayName = 'ModalTitle'

Modal.Body = function ModalBody(props) {
  const bodyRef = useRef(null)
  useActiveSrollReset(useContext(ModalCtx).active, bodyRef)

  return elem({
    ref: bodyRef,
    componentClassNames: 'modal-body',
    ...useTheme('ModalBody'),
    ...props,
  })
}
Modal.Body.displayName = 'ModalBody'

Modal.Footer = function ModalFooter(props) {
  return elem({
    componentClassNames: 'modal-footer',
    ...useTheme('ModalFooter'),
    ...props,
  })
}
Modal.Footer.displayName = 'ModalFooter'
