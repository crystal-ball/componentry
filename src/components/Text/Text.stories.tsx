import type { Meta, StoryObj } from '@storybook/react'

import { Block } from '../Block/Block'
import { Text } from './Text'

const meta: Meta<typeof Text> = { component: Text }

export default meta
type Story = StoryObj<typeof Text>

export const Primary: Story = {
  render: () => (
    <>
      <Text variant='h1'>Heading 1</Text>

      <Text variant='h2'>Heading 2</Text>
      <Text variant='h3'>Heading 3</Text>
      <Text variant='body'>
        Life finds a way. Life finds a way. God help us, we&apos;re in the hands of
        engineers. Life finds a way. Must go faster. Hey, you know how I&apos;m, like,
        always trying to save the planet? Here&apos;s my chance. Eventually, you do plan
        to have dinosaurs on your dinosaur tour, right?
      </Text>
      <Text variant='small'>Small copy</Text>
    </>
  ),
}

export const BodySpacing: Story = {
  render: () => (
    <>
      <Text variant='body'>
        By default Componentry includes margin-top between sibling body elements, this can
        be configured using the `& + &` stle in the body variant styles.
      </Text>
      <Text variant='body'>
        By default Componentry includes margin-top between sibling body elements, this can
        be configured using the `& + &` stle in the body variant styles.
      </Text>
    </>
  ),
}

export const Truncation: Story = {
  render: () => (
    // @ts-expect-error -- storybook types
    <Block width={240}>
      <Text truncate>
        Eventually, you do plan to have dinosaurs on your dinosaur tour, right?
      </Text>
    </Block>
  ),
}

export const FontSize: Story = {
  render: () => (
    <>
      <Text variant='body' fontSize='sm'>
        Small size body.
      </Text>
      <Text variant='body' fontSize='base'>
        Base size body.
      </Text>
      <Text variant='body' fontSize='lg'>
        Large size body.
      </Text>
    </>
  ),
}

export const BoldItalic: Story = {
  render: () => (
    <>
      <Text italic>Italic text</Text>
      <Text bold>Bold text</Text>
    </>
  ),
}
