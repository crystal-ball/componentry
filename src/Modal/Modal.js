// @flow
import React, { Component, Fragment, createContext, type Node } from 'react'
import classNames from 'classnames'
import nanoid from 'nanoid'
import elem from '../elem-factory'
import withActive from '../withActive'
import withTheme from '../withTheme'

const ModalContext = createContext()

/**
 * The Modal.Header close button is not shown by default, pass close to show a
 * Close component with deactivate. This is for 'standard' usage only, for custom
 * requirements, use a custom close setup.
 */
const Header = withTheme('ModalHeader', ({ children, deactivate, Close, ...props }) => (
  <ModalContext.Consumer>
    {modalCtx =>
      elem({
        classes: 'modal-header',
        children: (
          <Fragment>
            {children}
            {/* $FlowIgnore */}
            {Close && <Close onClick={modalCtx.deactivate} />}
          </Fragment>
        ),
        ...props,
      })
    }
  </ModalContext.Consumer>
))

const Title = withTheme('ModalTitle', props => (
  <ModalContext.Consumer>
    {modalCtx =>
      elem({
        defaultAs: 'h4',
        // $FlowIgnore
        id: modalCtx.guid,
        classes: 'modal-title',
        ...props,
      })
    }
  </ModalContext.Consumer>
))

const Body = withTheme('ModalBody', props => elem({ classes: 'modal-body', ...props }))

const Footer = withTheme('ModalFooter', props =>
  elem({ classes: 'modal-footer', ...props }),
)

type Props = {
  active: boolean,
  children?: Node,
  deactivate: Function,
  size?: 'small' | 'large',
  visible?: boolean,
}

class Modal extends Component<Props> {
  /**
   * Guid instance property will be uniquely assigned once for each modal instance,
   * this unique id is then passed to all children through context where it can be
   * used to wire together title aria attributes
   */
  guid = nanoid()

  // Hooks
  // ---------------------------------------------------------------------------

  /**
   * Disable scrolling on the body when the modal is open to allow long modals to
   * scroll within the `.modal` container.
   */
  componentWillReceiveProps(nextProps) {
    const { active } = this.props
    const { body } = window.document
    if (!active && nextProps.active) body.classList.add('no-scroll')
    if (active && !nextProps.active) body.classList.remove('no-scroll')
  }

  /**
   * Remove body scroll disabler in case modal is unmounted without closing
   */
  componentWillUnmount() {
    window.document.body.classList.remove('no-scroll')
  }

  // Methods
  // ---------------------------------------------------------------------------

  /**
   * The `.modal` container has a higher z-index than the `.modal-backdrop`, and
   * receives any clicks targeted at the backdrop. In order to close the modal on
   * any click of the backdrop, this handler checks if any click within the modal is
   * on the `.modal`, if the click is inside of the modal *CONTENT*, then the target
   * will be that content. If the target is outside of the modal content, the target
   * will be the `.modal` container and we know the user is clicking outside the
   * modal to close it.
   */
  handleModalClick = evt => {
    const { target } = evt

    if (target.classList && target.classList.contains('modal')) {
      this.props.deactivate(evt)
    }
  }

  // Render
  // ---------------------------------------------------------------------------
  render() {
    const { active, children, deactivate, size, visible }: Props = this.props

    return (
      <ModalContext.Provider value={{ deactivate, guid: this.guid }}>
        <Fragment>
          {/* ℹ️ Bootstrap modal layout uses the .modal container in such a way that
        it receives all click events outside the modal content. This requires adding
        the modal click handler. This handler is _just_ for mouse users, so we are
        disabling the aria linters for adding mouse events to a dialog. Keyboard
        users can close the dialog with an esc keypress */}
          {/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */}
          {/* eslint-disable jsx-a11y/click-events-have-key-events */}
          <div
            aria-hidden={active ? 'false' : 'true'}
            aria-labelledby={`${this.guid}`}
            className={classNames('modal', 'fade', { show: visible })}
            role="dialog"
            tabIndex="-1"
            onClick={this.handleModalClick}
          >
            <div
              className={classNames('modal-dialog', {
                'modal-sm': size === 'small',
                'modal-lg': size === 'large',
              })}
              role="document"
            >
              <div className="modal-content">{children}</div>
            </div>
          </div>
          <div
            aria-hidden={active ? 'false' : 'true'}
            className={classNames('modal-backdrop', 'fade', { show: visible })}
            role="presentation"
          />
        </Fragment>
      </ModalContext.Provider>
    )
  }
}

const ThemedModal = withActive(withTheme('Modal', Modal), 'transition')
ThemedModal.Header = Header
ThemedModal.Title = Title
ThemedModal.Body = Body
ThemedModal.Footer = Footer

export default ThemedModal
