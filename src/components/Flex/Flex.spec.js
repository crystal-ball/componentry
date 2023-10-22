import { render, screen } from '@testing-library/react'

import { elementTests } from '../../test/element-tests'
import { Flex } from './Flex'

describe('<Flex />', () => {
  elementTests(Flex)

  it('renders class flex by default', () => {
    render(<Flex>Content</Flex>)

    expect(screen.getByText('Content')).toHaveClass('flex')
  })

  it('when display is passed, then class flex is overridden', () => {
    render(<Flex display='inline-flex'>Content</Flex>)

    expect(screen.getByText('Content')).toHaveClass('inline-flex')
  })

  it('when modifier props are passed, then the expanded classNames are rendered', () => {
    render(
      <Flex align='start' direction='column' justify='start' wrap='wrap'>
        Content
      </Flex>,
    )

    expect(screen.getByText('Content')).toHaveClass(
      'flex flex-col items-start flex-wrap justify-start',
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
