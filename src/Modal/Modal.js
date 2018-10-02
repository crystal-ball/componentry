// @flow
import React, { Component, Fragment, createContext, type Node } from 'react'
import classNames from 'classnames'
import nanoid from 'nanoid'
import elem from '../elem-factory'
import withActive from '../withActive'
import withVisible from '../withVisible'
import withTheme from '../withTheme'

const ModalContext = createContext()

type Props = {
  active: boolean,
  children?: Node,
  deactivate: Function,
  size?: 'sm' | 'lg',
  visible?: boolean,
}

class Modal extends Component<Props> {
  /**
   * The Modal.Header close button is not shown by default, pass close to show a
   * Close component with deactivate. This is for 'standard' usage only, for custom
   * requirements, use a custom close setup.
   */
  static Header = withTheme(
    'ModalHeader',
    ({ children, deactivate, Close, ...props }) => (
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
    ),
  )

  static Title = withTheme('ModalTitle', props => (
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

  static Body = withTheme('ModalBody', props => elem({ classes: 'modal-body', ...props }))

  static Footer = withTheme('ModalFooter', props =>
    elem({ classes: 'modal-footer', ...props }),
  )

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
   *
   * ℹ️ NOTE: this needs to remain in this component so that a Modal can be used
   * outside of an Active container.
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

  // Render
  // ---------------------------------------------------------------------------
  render() {
    const { active, children, deactivate, size, visible }: Props = this.props

    return (
      <ModalContext.Provider value={{ deactivate, guid: this.guid }}>
        <Fragment>
          <div
            onClick={deactivate}
            className={classNames('modal', 'fade', { show: visible })}
            aria-hidden={active ? 'false' : 'true'}
            aria-labelledby={`${this.guid}`}
            role="presentation"
            tabIndex="-1"
          >
            {/* ℹ️ Stop propogation of clicks inside modal or they will trigger
            the modal background deactivate handler */}
            {/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */}
            {/* eslint-disable jsx-a11y/click-events-have-key-events */}
            <div
              onClick={evt => evt.stopPropagation()}
              className={classNames('modal-dialog', { [`modal-${size}`]: size })}
              role="dialog"
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

export default withActive(withVisible(withTheme('Modal', Modal)))
