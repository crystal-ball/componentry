import React, { Component } from 'react'
import { func, string } from 'prop-types'
import { Button, Icon } from 'componentry'
import classNames from 'classnames'

import copyToClipboard from 'utils/copy-to-clipboard'

import { component } from './click-to-copy.scss'

export default class ClickToCopy extends Component {
  static propTypes = {
    copyText: string.isRequired,
    className: string,
    render: func,
  }

  static defaultProps = {
    className: '',
    render: null,
  }

  state = {
    copied: false,
  }

  copy = () => {
    const { copyText } = this.props

    const copied = copyToClipboard(copyText)
    this.setState({ copied }, () => {
      setTimeout(() => {
        this.setState({ copied: false })
      }, 1000)
    })
  }

  render() {
    const { className, render } = this.props
    const { copied } = this.state

    const icons = (
      <span className="icons">
        <Icon id="copy" />
        <Icon id="copied" className={classNames({ active: copied })} />
      </span>
    )

    return (
      <Button onClick={this.copy} link className={classNames(component, className)}>
        {render ? render(icons) : icons}
      </Button>
    )
  }
}
