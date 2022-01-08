import { Flex, Text } from 'componentry'

export default function Test(props) {
  // Test that:
  // 1. Components with spread attributes {...props} are not precompiled
  return (
    <Flex direction='column' justify='center' {...props}>
      <Text>Precompile testing</Text>
    </Flex>
  )
}
