import { Flex, Text } from 'componentry'
import { jsx as _jsx } from 'react/jsx-runtime'
export default function Test(props) {
  // Test that:
  // 1. Components with spread attributes {...props} are not precompiled
  return /*#__PURE__*/ _jsx(Flex, {
    direction: 'column',
    justify: 'center',
    ...props,
    children: /*#__PURE__*/ _jsx('p', {
      className: 'C9Y-Text-base C9Y-Text-body',
      children: 'Precompile testing',
    }),
  })
}
