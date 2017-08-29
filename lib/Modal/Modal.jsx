import React, { Component } from 'react'
import { bool, func, oneOf, shape, string, node } from 'prop-types'
import classNames from 'classnames'
import nanoid from 'nanoid'

import { withActive } from '../State'
import elementFactory from '../utils/element-factory'

/**
 * TODO:
 * - Close button auto-wiring of aria-label=close && onDeactivate
 * - Close on escape** - All toggle items!
 * - Auto focus on open
 * - Animated open/close
 * - Docs on passing flex align-items-center/start to header for close icon alignment
 * - Design on close button for modals using an `ariaTitle`?
 *
 * ## Notes:
 * See MDN [Using the dialog role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_dialog_role)
 * @class Modal
 * @extends {Component}
 */
export default class Modal extends Component {
  static Header = elementFactory({ className: 'modal-header' })
  static Body = elementFactory({ className: 'modal-body' })
  static Footer = elementFactory({ className: 'modal-footer' })
  static Title = withActive({ id: true })(
    elementFactory({ className: 'modal-title', tagName: 'h3' })
  )

  static propTypes = {
    active: bool.isRequired,
    ariaTitle: string,
    children: node,
    onDeactivate: func,
    size: oneOf(['small', 'large', ''])
  }

  static defaultProps = {
    ariaTitle: '',
    children: null,
    onDeactivate: () => {},
    size: ''
  }

  static childContextTypes = { componentryArias: shape({ guid: string }) }

  getChildContext = () => ({ componentryArias: { guid: this.guid } })
  /**
   * Guid instance property will be uniquely assigned once for each modal instance,
   * this unique id is then passed to all children through context where it can be
   * used to wire together title aria attributes
   */
  guid = nanoid()

  render() {
    const { active, ariaTitle, children, onDeactivate, size } = this.props
    const dialogClassNames = classNames('modal-dialog', { [`modal-${size}`]: size })

    return (
      <div
        aria-hidden={active ? 'false' : 'true'}
        aria-labelledby={`${this.guid}`}
        className="modal fade"
        role="dialog"
        tabIndex="-1"
      >
        <div
          aria-hidden={active ? 'false' : 'true'}
          className="modal-backdrop fade"
          onClick={onDeactivate}
          role="presentation"
        />
        <div className={dialogClassNames} role="document">
          <div className="modal-content">
            {/* A++ Accessibility title for modals without visual title */}
            {ariaTitle &&
              <div id={this.guid} className="sr-only">
                {ariaTitle}
              </div>}
            {children}
          </div>
        </div>
      </div>
    )
  }
}
