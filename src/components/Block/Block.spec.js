import React from 'react'
import { render, screen } from '@testing-library/react'

import { elementTests } from '../../test/element-tests'
import { Block } from './Block'

describe('<Block />', () => {
  elementTests(Block)
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<Block /> snapshots', () => {
  it('renders correctly', () => {
    render(<Block data-testid='block'>Block content</Block>)

    expect(screen.getByTestId('block')).toMatchSnapshot()
  })
})
