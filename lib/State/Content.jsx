import React from 'react'
import { element, func, node, oneOfType, string } from 'prop-types'

import withActive from '../withActive'

Content.propTypes = {
  As: oneOfType([element, func, node]),
  children: node.isRequired,
  className: string
}

Content.defaultProps = {
  As: 'div',
  className: ''
}

// eslint-disable-next-line
function Content({ As, children, state, ...rest }) {
  return (
    <As {...rest}>
      {children}
    </As>
  )
}

export default withActive({ id: true, hidden: true })(Content)
