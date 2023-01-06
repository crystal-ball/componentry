import { Badge, Block, Flex, Grid, Paper, Text } from 'componentry'
import { jsx as _jsx } from 'react/jsx-runtime'
import { jsxs as _jsxs } from 'react/jsx-runtime'
export default function Test() {
  // Test that:
  // 1. Individual component props are transformed correctly
  return /*#__PURE__*/ _jsxs('div', {
    children: [
      /*#__PURE__*/ _jsx('div', {
        className:
          'C9Y-Badge-base C9Y-Badge-outlined C9Y-Badge-primaryColor C9Y-Badge-smallSize',
        children: 'Test Badge component',
      }),
      /*#__PURE__*/ _jsx('div', {
        children: 'Test Block component',
      }),
      /*#__PURE__*/ _jsx('div', {
        className: 'flex items-center flex-col flex-wrap justify-center',
        children: 'Test Flex component',
      }),
      /*#__PURE__*/ _jsx('div', {
        className: 'grid items-center justify-items-center',
        children: 'Test Grid component',
      }),
      /*#__PURE__*/ _jsx('h1', {
        className: 'C9Y-Text-base C9Y-Text-h1 truncate',
        children: 'Test Text component',
      }),
      /*#__PURE__*/ _jsx('div', {
        className: 'C9Y-Paper-base C9Y-Paper-modal',
        children: 'Test Paper component',
      }),
    ],
  })
}
