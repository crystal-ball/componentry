import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import { elementTests } from '../../test/element-tests'
import { Badge } from './Badge'

describe('<Badge />', () => {
  elementTests(Badge)

  it('renders a color className when color is passed', () => {
    render(<Badge color='primary'>Badge</Badge>)

    expect(screen.getByText('Badge')).toHaveClass('C9Y-Badge-primaryColor')
  })

  it('renders a size className when size is passed', () => {
    render(<Badge size='large'>Badge</Badge>)

    expect(screen.getByText('Badge')).toHaveClass('C9Y-Badge-largeSize')
  })
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<Badge /> snapshots', () => {
  it('renders correctly', () => {
    render(
      <Badge variant='filled' color='primary' data-testid='badge'>
        Badge
      </Badge>,
    )

    expect(screen.getByTestId('badge')).toMatchSnapshot()
  })
})
