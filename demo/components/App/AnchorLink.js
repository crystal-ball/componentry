/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import { Link } from 'react-router-dom'

/**
 * The react router Link does *NOT* handle external links, which is irritating.
 * This component checks for an href, and renders an `a` element when found,
 * otherwise it renders a Link for the internal link.
 */
const AnchorLink = props => (props.to ? <Link {...props} /> : <a {...props} />)
export default AnchorLink
