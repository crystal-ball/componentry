import React from 'react'
import { render, screen } from '@testing-library/react'

import Flex from './Flex'

import elementTests from '../../test/element-tests'

describe('<Flex />', () => {
  elementTests(Flex)

  test('When inline is not passed, then d-flex className is rendered', () => {
    render(<Flex>Content</Flex>)
    expect(screen.getByText('Content')).toHaveClass('d-flex')
  })

  test('When inline is passed, then d-inline-flex className is rendered', () => {
    render(<Flex inline>Content</Flex>)
    expect(screen.getByText('Content')).toHaveClass('d-inline-flex')
  })

  test('When modifier props are passed, then the expanded classNames are rendered', () => {
    render(
      <Flex align='start' direction='column' justify='start' wrap='wrap'>
        Content
      </Flex>,
    )
    expect(screen.getByText('Content')).toHaveClass(
      'd-flex flex-column align-items-start flex-wrap justify-content-start',
    )
  })
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<Flex /> snapshots', () => {
  it('renders correctly', () => {
    const { container } = render(
      <div>
        <Flex>Flex content</Flex>
        <Flex inline>Inline flex content</Flex>
      </div>,
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
