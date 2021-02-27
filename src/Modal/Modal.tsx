/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { createContext, useContext, useRef } from 'react'
import cx from 'classnames'
import { nanoid } from 'nanoid'

import { closeBase } from '../Close/Close'
import { useTheme } from '../Theme/Theme'
import { useActive, useActiveSrollReset, useNoScroll, useVisible } from '../hooks'
import { ComponentBaseProps } from '../utils/types'
import { element } from '../utils/element-creator'
import { staticComponent } from '../utils/static-component-builder'

const ModalCtx = createContext<{
  active: string | boolean
  deactivate: (event: React.MouseEvent<HTMLButtonElement>) => void
  guid: string
}>(null)

export interface ModalProps extends ComponentBaseProps<'div'> {
  align?: 'center'

  scroll?: 'body' | 'container' | 'overlay'

  size?: 'sm' | 'lg'

  transitionDuration?: number
}

export interface ModalBodyProps extends ComponentBaseProps<'div'> {}

export interface ModalCloseProps extends ComponentBaseProps<'button'> {}

export interface ModalFooterProps extends ComponentBaseProps<'div'> {}

export interface ModalHeaderProps extends ComponentBaseProps<'div'> {
  close?: (evt: React.MouseEvent<HTMLButtonElement>) => void
}

export interface ModalTitleProps extends ComponentBaseProps<'h2'> {
  id?: string
}

export interface Modal {
  (props: ModalProps): React.ReactElement
  displayName: 'Modal'
  /**
   * [Modal body component 📝](https://componentry.design/components/modal)
   */
  Body: React.FC<ModalBodyProps>
  /**
   * [Modal close component 📝](https://componentry.design/components/modal)
   */
  Close: React.FC<ModalCloseProps>
  /**
   * [Modal footer component 📝](https://componentry.design/components/modal)
   */
  Footer: React.FC<ModalFooterProps>
  /**
   * [Modal header component 📝](https://componentry.design/components/modal)
   */
  Header: React.FC<ModalHeaderProps>
  /**
   * [Modal title component 📝](https://componentry.design/components/modal)
   */
  Title: React.FC<ModalTitleProps>
}

/**
 * [Modal component 📝](https://componentry.design/components/modal)
 */
export const Modal = ((props: ModalProps): JSX.Element => {
  // Guid instance property will be uniquely assigned once for each modal
  // instance, this unique id is then passed to all children through context
  // where it can be used to wire together title aria attributes
  const { current: guid } = useRef(nanoid())

  const {
    active: propsActive,
    align,
    children,
    deactivate,
    scroll = 'overlay',
    size,
    transitionDuration,
    ...rest
  } = {
    ...useTheme<ModalProps>('Modal'),
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
      {element('ModalOverlay', {
        'onClick': deactivate,
        'componentCx': ['fade', `modal-${scroll}-scroll`, { visible }],
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
              onClick={(evt) => {
                evt.stopPropagation()
              }}
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
}) as Modal
Modal.displayName = 'Modal'

// --------------------------------------------------------
// Close

Modal.Close = staticComponent('ModalClose', closeBase)

// --------------------------------------------------------
// Header

Modal.Header = function ModalHeader(props: ModalHeaderProps) {
  const { children, close, ...rest } = {
    ...useTheme<ModalHeaderProps>('ModalHeader'),
    ...props,
  }
  const { deactivate } = useContext(ModalCtx)

  return element('ModalHeader', {
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

// --------------------------------------------------------
// Title

Modal.Title = function ModalTitle(props) {
  return element('ModalTitle', {
    as: 'h2',
    id: useContext(ModalCtx).guid,
    ...useTheme('Modaltitle'),
    ...props,
  })
}
Modal.Title.displayName = 'ModalTitle'

// --------------------------------------------------------
// Body

Modal.Body = function ModalBody(props) {
  const bodyRef = useRef(null)
  useActiveSrollReset(useContext(ModalCtx).active, bodyRef)

  return element('ModalBody', {
    ref: bodyRef,
    ...useTheme('ModalBody'),
    ...props,
  })
}
Modal.Body.displayName = 'ModalBody'

// --------------------------------------------------------
// Footer

Modal.Footer = staticComponent<ModalFooterProps>('ModalFooter', {
  componentCx: 'modal-footer',
})
