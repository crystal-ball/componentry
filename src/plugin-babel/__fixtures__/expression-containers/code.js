import { Flex, Text } from 'componentry'
import clsx from 'clsx'

export default function Test({ success, position }) {
  // Test that:
  // 1. Attributes with numeric expressions are parsed
  // 2. Attributes with boolean expressions are parsed
  // 3. Attributes with identifiers are skipped
  // 4. Attributes with conditional expressions are skipped
  // 5. Attributes with call expressions are skipped
  return (
    <Flex>
      <Text pt={20}>Expression containers test</Text>
      <Text bold>Expression containers test</Text>
      <Text position={position}>Expression containers test</Text>
      <Text color={success ? 'success' : 'error'}>Expression containers test</Text>
      <Text className={clsx(['hecka', 'rad'])}>Expression containers test</Text>
    </Flex>
  )
}
