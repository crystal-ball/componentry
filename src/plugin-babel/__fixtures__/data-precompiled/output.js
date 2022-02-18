import { Flex, Text } from 'componentry'
import { jsx as _jsx } from 'react/jsx-runtime'
export default function Test() {
  // Test that:
  // 1. Plugin option `dataFlag` results in a `data-precompiled` flag included
  return /*#__PURE__*/ _jsx('div', {
    className: 'flex',
    'data-component': 'Flex',
    children: /*#__PURE__*/ _jsx('p', {
      className: '\uD83C\uDD72Text-base \uD83C\uDD72Text-body',
      'data-component': 'Text',
      children: 'Precompiled for speed',
    }),
  })
}
