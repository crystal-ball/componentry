import { Text } from 'componentry'

export default function Test({ success, position, ...rest }) {
  return (
    <div>
      {/* ✓ Implicit boolean props */}
      <Text bold>Implicit boolean test</Text>
      {/* ✓ String props */}
      <Text display='flex'>String literal test</Text>
      {/* ✓ Boolean literal expression props */}
      <Text bold={true}>Boolean literal expression test</Text>
      {/* ✓ String literal expression props */}
      <Text textTransform={'uppercase'}>String literal expression test</Text>
      {/* ✓ Numeric literal expression props */}
      <Text pt={20}>Numeric literal expression test</Text>

      {/* X Identifier expression props */}
      <Text position={position}>Identifier expression test</Text>
      {/* X Conditional expression props */}
      <Text color={success ? 'success' : 'error'}>Conditional expression test</Text>
      {/* X Call expression props */}
      <Text mt={computeMargin(position)}>Call expression test</Text>
      {/* X Spread attribute props */}
      <Text {...rest}>Spread expression test</Text>
    </div>
  )
}
