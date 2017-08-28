import React, { Component } from 'react'
import classNames from 'classnames'

import elementFactory from '../utils/element-factory'
import cleanProps from '../utils/clean-props'

const Container = elementFactory()

export default class State extends Component {
  /**
   * Internal cache for width of tooltip content. Set after calculating content
   * width and reused on subsequent renders if content text has not changed.
   */
  contentWidth = null

  /**
   * Internal cache for tooltip content. Used to check if the content has changed
   * between showings of tooltip.
   */
  content = null

  render() {
    let { className, state, ...rest } = this.props // eslint-disable-line
    const { type } = state

    // TODO: always use just 'type'
    className = classNames(className, {
      [type]: type === 'dropdown',
      [`${type}-container`]: type !== 'dropdown'
    })

    // Remove passed props that are not DOM attrs
    const dom = cleanProps(rest, [
      'active',
      'onActivate',
      'onActivated',
      'onDeactivate',
      'onDeactivated'
    ])

    return <Container className={className} {...dom} />
  }
}
