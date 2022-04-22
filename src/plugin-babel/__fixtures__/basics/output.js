import { Block, Flex, Grid, Text } from 'componentry'
import { jsx as _jsx } from 'react/jsx-runtime'
import { jsxs as _jsxs } from 'react/jsx-runtime'
export default function Test() {
  // Test that:
  // 1. Basic component transform works
  return /*#__PURE__*/ _jsxs('div', {
    className: 'grid',
    children: [
      /*#__PURE__*/ _jsx('div', {
        className: 'flex p-2',
        children: /*#__PURE__*/ _jsx('h3', {
          className: 'C9Y-Text-base C9Y-Text-h3',
          children: 'Precompiled for',
        }),
      }),
      /*#__PURE__*/ _jsx('div', {
        className: '',
        children: 'SPEED',
      }),
    ],
  })
}
