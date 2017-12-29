// @flow
import React, { Component } from 'react'
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
 * - Close on escape** - All toggle items!
 * - Auto focus on open
 * - Animated open/close
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

  // Render
  // ---------------------------------------------------------------------------
  render() {
    const THEME = this.context.THEME || {}
    const componentCtx = THEME.Modal || {}
    const { active, ariaTitle, children, deactivate, size, visible }: Props = {
      ...componentCtx,
      ...this.props,
    }

    return (
      <div
        aria-hidden={active ? 'false' : 'true'}
        aria-labelledby={`${this.guid}`}
        className={classNames('modal', 'fade', { show: visible })}
        role="dialog"
        tabIndex="-1"
      >
        {/* See SCSS file for explanation on backdrop markdown order/position */}
        <div
          aria-hidden={active ? 'false' : 'true'}
          className={classNames('modal-backdrop', 'fade', { show: visible })}
          onClick={deactivate}
          onKeyPress={deactivate}
          role="presentation"
        />
        <div
          className={classNames('modal-dialog', { [`modal-${size}`]: size })}
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
    )
  }
}
Modal.displayName = 'Modal'

export default withActive({ transitionState: true })(Modal)
