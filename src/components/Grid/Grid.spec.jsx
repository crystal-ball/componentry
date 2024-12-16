import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import { elementTests } from '../../test/element-tests'
import { Grid } from './Grid'

describe('<Grid />', () => {
  elementTests(Grid)

  it('renders class grid by default', () => {
    render(<Grid>Content</Grid>)

    expect(screen.getByText('Content')).toHaveClass('grid')
  })

  it('overrides display class when passed', () => {
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
