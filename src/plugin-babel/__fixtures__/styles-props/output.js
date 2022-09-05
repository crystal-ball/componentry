import { Flex, Text } from 'componentry'
import { jsx as _jsx } from 'react/jsx-runtime'
import { jsxs as _jsxs } from 'react/jsx-runtime'
export default function Test({ success }) {
  // Test that:
  // 1. Props without theme values are compiled to inline styles
  // 2. Inline styles are merged correctly with prop values
  // 3. Skipped components are unaffected
  return /*#__PURE__*/ _jsxs('div', {
    className: 'flex',
    style: {
      marginTop: 99,
    },
    children: [
      /*#__PURE__*/ _jsx('div', {
        style: {
          overflow: 'hidden',
          marginTop: '19px',
        },
        children: 'Styles prop test',
      }),
      /*#__PURE__*/ _jsx(Text, {
        mt: success ? 19 : 21,
        style: {
          overflow: 'hidden',
          marginTop: '19px',
        },
        children: 'Styles prop test',
      }),
    ],
  })
}
