import React from 'react'
import { render, screen } from '@testing-library/react'

import elementTests from '../../test/element-tests'
import Anchor from './Anchor'

describe('<Anchor/>', () => {
  // Basic library element test suite
  elementTests(Anchor)

  test('should render type classes for anchor', () => {
    render(<Anchor color='success'>Link</Anchor>)
    expect(screen.getByText('Link')).toHaveClass('a a-primary a-color-success')
  })

  test('When used to create a button styled anchor, then btn is rendered', () => {
    render(<Anchor baseClass='btn'>Link</Anchor>)
    expect(screen.getByText('Link')).toHaveClass('btn')
    expect(screen.getByText('Link')).not.toHaveClass('a')
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
        <Anchor baseClass='btn'>Link</Anchor>
        <Anchor baseClass='btn' variant='secondary' size='sm'>
          Link
        </Anchor>
      </>,
    )
    expect(container).toMatchSnapshot()
  })
})
