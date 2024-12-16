import { Button, Flex, Input } from 'componentry'
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
export default function Test() {
  // Test that:
  // 1. Components that aren't precompile components are ignored
  return /*#__PURE__*/ _jsxs('div', {
    className: 'flex',
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
