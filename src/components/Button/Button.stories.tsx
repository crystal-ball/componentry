import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'

const meta: Meta<typeof Button> = {
  component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  decorators: [
    (Story) => (
      <div className='grid grid-cols-4 gap-x-4 gap-y-2 items-center justify-items-center'>
        <div>base</div>
        <div>hover</div>
        <div>active</div>
        <div>disabled</div>
        <Story />
      </div>
    ),
  ],
  render: () => (
    <>
      <Button variant='filled'>Button</Button>
      <Button variant='filled' className='C9Y-hover'>
        Button
      </Button>
      <Button variant='filled' className='C9Y-active'>
        Button
      </Button>
      <Button variant='filled' disabled>
        Button
      </Button>
      <Button variant='outlined'>Button</Button>
      <Button variant='outlined' className='C9Y-hover'>
        Button
      </Button>
      <Button variant='outlined' className='C9Y-active'>
        Button
      </Button>
      <Button variant='outlined' disabled>
        Button
      </Button>
    </>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <div className='flex flex-row items-center gap-4'>
      <Button variant='filled' size='small' startIcon='code' endIcon='code'>
        Button
      </Button>
      <Button variant='filled' startIcon='code' endIcon='code'>
        Button
      </Button>
      <Button variant='filled' size='large' startIcon='code' endIcon='code'>
        Button
      </Button>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className='flex flex-row items-center gap-4'>
      <Button size='small'>Button</Button>
      <Button>Button</Button>
      <Button size='large'>Button</Button>
    </div>
  ),
}

export const WithAnchor: Story = {
  args: {
    href: '#test',
    children: 'Button',
  },
  parameters: {
    docs: {
      description: 'Buttons with an `href` will be rendered as anchors',
    },
  },
}
