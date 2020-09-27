import React from 'react'
import { render, screen } from '@testing-library/react'

import { elementTests } from '../../test/element-tests'
import { Badge } from './Badge'

describe('<Badge />', () => {
  elementTests(Badge)

  test('When color is passed, then badge-color className is rendered', () => {
    render(<Badge color='primary'>Badge</Badge>)
    expect(screen.getByText('Badge')).toHaveClass('badge-primary')
  })

  test('When rounded is passed, then badge-rounded className is rendered', () => {
    render(<Badge rounded>Badge</Badge>)
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
        <Badge color='primary' rounded>
          Badge
        </Badge>
      </div>,
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
