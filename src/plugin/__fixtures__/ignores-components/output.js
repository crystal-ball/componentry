import { Button, Flex, Input } from 'componentry'
import { jsx as _jsx } from 'react/jsx-runtime'
import { jsxs as _jsxs } from 'react/jsx-runtime'
export default function Test() {
  // Test that:
  // 1. Components that aren't precompile components are ignored
  return /*#__PURE__*/ _jsxs('div', {
    className: '\uD83C\uDD72-flex flex',
    children: [
      /*#__PURE__*/ _jsx(Input, {
        value: 'not compiled',
      }),
      /*#__PURE__*/ _jsx(Button, {
        children: 'Not compiled',
      }),
    ],
  })
}
