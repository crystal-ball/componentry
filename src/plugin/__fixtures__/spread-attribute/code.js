import { Flex, Text } from 'componentry'

export default function Demo(props) {
  return (
    <Flex direction='column' justify='center' {...props}>
      <Text variant='heading-1'>Componentry</Text>
      <Text>Precompile testing snapshot</Text>
    </Flex>
  )
}
