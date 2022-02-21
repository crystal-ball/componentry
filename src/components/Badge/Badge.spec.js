import { render, screen } from '@testing-library/react'

import { elementTests } from '../../test/element-tests'
import { Badge } from './Badge'

describe('<Badge />', () => {
  elementTests(Badge)

  it('When color is passed, then badge-color className is rendered', () => {
    render(<Badge color='primary'>Badge</Badge>)

    expect(screen.getByText('Badge')).toHaveClass('C9Y-Badge-primaryColor')
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
