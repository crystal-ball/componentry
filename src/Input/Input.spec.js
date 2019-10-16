import React from 'react'
import { render } from '@testing-library/react'

import Input from './Input'
import elementTests from '../../test/element-tests'

describe('<Input />', () => {
  // Basic library element test suite
  // elementTests(Input) - no wrapper element to test...
  elementTests(Input.Label)
  // elementTests(Input.Field) - TODO: cannot test Input because it cannot have children
  elementTests(Input.Description)
  elementTests(Input.Error)
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<Input /> snapshots', () => {
  it('renders correctly', () => {
    const { container } = render(
      <div>
        <Input>
          <Input.Label>Storybook</Input.Label>
          <Input.Field />
          <Input.Description>Really important input!</Input.Description>
          <Input.Error>Oh no!</Input.Error>
        </Input>
      </div>,
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
