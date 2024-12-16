import { Badge, Block, Flex, Grid, Paper, Text } from 'componentry'
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
export default function Test() {
  // Test that:
  // 1. exclude config skips pre-compiling
  return /*#__PURE__*/ _jsx('div', {
    className: 'C9Y-Paper-base C9Y-Paper-flat',
    children: /*#__PURE__*/ _jsxs('div', {
      className: 'grid',
      children: [
        /*#__PURE__*/ _jsx('div', {
          className: 'flex',
          children: /*#__PURE__*/ _jsx('div', {
            className: 'C9Y-Text-base C9Y-Text-body',
            children: 'Precompiled for',
          }),
        }),
        /*#__PURE__*/ _jsx('div', {
          children: 'SPEED',
        }),
        /*#__PURE__*/ _jsx(Badge, {
          children: 'Delightful',
        }),
      ],
    }),
  })
}
