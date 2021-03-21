import React from 'react'
import { render, screen } from '@testing-library/react'

import { elementTests } from '../../test/element-tests'
import { Badge } from './Badge'

describe('<Badge />', () => {
  elementTests(Badge)

  it('When color is passed, then badge-color className is rendered', () => {
    render(<Badge color='primary'>Badge</Badge>)

    expect(screen.getByText('Badge')).toHaveClass('badge-primary')
  })

  it('When variant is rounded, variant className is rendered', () => {
    render(<Badge variant='rounded'>Badge</Badge>)

    expect(screen.getByText('Badge')).toHaveClass('badge-rounded')
  })
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<Badge /> snapshots', () => {
  it('renders correctly', () => {
    const { container } = render(
      <div>
        <Badge color='primary'>Badge</Badge>
        <Badge variant='rounded' color='primary'>
          Badge
        </Badge>
      </div>,
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
