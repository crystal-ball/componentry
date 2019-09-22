import React from 'react'
import { render } from '@testing-library/react'

import Anchor from './Anchor'
import elementTests from '../../test/element-tests'

describe('<Anchor/>', () => {
  // Basic library element test suite
  elementTests(Anchor)

  test('should render type classes for anchor', () => {
    const { getByText } = render(
      <Anchor color='success' size='sm'>
        Link
      </Anchor>,
    )
    expect(getByText('Link')).toHaveClass('a a-success a-sm')
  })

  test('When used to create a anchor styled button, then a is rendered', () => {
    const { getByText } = render(<Anchor as='button'>Link</Anchor>)
    expect(getByText('Link')).toHaveClass('a')
  })
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<Anchor /> snapshots', () => {
  it('renders correctly', () => {
    const { container } = render(<Anchor>Link</Anchor>)
    expect(container.firstChild).toMatchSnapshot()
  })
})
