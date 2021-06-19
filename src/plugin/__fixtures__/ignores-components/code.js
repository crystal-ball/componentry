import { Flex, Input, Text } from 'componentry'

export default function Demo() {
  return (
    <Flex direction='column' justify='center'>
      <Text variant='heading-1'>Componentry</Text>
      <Input value='not compiled' />
    </Flex>
  )
}
