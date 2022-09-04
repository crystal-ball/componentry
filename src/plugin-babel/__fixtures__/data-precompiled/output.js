import { Text } from 'componentry'
import { jsx as _jsx } from 'react/jsx-runtime'
export default function Test() {
  // Test that:
  // 1. Plugin option `dataFlag` results in a `data-precompiled` flag included
  return /*#__PURE__*/ _jsx('div', {
    className: 'C9Y-Text-base C9Y-Text-body',
    'data-component': 'Text',
    children: 'Precompiled for speed',
  })
}
