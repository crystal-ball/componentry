// @flow
import { createElement } from 'react'
import classnames from 'classnames'
import { type ElementProps } from '../component-factories/element'
import withTheme from '../withTheme/withTheme'

type Props = {
  /** Specifies DOM header element size */
  header: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  /** Sets text color to muted */
  muted: boolean,
} & ElementProps

const Header = ({ as, children, header = 'h1', muted }: Props) =>
  createElement(
    as || header,
    {
      className: classnames({
        'text-muted': muted,
      }),
    },
    children,
  )
Header.displayName = 'Header'

export default withTheme(Header)
