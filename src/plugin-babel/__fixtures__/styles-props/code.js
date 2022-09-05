import { Flex, Text } from 'componentry'

export default function Test({ success }) {
  // Test that:
  // 1. Props without theme values are compiled to inline styles
  // 2. Inline styles are merged correctly with prop values
  // 3. Skipped components are unaffected
  return (
    <Flex mt={99}>
      <Text mt={-20} style={{ overflow: 'hidden', marginTop: '19px' }}>
        Styles prop test
      </Text>
      <Text mt={success ? 19 : 21} style={{ overflow: 'hidden', marginTop: '19px' }}>
        Styles prop test
      </Text>
    </Flex>
  )
}
