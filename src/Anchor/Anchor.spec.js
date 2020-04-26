import React from 'react'
import { render } from '@testing-library/react'

import Anchor from './Anchor'
import elementTests from '../../test/element-tests'

describe('<Anchor/>', () => {
  // Basic library element test suite
  elementTests(Anchor)

  test('should render type classes for anchor', () => {
    const { getByText } = render(<Anchor color='success'>Link</Anchor>)
    expect(getByText('Link')).toHaveClass('a a-primary a-color-success')
  })

  test('When used to create a button styled anchor, then btn is rendered', () => {
    const { getByText } = render(<Anchor baseClass='btn'>Link</Anchor>)
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
        <Anchor baseClass='btn'>Link</Anchor>
        <Anchor baseClass='btn' variant='secondary' size='sm'>
          Link
        </Anchor>
      </>,
    )
    expect(container).toMatchSnapshot()
  })
})
