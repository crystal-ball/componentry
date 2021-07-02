import { Flex, Text } from 'componentry'
import clsx from 'clsx'
import { jsx as _jsx } from 'react/jsx-runtime'
import { jsxs as _jsxs } from 'react/jsx-runtime'
export default function Test({ success, position }) {
  // Test that:
  // 1. Attributes with numeric expressions are parsed
  // 2. Attributes with boolean expressions are parsed
  // 3. Attributes with identifiers are skipped
  // 4. Attributes with conditional expressions are skipped
  // 5. Attributes with call expressions are skipped
  return /*#__PURE__*/ _jsxs('div', {
    className: '\uD83C\uDD72-flex flex',
    children: [
      /*#__PURE__*/ _jsx('p', {
        style: {
          paddingTop: 80,
        },
        className: '\uD83C\uDD72-text body-variant',
        children: 'Expression containers test',
      }),
      /*#__PURE__*/ _jsx('p', {
        className: '\uD83C\uDD72-text body-variant font-bold',
        children: 'Expression containers test',
      }),
      /*#__PURE__*/ _jsx(Text, {
        position: position,
        children: 'Expression containers test',
      }),
      /*#__PURE__*/ _jsx(Text, {
        color: success ? 'success' : 'error',
        children: 'Expression containers test',
      }),
      /*#__PURE__*/ _jsx(Text, {
        className: clsx(['hecka', 'rad']),
        children: 'Expression containers test',
      }),
    ],
  })
}
