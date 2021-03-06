import React from 'react'
import { render, screen } from '@testing-library/react'

import { elementTests } from '../../test/element-tests'
import { Link } from './Link'

describe('<Link/>', () => {
  // Basic library element test suite
  elementTests(Link)

  it('should render type classes for anchor', () => {
    render(
      <Link href='#test' color='success'>
        Link
      </Link>,
    )

    expect(screen.getByText('Link')).toHaveClass('🅲-link link-primary link-color-success')
  })
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<Link /> snapshots', () => {
  it('renders correctly', () => {
    const { container } = render(<Link href='#test'>Link</Link>)

    expect(container.firstChild).toMatchSnapshot()
  })
})
