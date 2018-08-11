// @flow
import { createElement } from 'react'
import classnames from 'classnames'
import { type ElementProps } from '../component-factories/element'
import withTheme from '../withTheme/withTheme'

/**
 * Very simple, but this provides the ability to customize what element every
 * Anchor in an application renders, with the ability to override by instance,
 * and provides a className to target!
 */
const Anchor = ({ as, className, children, ...rest }: ElementProps) =>
  createElement(
    as || 'a',
    {
      className: classnames('anchor', className),
      ...rest,
    },
    children,
  )
Anchor.displayName = 'Anchor'

export default withTheme(Anchor)
