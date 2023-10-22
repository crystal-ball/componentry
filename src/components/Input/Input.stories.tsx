import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './Input'

const meta: Meta<typeof Input> = {
  component: Input,
}

export default meta
type Story = StoryObj<typeof Input>

export const Primary: Story = {
  args: {
    children: (
      <>
        <Input.Label>Componentry input</Input.Label>
        <Input.Field placeholder='type in me!' />
        <Input.Description>Really important input!</Input.Description>
      </>
    ),
  },
}

export const ErrorState: Story = {
  args: {
    children: (
      <>
        <Input.Label>Componentry input</Input.Label>
        <Input.Field invalid required />
        <Input.Error>Oh no!</Input.Error>
      </>
    ),
  },
}

export const WithScreenReaderOnlyLabel: Story = {
  args: {
    children: (
      <>
        <Input.Label className='sr-only'>Storybook</Input.Label>
        <Input.Field />
      </>
    ),
  },
}
