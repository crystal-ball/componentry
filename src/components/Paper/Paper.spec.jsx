import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import { elementTests } from '../../test/element-tests'
import { Paper } from './Paper'

describe('<Paper />', () => {
  elementTests(Paper)
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<Paper /> snapshots', () => {
  it('renders correctly', () => {
    render(<Paper data-testid='paper'>Paper content</Paper>)

    expect(screen.getByTestId('paper')).toMatchSnapshot()
  })
})
