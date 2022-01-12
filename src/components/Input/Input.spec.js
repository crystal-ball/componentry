import React from 'react'
import { render, screen } from '@testing-library/react'

import { elementTests } from '../../test/element-tests'
import { Input } from './Input'

describe('<Input />', () => {
  // Basic library element test suite
  // elementTests(Input) - no wrapper element to test...
  elementTests(Input.Label, Input)
  // elementTests(Input.Field) - TODO: cannot test Input because it cannot have children
  elementTests(Input.Description, Input)
  elementTests(Input.Error, Input)
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<Input /> snapshots', () => {
  it('renders correctly', () => {
    render(
      <div data-testid='input'>
        <Input>
          <Input.Label>Storybook</Input.Label>
          <Input.Field />
          <Input.Description>Really important input!</Input.Description>
          <Input.Error>Oh no!</Input.Error>
        </Input>
      </div>,
    )

    expect(screen.getByTestId('input')).toMatchSnapshot()
  })
})
