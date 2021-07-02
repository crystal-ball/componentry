import { Flex, Text } from 'componentry'
import { jsx as _jsx } from 'react/jsx-runtime'
import { jsxs as _jsxs } from 'react/jsx-runtime'
export default function Test() {
  // Test that:
  // 1. Props that aren't library props are passed through
  // 2. Props that are arrow expressions are passed through
  return /*#__PURE__*/ _jsxs('div', {
    className: '\uD83C\uDD72-flex flex',
    children: [
      /*#__PURE__*/ _jsx('p', {
        'className': '\uD83C\uDD72-text body-variant',
        'data-skip': 'passthrough',
        'children': 'Passthrough props',
      }),
      /*#__PURE__*/ _jsx('p', {
        className: '\uD83C\uDD72-text body-variant',
        onMouseEnter: () => console.log('mouse_enter'),
        children: 'Passthrough props',
      }),
    ],
  })
}
