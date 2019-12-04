import React from 'react'
import { render } from '@testing-library/react'

import Badge from './Badge'

import elementTests from '../../test/element-tests'

describe('<Badge />', () => {
  elementTests(Badge)

  test('When color is passed, then badge-color className is rendered', () => {
    const { getByText } = render(<Badge color='primary'>Badge</Badge>)
    expect(getByText('Badge')).toHaveClass('badge-primary')
  })

  test('When rounded is passed, then badge-rounded className is rendered', () => {
    const { getByText } = render(<Badge rounded>Badge</Badge>)
    expect(getByText('Badge')).toHaveClass('badge-rounded')
  })
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<Badge /> snapshots', () => {
  it('renders correctly', () => {
    const { container } = render(
      <div>
        <Badge color='primary'>Badge</Badge>
        <Badge rounded color='primary'>
          Badge
        </Badge>
      </div>,
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
