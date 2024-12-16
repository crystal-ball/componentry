import { Text } from 'componentry'
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
export default function Test({ success, position, ...rest }) {
  return /*#__PURE__*/ _jsxs('div', {
    children: [
      /*#__PURE__*/ _jsx('div', {
        className: 'C9Y-Text-base C9Y-Text-body font-bold',
        children: 'Implicit boolean test',
      }),
      /*#__PURE__*/ _jsx('div', {
        className: 'C9Y-Text-base C9Y-Text-body flex',
        children: 'String literal test',
      }),
      /*#__PURE__*/ _jsx('div', {
        className: 'C9Y-Text-base C9Y-Text-body font-bold',
        children: 'Boolean literal expression test',
      }),
      /*#__PURE__*/ _jsx('div', {
        className: 'C9Y-Text-base C9Y-Text-body uppercase',
        children: 'String literal expression test',
      }),
      /*#__PURE__*/ _jsx('div', {
        className: 'C9Y-Text-base C9Y-Text-body pt-20',
        children: 'Numeric literal expression test',
      }),
      /*#__PURE__*/ _jsx(Text, {
        position: position,
        children: 'Identifier expression test',
      }),
      /*#__PURE__*/ _jsx(Text, {
        color: success ? 'success' : 'error',
        children: 'Conditional expression test',
      }),
      /*#__PURE__*/ _jsx(Text, {
        mt: computeMargin(position),
        children: 'Call expression test',
      }),
      /*#__PURE__*/ _jsx(Text, {
        ...rest,
        children: 'Spread expression test',
      }),
    ],
  })
}
