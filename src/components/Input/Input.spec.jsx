import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import { elementTests } from '../../test/element-tests'
import { Input } from './Input'

function LabelTest(testProps) {
  return (
    <Input>
      <Input.Label {...testProps} />
    </Input>
  )
}
LabelTest.displayName = Input.Label.displayName

describe('<Input />', () => {
  // Basic library element test suite
  // elementTests(Input) - no wrapper element to test...
  elementTests(LabelTest)
  // elementTests(Input.Field) - TODO: cannot test Input because it cannot have children
  elementTests(Input.Description)
  elementTests(Input.Error)
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
