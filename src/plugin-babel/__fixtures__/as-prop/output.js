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
      className: 'C9Y-Text-base C9Y-Text-body mt-3',
      fancy: true,
      children: 'Precompiled for speed',
    }),
  })
}
