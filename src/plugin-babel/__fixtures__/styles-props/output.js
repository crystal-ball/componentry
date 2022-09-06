import { Flex, Text } from 'componentry'
import { jsx as _jsx } from 'react/jsx-runtime'
import { jsxs as _jsxs } from 'react/jsx-runtime'
export default function Test() {
  return /*#__PURE__*/ _jsxs('div', {
    children: [
      /*#__PURE__*/ _jsx('div', {
        className: 'flex',
        style: {
          marginTop: 99,
        },
        children: 'Inline styles',
      }),
      /*#__PURE__*/ _jsx('div', {
        className: 'C9Y-Text-base C9Y-Text-body',
        style: {
          color: 'hotpink',
          overflow: 'hidden',
          marginTop: '20px',
        },
        children: 'Styles prop test',
      }),
      /*#__PURE__*/ _jsx('div', {
        className: 'C9Y-Text-base C9Y-Text-body',
        style: {
          marginTop: 17,
          overflow: 'hidden',
          marginTop: '20px',
        },
        children: 'Styles prop test',
      }),
    ],
  })
}
