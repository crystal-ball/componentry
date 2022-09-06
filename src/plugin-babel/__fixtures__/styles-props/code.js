import { Flex, Text } from 'componentry'

export default function Test() {
  return (
    <div>
      {/* Props without theme values are compiled to inline styles */}
      <Flex mt={99}>Inline styles</Flex>
      {/* Inline styles are merged correctly with prop values */}
      <Text color='hotpink' style={{ overflow: 'hidden', marginTop: '20px' }}>
        Styles prop test
      </Text>
      {/* Styles prop takes precedence over utility props (marginTop duplicated) */}
      <Text mt={17} style={{ overflow: 'hidden', marginTop: '20px' }}>
        Styles prop test
      </Text>
    </div>
  )
}
