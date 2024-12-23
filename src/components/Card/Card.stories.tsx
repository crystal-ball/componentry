import type { Meta, StoryObj } from '@storybook/react'

import { Flex } from '../Flex/Flex'
import { Link } from '../Link/Link'
import { Text } from '../Text/Text'
import { Card } from './Card'

const meta: Meta<typeof Card> = {
  component: Card,
}

export default meta
type Story = StoryObj<typeof Card>

export const Primary: Story = {
  args: {
    children: (
      <>
        <Card.Header>
          <Text>Card Header</Text>
        </Card.Header>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Subtitle>Card subtitle</Card.Subtitle>
          <Text mt={2}>
            God help us, we&apos;re in the hands of engineers. So you two dig up, dig up
            dinosaurs? Checkmate... Do you have any idea how long it takes those cups to
            decompose. God help us, we&apos;re in the hands of engineers. You really think
            you can fly that thing? They&apos;re using our own satellites against us. And
            the clock is ticking.
          </Text>
          <Flex gap={2} mt={2}>
            <Link href='#demo'>Card link</Link>
            <Link href='#demo'>Another link</Link>
          </Flex>
        </Card.Body>
        <Card.Footer>
          <Text>2 days ago</Text>
        </Card.Footer>
      </>
    ),
  },
}

export const WithImageCap: Story = {
  args: {
    children: (
      <>
        <svg
          className='rounded-t'
          width='100%'
          height='180'
          xmlns='http://www.w3.org/2000/svg'
          preserveAspectRatio='xMidYMid slice'
          focusable='false'
          role='img'
          aria-label='Placeholder: Image cap'
        >
          <title>Placeholder</title>
          <rect width='100%' height='100%' fill='#fef' />
          <text x='50%' y='50%' fill='#6c757d' dx='-38px' dy='8px'>
            Image cap
          </text>
        </svg>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Subtitle>Card subtitle</Card.Subtitle>
        </Card.Body>
      </>
    ),
  },
}
