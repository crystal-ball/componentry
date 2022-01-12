import React from 'react'
import { render, screen } from '@testing-library/react'

import { elementTests } from '../../test/element-tests'
import { Icon } from './Icon'

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
