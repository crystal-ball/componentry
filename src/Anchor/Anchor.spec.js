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

  test('When used to create a button styled anchor, then btn is rendered', () => {
    const { getByText } = render(<Anchor variant='btn'>Link</Anchor>)
    expect(getByText('Link')).toHaveClass('btn')
    expect(getByText('Link')).not.toHaveClass('a')
  })
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<Anchor /> snapshots', () => {
  it('renders correctly', () => {
    const { container } = render(<Anchor>Link</Anchor>)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('renders btn variants correctly', () => {
    const { container } = render(
      <>
        <Anchor variant='btn'>Link</Anchor>
        <Anchor variant='btn' outline='success' size='sm'>
          Link
        </Anchor>
      </>,
    )
    expect(container).toMatchSnapshot()
  })
})
