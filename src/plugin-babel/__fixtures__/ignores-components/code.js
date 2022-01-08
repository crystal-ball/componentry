import { Button, Flex, Input } from 'componentry'

export default function Test() {
  // Test that:
  // 1. Components that aren't precompile components are ignored
  return (
    <Flex>
      <Input value='not compiled' />
      <Button>Not compiled</Button>
    </Flex>
  )
}
