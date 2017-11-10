// @flow
import React, { Component } from 'react'
import type { Node } from 'react'

type Props = {
  children: Node,
  language: string
}

export default class PrismHighlighter extends Component<Props> {
  pre: ?HTMLElement

  componentDidMount() {
    window.Prism.highlightElement(this.pre)
  }

  componentDidUpdate() {
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
