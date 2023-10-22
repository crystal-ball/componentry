import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'
import { Icon } from '../Icon/Icon'

const meta: Meta<typeof Button> = {
  component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

function ButtonRow(control: {
  disabled?: boolean
  pressed?: boolean
  hovered?: boolean
}) {
  return (
    <>
      <Button variant='filled' {...control}>
        Button
      </Button>
      <Button variant='filled' {...control}>
        <Icon id='code' />
        Button
      </Button>
      <Button variant='filled' {...control}>
        Button
        <Icon id='code' />
      </Button>
      <Button variant='filled' {...control}>
        <Icon id='code' />
      </Button>
      <Button variant='outlined' {...control}>
        Button
      </Button>
      <Button variant='outlined' {...control}>
        <Icon id='code' />
        Button
      </Button>
      <Button variant='outlined' {...control}>
        Button
        <Icon id='code' />
      </Button>
      <Button variant='outlined' {...control}>
        <Icon id='code' />
      </Button>
    </>
  )
}

export const Primary: Story = {
  render: () => (
    <div
      className='grid gap-x-4 gap-y-2 items-center justify-items-center'
      style={{ gridTemplateColumns: '70px repeat(8, auto)' }}
    >
      <div>base</div>
      <ButtonRow />

      <div>hover</div>
      <ButtonRow hovered />

      <div>pressed</div>
      <ButtonRow pressed />

      <div>disabled</div>
      <ButtonRow disabled />
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div
      className='grid gap-x-4 gap-y-2 items-center justify-items-start'
      style={{ gridTemplateColumns: '60px repeat(4, auto)' }}
    >
      <div>small</div>
      <Button size='small'>Button</Button>
      <Button size='small'>
        <Icon id='code' />
        Button
      </Button>
      <Button size='small'>
        Button
        <Icon id='code' />
      </Button>
      <Button size='small'>
        <Icon id='code' />
      </Button>

      <div>default</div>
      <Button>Button</Button>
      <Button>
        <Icon id='code' />
        Button
      </Button>
      <Button>
        Button
        <Icon id='code' />
      </Button>
      <Button>
        <Icon id='code' />
      </Button>

      <div>large</div>
      <Button size='large'>Button</Button>
      <Button size='large'>
        <Icon id='code' />
        Button
      </Button>
      <Button size='large'>
        Button
        <Icon id='code' />
      </Button>
      <Button size='large'>
        <Icon id='code' />
      </Button>
    </div>
  ),
}
