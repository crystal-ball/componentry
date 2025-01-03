import { Flex, Text } from 'componentry'
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
export default function Test() {
  // Test that:
  // 1. Props that aren't library props are passed through
  // 2. Props that are arrow expressions are passed through
  return /*#__PURE__*/ _jsxs('div', {
    className: 'flex',
    children: [
      /*#__PURE__*/ _jsx('div', {
        className: 'C9Y-Text-base C9Y-Text-body',
        'data-skip': 'passthrough',
        children: 'Passthrough props',
      }),
      /*#__PURE__*/ _jsx('div', {
        className: 'C9Y-Text-base C9Y-Text-body',
        onMouseEnter: () => console.log('mouse_enter'),
        children: 'Passthrough props',
      }),
    ],
  })
}
