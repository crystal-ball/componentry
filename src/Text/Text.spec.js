import React from 'react'
import { render } from '@testing-library/react'

import Text from './Text'
import elementTests from '../../test/element-tests'

describe('<Text/>', () => {
  // Basic library element test suite
  elementTests(Text)
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<Text /> snapshots', () => {
  it('renders correctly', () => {
    const { container } = render(<Text>text</Text>)
    expect(container.firstChild).toMatchSnapshot()
  })
})
