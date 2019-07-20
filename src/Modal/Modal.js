import React, { createContext, useContext, useRef } from 'react'
import classNames from 'classnames'
import nanoid from 'nanoid'
import elem from '../elem-factory'
import Close from '../Close/Close'
import { useNoScroll } from '../hooks'
import { useTheme } from '../Theme/Theme'
import { useActive, useVisible } from '../Active/useActive'

const ModalCtx = createContext()

export default function Modal(props) {
  // Guid instance property will be uniquely assigned once for each modal
  // instance, this unique id is then passed to all children through context
  // where it can be used to wire together title aria attributes
  const guid = useRef(nanoid())

  const { active, children, deactivate, size } = {
    ...useTheme('Modal'),
    ...useActive(),
    ...props,
  }

  const { active: _active, visible } = useVisible(active)

  // Disable scrolling on the body when the modal is open to allow long modals
  // to scroll within the `.modal` container.
  useNoScroll(active)

  return (
    <ModalCtx.Provider value={{ deactivate, guid }}>
      <>
        <div
          onClick={deactivate}
          className={classNames('modal', 'fade', { show: visible })}
          aria-hidden={_active ? 'false' : 'true'}
          aria-labelledby={`${guid}`}
          role='presentation'
          tabIndex='-1'
        >
          {/* ℹ️ Stop propogation of clicks inside modal or they will trigger
            the modal background deactivate handler */}
          {/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */}
          {/* eslint-disable jsx-a11y/click-events-have-key-events */}
          <div
            onClick={evt => evt.stopPropagation()}
            className={classNames('modal-dialog', { [`modal-${size}`]: size })}
            role='dialog'
          >
            <div className='modal-content'>{children}</div>
          </div>
        </div>
        <div
          aria-hidden={_active ? 'false' : 'true'}
          className={classNames('modal-backdrop', 'fade', { show: visible })}
          role='presentation'
        />
      </>
    </ModalCtx.Provider>
  )
}

Modal.Close = Close

/**
 * The Modal.Header close button is not shown by default, pass close to show a
 * Close component with deactivate. This is for 'standard' usage only, for custom
 * requirements, use a custom close setup.
 */
Modal.Header = function ModalHeader(props) {
  const { children, close, ...rest } = {
    ...useTheme('ModalHeader'),
    ...props,
  }

  return elem({
    classes: 'modal-header',
    children: (
      <>
        {children}
        {close && <Modal.Close onClick={useContext(ModalCtx).deactivate} />}
      </>
    ),
    ...rest,
  })
}

Modal.Title = function ModalTitle(props) {
  return elem({
    defaultAs: 'h4',
    id: useContext(ModalCtx).guid,
    classes: 'modal-title',
    ...useTheme('Modaltitle'),
    ...props,
  })
}

Modal.Body = function ModalBody(props) {
  return elem({ classes: 'modal-body', ...useContext('ModalBody'), ...props })
}

Modal.Footer = function ModalFooter(props) {
  return elem({ classes: 'modal-footer', ...useContext('ModalFooter'), ...props })
}
