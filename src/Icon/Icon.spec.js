import React from 'react'
import { render } from '@testing-library/react'

import elementTests from '../../test/element-tests'
import Icon from './Icon'

describe('<Icon />', () => {
  elementTests(Icon)

  test('should not include class font when false', () => {
    const { getByTestId } = render(<Icon id='test' font={false} data-testid='icon' />)
    expect(getByTestId('icon')).not.toHaveClass('font')
  })
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<Icon /> snapshots', () => {
  it('renders correctly', () => {
    const { container } = render(<Icon id='test' />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
