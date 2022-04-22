import { useRef } from 'react'
import { Flex, Text } from 'componentry'

export default function Test() {
  const ref = useRef(null)

  // Test that:
  // 1. Refs are passed through
  return (
    <Flex ref={ref} p={2}>
      <Text variant='h3'>Precompiled for speed</Text>
    </Flex>
  )
}
