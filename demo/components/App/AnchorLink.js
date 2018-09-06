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
const AnchorLink = ({ children, href, ...rest }: Props) =>
  href ? (
    <a href={href} {...rest}>
      {children}
    </a>
  ) : (
    <Link {...rest}>{children}</Link>
  )

export default AnchorLink
