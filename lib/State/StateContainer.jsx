import { Component } from 'react'
import { shape, string } from 'prop-types'
import classNames from 'classnames'

import { renderContainer } from '../utils/element-factory'
import cleanProps from '../utils/clean-props'

export default class State extends Component {
  static propTypes = {
    className: string,
    /** Active data from context */
    activeContext: shape({
      /** The type of element */
      element: string.isRequired
    }).isRequired
  }

  render() {
    const { className, activeContext, ...rest } = this.props
    // Remove user passed props that are not DOM attrs
    const dom = cleanProps(rest, [
      'active',
      'onActivate',
      'onActivated',
      'onDeactivate',
      'onDeactivated'
    ])

    return renderContainer({
      className: classNames(activeContext.element, className),
      ...dom
    })
  }
}

/* <As className={className} {...dom}>
  {Trigger &&
    <ToggleTrigger
      active={active}
      arias={triggerArias}
      elementType={elementType}
      guid={guid}
      toggleActive={toggleActive}
    >
      {Trigger}
    </ToggleTrigger>}
  {this.renderChildren(children, active)}
  {Content &&
    <ToggleContent
      active={active}
      arias={contentArias}
      elementType={elementType}
      guid={guid}
    >
      {Content}
    </ToggleContent>}
</As> */
