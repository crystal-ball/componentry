import type { Meta, StoryObj } from '@storybook/react'

import { Input } from '../Input/Input'
import { FormGroup } from './FormGroup'

const meta: Meta<typeof FormGroup> = {
  component: FormGroup,
}

export default meta
type Story = StoryObj<typeof FormGroup>

export const Primary: Story = {
  render: () => (
    <div className='w-1/2'>
      {/* @ts-expect-error -- experimental component */}
      <FormGroup>
        <Input>
          <Input.Label>Name</Input.Label>
          <Input.Field placeholder='' />
        </Input>
      </FormGroup>
      {/* @ts-expect-error -- experimental component */}
      <FormGroup>
        <Input>
          <Input.Label>Email</Input.Label>
          <Input.Field placeholder='' />
        </Input>
      </FormGroup>
    </div>
  ),
}
