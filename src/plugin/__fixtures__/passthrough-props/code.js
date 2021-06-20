import { Flex, Text } from 'componentry'

export default function Demo() {
  return (
    <Flex direction='column' __source={{ fileName: 'test/file.js' }}>
      <Text __source={{ fileName: 'test/file.js' }}>Passthrough props</Text>
    </Flex>
  )
}
