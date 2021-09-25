import { Flex, Text } from 'componentry'

export default function Test() {
  // Test that:
  // 1. Props that aren't library props are passed through
  // 2. Props that are arrow expressions are passed through
  return (
    <Flex>
      <Text data-skip='passthrough'>Passthrough props</Text>
      <Text onMouseEnter={() => console.log('mouse_enter')}>Passthrough props</Text>
    </Flex>
  )
}
