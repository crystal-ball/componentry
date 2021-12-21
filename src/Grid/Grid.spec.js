import React from 'react'
import { render, screen } from '@testing-library/react'

import { elementTests } from '../test/element-tests'
import { Grid } from './Grid'

describe('<Grid />', () => {
  elementTests(Grid)

  it('When inline is not passed, then block className is rendered', () => {
    render(<Grid>Content</Grid>)

    expect(screen.getByText('Content')).toHaveClass('🅲-grid grid')
  })

  it('When inline is passed, then inline-block className is rendered', () => {
    render(<Grid inline>Content</Grid>)

    expect(screen.getByText('Content')).toHaveClass('🅲-grid inline-grid')
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
