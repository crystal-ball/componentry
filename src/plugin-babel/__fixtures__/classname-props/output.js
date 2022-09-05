import clsx from 'clsx'
import { Text } from 'componentry'
import { jsx as _jsx } from 'react/jsx-runtime'
import { jsxs as _jsxs } from 'react/jsx-runtime'
export default function Test({ className, success }) {
  return /*#__PURE__*/ _jsxs('div', {
    children: [
      /*#__PURE__*/ _jsx('div', {
        className: 'C9Y-Text-base C9Y-Text-body truncate ' + 'string-literal-class',
        children: 'Static className test',
      }),
      /*#__PURE__*/ _jsx('div', {
        className: 'C9Y-Text-base C9Y-Text-body truncate ' + className,
        children: 'Identifier expression className test',
      }),
      /*#__PURE__*/ _jsx('div', {
        className:
          'C9Y-Text-base C9Y-Text-body truncate ' +
          clsx(className, ['call-expression-class']),
        children: 'Call expression className test',
      }),
      /*#__PURE__*/ _jsx('div', {
        className:
          'C9Y-Text-base C9Y-Text-body truncate ' +
          (success ? 'success-class' : undefined),
        children: 'Conditional expression className test',
      }),
    ],
  })
}
