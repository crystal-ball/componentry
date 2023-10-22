import type { Meta, StoryObj } from '@storybook/react'

import { Drawer } from './Drawer'

const meta: Meta<typeof Drawer> = {
  component: Drawer,
}

export default meta
type Story = StoryObj<typeof Drawer>

export const Primary: Story = {
  args: {
    children: (
      <>
        <Drawer.Action>Toggle drawer</Drawer.Action>
        <Drawer.Content>Drawer content</Drawer.Content>
      </>
    ),
  },
}

export const WithMultiple: Story = {
  args: {
    children: (
      <>
        <Drawer.Action activeId='one'>Toggle drawer</Drawer.Action>
        <Drawer.Content activeId='one'>Drawer content</Drawer.Content>
        <Drawer.Action activeId='two'>Toggle drawer</Drawer.Action>
        <Drawer.Content activeId='two'>Drawer content</Drawer.Content>
        <Drawer.Action activeId='three'>Toggle drawer</Drawer.Action>
        <Drawer.Content activeId='three'>Drawer content</Drawer.Content>
      </>
    ),
  },
}
