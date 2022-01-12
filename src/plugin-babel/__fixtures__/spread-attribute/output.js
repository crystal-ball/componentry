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
      className: '\uD83C\uDD72Text-base \uD83C\uDD72Text-body',
      children: 'Precompile testing',
    }),
  })
}
