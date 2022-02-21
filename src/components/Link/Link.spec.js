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

    expect(screen.getByText('Link')).toHaveClass(
      'C9Y-Link-base C9Y-Link-text text-success',
    )
  })
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<Link /> snapshots', () => {
  it('renders correctly', () => {
    render(
      <Link href='#test' data-testid='link'>
        Link
      </Link>,
    )

    expect(screen.getByTestId('link')).toMatchSnapshot()
  })
})
