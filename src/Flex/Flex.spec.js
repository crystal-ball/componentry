import React from 'react'
import { render, screen } from '@testing-library/react'

import { elementTests } from '../test/element-tests'
import { Flex } from './Flex'

describe('<Flex />', () => {
  elementTests(Flex)

  it('When inline is not passed, then flex className is rendered', () => {
    render(<Flex>Content</Flex>)

    expect(screen.getByText('Content')).toHaveClass('🅲-flex flex')
  })

  it('When inline is passed, then inline-flex className is rendered', () => {
    render(<Flex inline>Content</Flex>)

    expect(screen.getByText('Content')).toHaveClass('🅲-flex inline-flex')
  })

  it('When modifier props are passed, then the expanded classNames are rendered', () => {
    render(
      <Flex align='start' direction='column' justify='start' wrap='wrap'>
        Content
      </Flex>,
    )

    expect(screen.getByText('Content')).toHaveClass(
      '🅲-flex flex flex-column items-start flex-wrap justify-start',
    )
  })
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<Flex /> snapshots', () => {
  it('renders correctly', () => {
    render(<Flex data-testid='flex'>Flex content</Flex>)

    expect(screen.getByTestId('flex')).toMatchSnapshot()
  })
})
