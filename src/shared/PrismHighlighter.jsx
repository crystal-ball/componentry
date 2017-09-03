import React, { Component } from 'react'
import { node, string } from 'prop-types'

export default class PrismHighlighter extends Component {
  static propTypes = {
    children: node,
    language: string
  }

  componentDidMount() {
    window.Prism.highlightElement(this.pre)
  }

  render() {
    const { children, language } = this.props
    return (
      <pre>
        <code
          className={`language-${language}`}
          ref={pre => {
            this.pre = pre
          }}
        >
          {children}
        </code>
      </pre>
    )
  }
}
