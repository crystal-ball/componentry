import { Flex, Text } from 'componentry'
import { jsx as _jsx } from 'react/jsx-runtime'
export default function Demo() {
  return /*#__PURE__*/ _jsx('div', {
    className: '\uD83C\uDD72-flex flex flex-col',
    onClick: () => {},
    children: /*#__PURE__*/ _jsx('p', {
      className: '\uD83C\uDD72-text body-variant',
      passThrough: {
        fileName: 'test/file.js',
      },
      children: 'Passthrough props',
    }),
  })
}
