import React from 'react'
import { cleanup, render } from '@testing-library/react'

import Flex from './Flex'

import elementTests from '../utils-test/element-tests'

describe('<Flex />', () => {
  afterEach(cleanup)

  elementTests(Flex)

  test('When inline is not passed, then d-flex className is rendered', () => {
    const { getByText } = render(<Flex>Content</Flex>)
    expect(getByText('Content')).toHaveClass('d-flex')
  })

  test('When inline is passed, then d-inline-flex className is rendered', () => {
    const { getByText } = render(<Flex inline>Content</Flex>)
    expect(getByText('Content')).toHaveClass('d-inline-flex')
  })

  test('When modifier props are passed, then the expanded classNames are rendered', () => {
    const { getByText } = render(
      <Flex direction='column' align='start' wrap='wrap' justify='start'>
        Content
      </Flex>,
    )
    expect(getByText('Content')).toHaveClass(
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
