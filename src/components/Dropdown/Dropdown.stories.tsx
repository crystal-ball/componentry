import type { Meta, StoryObj } from '@storybook/react'

import { Dropdown } from './Dropdown'

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
}

export default meta
type Story = StoryObj<typeof Dropdown>

export const Primary: Story = {
  args: {
    direction: 'bottom',
    children: (
      <>
        <Dropdown.Action>Action</Dropdown.Action>
        <Dropdown.Content>
          <h4 className='dropdown-heading'>Available actions</h4>
          <Dropdown.Item>Dropdown Item</Dropdown.Item>
          {/* @ts-expect-error -- experimental component */}
          <Dropdown.Item href='https://github.com/crystal-ball/componentry'>
            Link item
          </Dropdown.Item>
          <Dropdown.Item onClick={console.log}>Button item</Dropdown.Item>
          <Dropdown.Item disabled onClick={console.log}>
            Disabled button
          </Dropdown.Item>
          <div className='dropdown-divider' />
          <div className='dropdown-item-text'>Dropdown item text is not interactive</div>
        </Dropdown.Content>
      </>
    ),
  },
}

export const WithMultiple: Story = {
  args: {
    className: 'd-block w-50',
    children: (
      <>
        {/* @ts-expect-error -- experimental component */}
        <Dropdown.Action as='input' placeholder='Enter search' className='w-100' />
        <Dropdown.Content>
          <Dropdown.Item>Interactive Item 1</Dropdown.Item>
          <Dropdown.Item>Interactive Item 2</Dropdown.Item>
        </Dropdown.Content>
      </>
    ),
  },
}
