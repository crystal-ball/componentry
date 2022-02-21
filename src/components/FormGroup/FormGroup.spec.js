import { render, screen } from '@testing-library/react'

import { elementTests } from '../../test/element-tests'
import { FormGroup } from './FormGroup'

describe('<FormGroup />', () => {
  // Basic library element test suite
  elementTests(FormGroup)
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<FormGroup /> snapshots', () => {
  it('renders correctly', () => {
    render(<FormGroup data-testid='formgroup' />)

    expect(screen.getByTestId('formgroup')).toMatchSnapshot()
  })
})
