import React from 'react'
import { render, screen } from '@testing-library/react'

import { elementTests } from '../../test/element-tests'
import { Grid } from './Grid'

describe('<Grid />', () => {
  elementTests(Grid)

  it('Renders class grid by default', () => {
    render(<Grid>Content</Grid>)

    expect(screen.getByText('Content')).toHaveClass('grid')
  })

  it('When display is passed, then class flex is overridden', () => {
    render(<Grid display='inline-grid'>Content</Grid>)

    expect(screen.getByText('Content')).toHaveClass('inline-grid')
  })
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<Grid /> snapshots', () => {
  it('renders correctly', () => {
    render(<Grid data-testid='grid'>Block content</Grid>)

    expect(screen.getByTestId('grid')).toMatchSnapshot()
  })
})
