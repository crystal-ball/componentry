import { useRef } from 'react'
import { Flex, Text } from 'componentry'
import { jsx as _jsx } from 'react/jsx-runtime'
export default function Test() {
  const ref = useRef(null) // Test that:
  // 1. Refs are passed through

  return /*#__PURE__*/ _jsx('div', {
    className: 'flex p-2',
    ref: ref,
    children: /*#__PURE__*/ _jsx('h3', {
      className: 'C9Y-Text-base C9Y-Text-h3',
      children: 'Precompiled for speed',
    }),
  })
}
