import type { Meta, StoryObj } from '@storybook/react'

import { Text } from '../Text/Text'
import { Link } from './Link'

const meta: Meta<typeof Link> = {
  component: Link,
}

export default meta
type Story = StoryObj<typeof Link>

export const Primary: Story = {
  render: () => (
    <div className='flex flex-col gap-2 items-start'>
      <Link href='#test'>Text link</Link>
      <Text variant='h2'>
        Link can be used inside <Link href='#test'>headings</Link>.
      </Text>
    </div>
  ),
}

export const WithoutAnchor: Story = {
  args: {
    onclick: console.log,
    children: 'Link',
  },
}

export const DisabledState: Story = {
  render: () => (
    <div className='flex flex-col items-center gap-4'>
      <Link disabled href='#test'>
        Text link
      </Link>
      <Link disabled onClick={console.log}>
        Button link
      </Link>
    </div>
  ),
}
