import type { Meta, StoryObj } from '@storybook/react'

import { Media, useMedia } from './Media'

const meta: Meta<typeof Media> = {
  component: Media,
}

export default meta
type Story = StoryObj<typeof Media>

export const Primary: Story = {
  render: () => (
    <Media breakpoints={[0, 768, 1250]}>
      <MediaConsumer />
    </Media>
  ),
}

function MediaConsumer() {
  const media = useMedia()

  return (
    <div>
      <h3>Media values:</h3>
      <div>Small: {String(media.sm)}</div>
      <div>Medium: {String(media.md)}</div>
      <div>Large: {String(media.lg)}</div>
      <pre>
        <code>{JSON.stringify(media, null, 2)}</code>
      </pre>
    </div>
  )
}
