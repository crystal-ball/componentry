import { render, screen } from '@testing-library/react'

import { elementTests } from '../../test/element-tests'
import { Icon, configureIconElementsMap } from './Icon'

describe('<Icon />', () => {
  elementTests(Icon)
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<Icon /> snapshots', () => {
  it('renders correctly', () => {
    render(<Icon id='test' data-testid='icon' />)

    expect(screen.getByTestId('icon')).toMatchSnapshot()
  })
})

// --------------------------------------------------------
// Configuration

describe('configureIconElementsMap', () => {
  it('allows configuring icon render elements', () => {
    configureIconElementsMap({
      test: () => (
        <svg>
          <path data-testid='test-el' />
        </svg>
      ),
    })

    render(<Icon id='test' />)

    expect(screen.getByTestId('test-el')).toBeInTheDocument()
  })
})
