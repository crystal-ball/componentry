// @flow
import { Component } from 'react'
import type { Node } from 'react'
import { withRouter } from 'react-router'

type Props = {
  children?: Node,
  location: {}
}

/**
 * Component that should be included only once per app. It restores scroll position
 * to the top of the page anytime the location changes.
 * See: https://reacttraining.com/react-router/web/guides/scroll-restoration
 */
class ScrollToTop extends Component<Props> {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return this.props.children || null
  }
}

export default withRouter(ScrollToTop)
