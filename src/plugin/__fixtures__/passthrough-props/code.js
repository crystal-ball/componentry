import { Flex, Text } from 'componentry'

export default function Demo() {
  return (
    <Flex direction='column' onClick={() => {}}>
      <Text passThrough={{ fileName: 'test/file.js' }}>Passthrough props</Text>
    </Flex>
  )
}
