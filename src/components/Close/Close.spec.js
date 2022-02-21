import { render, screen } from '@testing-library/react'

import { elementTests } from '../../test/element-tests'
import { Close } from './Close'

describe('<Close />', () => {
  // Basic library element test suite
  elementTests(Close)
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<Close /> snapshots', () => {
  it('renders correctly', () => {
    render(<Close data-testid='close' />)

    expect(screen.getByTestId('close')).toMatchSnapshot()
  })
})
