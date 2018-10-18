import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  /** Component children */
  children?: Node,
  /** External url */
  href?: string,
}

/**
 * The react router Link does *NOT* handle external links, which is irritating.
 * This component checks for an href, and renders an `a` element when found,
 * otherwise it renders a Link for the internal link.
 */
const AnchorLink = ({ children, to, ...rest }: Props) =>
  to ? (
    <Link to={to} {...rest}>
      {children}
    </Link>
  ) : (
    <a {...rest}>{children}</a>
  )

export default AnchorLink
