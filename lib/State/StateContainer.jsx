import React, { Component } from 'react'
import { shape, string } from 'prop-types'
import classNames from 'classnames'

import elementFactory from '../utils/element-factory'
import cleanProps from '../utils/clean-props'

const Container = elementFactory()

export default class State extends Component {
  static propTypes = {
    className: string,
    state: shape({
      type: string.isRequired
    }).isRequired
  }

  static defaultProps = {
    className: ''
  }

  render() {
    const { className, state, ...rest } = this.props
    // Remove user passed props that are not DOM attrs
    const dom = cleanProps(rest, [
      'active',
      'onActivate',
      'onActivated',
      'onDeactivate',
      'onDeactivated'
    ])

    return <Container className={classNames(state.type, className)} {...dom} />
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
