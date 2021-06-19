import { Flex, Input, Text } from 'componentry'
import { jsx as _jsx } from 'react/jsx-runtime'
import { jsxs as _jsxs } from 'react/jsx-runtime'
export default function Demo() {
  return /*#__PURE__*/ _jsxs('div', {
    className: '\uD83C\uDD72-flex flex flex-col justify-center',
    children: [
      /*#__PURE__*/ _jsx('h1', {
        className: '\uD83C\uDD72-text heading-1-variant',
        children: 'Componentry',
      }),
      /*#__PURE__*/ _jsx(Input, {
        value: 'not compiled',
      }),
    ],
  })
}
