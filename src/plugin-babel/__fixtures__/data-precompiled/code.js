import { Flex, Text } from 'componentry'

export default function Test() {
  // Test that:
  // 1. Plugin option `dataFlag` results in a `data-precompiled` flag included
  return (
    <Flex>
      <Text>Precompiled for speed</Text>
    </Flex>
  )
}
