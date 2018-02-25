// @flow
import React, { Component, Fragment } from 'react'
import type { Node } from 'react'
import { object, shape, string } from 'prop-types'
import classNames from 'classnames'
import nanoid from 'nanoid'

import Title from './Title'
import withActive from '../withActive/withActive'
import elementFactory from '../component-factories/element-factory'

/* eslint-disable react/no-unused-prop-types */
type Props = {
  active: boolean,
  ariaTitle?: string,
  children?: Node,
  deactivate?: Function,
  size?: 'small' | 'large',
  visible?: boolean,
}

/**
 * TODO:
 * - Close button auto-wiring of aria-label=close && deactivate
 * - Auto focus on open
 * - Docs on passing flex align-items-center/start to header for close icon alignment
 * - Add close button when `ariaTitle is used
 *
 * ## Notes:
 * See MDN [Using the dialog role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_dialog_role)
 */
class Modal extends Component<Props> {
  static Header = elementFactory({ classes: 'modal-header', name: 'ModalHeader' })
  static Body = elementFactory({ classes: 'modal-body', name: 'ModalBody' })
  static Footer = elementFactory({ classes: 'modal-footer', name: 'ModalFooter' })
  static Title = Title

  static contextTypes = { THEME: shape({ Alert: object }) }

  // Set modal guid on context for Title
  static childContextTypes = { guid: string }
  getChildContext = () => ({ guid: this.guid })

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
    if (!active && nextProps.active) document.body.classList.add('no-scroll')
    if (active && !nextProps.active) document.body.classList.remove('no-scroll')
  }

  /**
   * Remove body scroll disabler in case modal is unmounted without closing
   */
  componentWillUnmount() {
    document.body.classList.remove('no-scroll')
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
    const THEME = this.context.THEME || {}
    const componentCtx = THEME.Modal || {}
    const { active, ariaTitle, children, size, visible }: Props = {
      ...componentCtx,
      ...this.props,
    }

    return (
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
            <div className="modal-content">
              {/* A++ Accessibility title for modals without visual title */}
              {ariaTitle && (
                <div id={this.guid} className="sr-only">
                  {ariaTitle}
                  {/* TODO: Include close button for aria title modals */}
                </div>
              )}
              {children}
            </div>
          </div>
        </div>
        <div
          aria-hidden={active ? 'false' : 'true'}
          className={classNames('modal-backdrop', 'fade', { show: visible })}
          role="presentation"
        />
      </Fragment>
    )
  }
}
Modal.displayName = 'Modal'

export default withActive({ transitionState: true })(Modal)
