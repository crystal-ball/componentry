import { Flex, Text } from 'componentry'
import FancyText from './fancy-text'

export default function Test() {
  // Test that:
  // 1. as="string" works
  // 2. as={Identifier} works
  return (
    <Flex as='main'>
      <Text as={FancyText} mt={3} fancy>
        Precompiled for speed
      </Text>
    </Flex>
  )
}
