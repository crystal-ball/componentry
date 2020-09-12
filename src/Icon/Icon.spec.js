import React from 'react'
import { render } from '@testing-library/react'

import { elementTests } from '../../test/element-tests'
import { Icon } from './Icon'

describe('<Icon />', () => {
  elementTests(Icon)
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<Icon /> snapshots', () => {
  it('renders correctly', () => {
    const { container } = render(<Icon id='test' />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
