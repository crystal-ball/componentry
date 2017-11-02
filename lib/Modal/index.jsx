// @flow
import React, { Component } from 'react'
import type { Node } from 'react'
import { shape, string } from 'prop-types'
import classNames from 'classnames'
import nanoid from 'nanoid'

import { withActive } from '../State'
import elementFactory from '../component-factories/element-factory'
import cleanProps from '../utils/clean-props'

// TODO: This is here b/c we're using withActive, so the active props need to be
// cleaned before spreading onto container element, and elementFactory doesn't need
// that...
type TitleProps = {
  children: Node,
  className: string
}

const ModalTitle = ({ children, className, ...rest }: TitleProps) => (
  <h3
    className={classNames('modal-title', className)}
    {...cleanProps(rest, ['active', 'activate', 'deactivate', 'guid'])}
  >
    {children}
  </h3>
)
ModalTitle.displayName = 'ModalTitle'

type Props = {
  active: boolean,
  ariaTitle?: string,
  children?: Node,
  onDeactivate?: Function,
  size?: 'small' | 'large'
}

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
 */
export default class Modal extends Component<Props> {
  static Header = elementFactory({ classes: 'modal-header', name: 'ModalHeader' })
  static Body = elementFactory({ classes: 'modal-body', name: 'ModalBody' })
  static Footer = elementFactory({ classes: 'modal-footer', name: 'ModalFooter' })
  static Title = withActive({ id: true, subscribe: false })(ModalTitle)

  // Context can never change! Namespace is a constant that allows reference to
  // mutated properties
  static childContextTypes = {
    COMPONENTRY_ACTIVE: shape({ guid: string })
  }
  getChildContext = () => ({ COMPONENTRY_ACTIVE: { guid: this.guid } })

  /**
   * Guid instance property will be uniquely assigned once for each modal instance,
   * this unique id is then passed to all children through context where it can be
   * used to wire together title aria attributes
   */
  guid = nanoid()

  // Render
  // ---------------------------------------------------------------------------
  render() {
    const { active, ariaTitle, children, onDeactivate, size } = this.props
    // $FlowFixMe
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
          onKeyPress={onDeactivate}
          role="presentation"
        />
        <div className={dialogClassNames} role="document">
          <div className="modal-content">
            {/* A++ Accessibility title for modals without visual title */}
            {ariaTitle && (
              <div id={this.guid} className="sr-only">
                {ariaTitle}
              </div>
            )}
            {children}
          </div>
        </div>
      </div>
    )
  }
}
