import { Flex, Text } from 'componentry'
import FancyText from './fancy-text'
import { jsx as _jsx } from 'react/jsx-runtime'
export default function Test() {
  // Test that:
  // 1. as="string" works
  // 2. as={Identifier} works
  return /*#__PURE__*/ _jsx('main', {
    className: 'flex',
    children: /*#__PURE__*/ _jsx(FancyText, {
      className: '\uD83C\uDD72Text-base \uD83C\uDD72Text-body mt-md',
      fancy: true,
      children: 'Precompiled for speed',
    }),
  })
}
