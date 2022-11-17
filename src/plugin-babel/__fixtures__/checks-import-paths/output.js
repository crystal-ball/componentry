import { Flex, Text } from 'componentry'
import { Grid } from './custom-grid'
import { Paper } from '@/custom/componentry_path'
import { jsx as _jsx } from 'react/jsx-runtime'
import { jsxs as _jsxs } from 'react/jsx-runtime'
export default function Test() {
  // Test that:
  // 1. Componentry imports (Flex, Text) are compiled
  // 2. Non-Componentry imports (Grid) are ignored
  // 3. Custom import paths (Paper) can be configured
  return /*#__PURE__*/ _jsxs('div', {
    className: 'flex',
    children: [
      /*#__PURE__*/ _jsx(Grid, {
        children: /*#__PURE__*/ _jsx('div', {
          className: 'C9Y-Text-base C9Y-Text-body',
          children: 'Precompiled for speed',
        }),
      }),
      /*#__PURE__*/ _jsx('div', {
        className: 'C9Y-Paper-base C9Y-Paper-flat',
        children: /*#__PURE__*/ _jsx('div', {
          className: 'C9Y-Text-base C9Y-Text-body',
          children: 'Precompiled for speed',
        }),
      }),
    ],
  })
}
