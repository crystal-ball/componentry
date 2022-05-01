import { getMergedConfig } from '../plugin-postcss/configs'

const { theme } = getMergedConfig()

/*                                                Componentry Styles Foundations
 * -----------------------------------------------------------------------------
 *
 * Adapted from Tailwind's Preflight, updates include:
 * 1. Consolidation of element styles
 * 2. Uses theme values for text defaults
 *
 * Refs:
 * - Modern Normalize:
 *    https://github.com/sindresorhus/modern-normalize/blob/main/modern-normalize.css
 * - Tailwind Preflight:
 *    https://github.com/tailwindlabs/tailwindcss/blob/master/src/css/preflight.css
 * ---------------------------------------------------------------------------*/

/*
MIT License

Copyright (c) Nicolas Gallagher
Copyright (c) Jonathan Neal
Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)
Copyright (c) Adam Wathan
Copyright (c) Jonathan Reinink

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

export const foundationStyles = {
  '*, ::before, ::after': {
    // Prevent padding and border from affecting element width.
    // (https://github.com/mozdevs/cssremedy/issues/4)
    boxSizing: 'border-box',
  },

  // Modern browser focus styles for keyboard users: Will add a focus outline for elements
  // like buttons when keyboard activated only
  ':focus-visible': {
    outline: `${theme.colors.primary[500]} solid 2px`,
    outlineOffset: '2px',
  },

  html: {
    lineHeight: theme.lineHeight.normal, // Use a consistent sensible line-height in all browsers.
    tabSize: 4, // Use a more readable tab size.
    fontFamily: theme.fontFamily.body, // Use the user's configured `sans` font-family by default.
    // text size adjust disabled, assuming sites are built with small screens in mind
    // '-webkit-text-size-adjust': '100%' /* Prevent adjustments of font size after orientation changes in iOS. */,
  },

  body: {
    margin: 0, // Remove the margin in all browsers.
    lineHeight: 'inherit', // Inherit line-height from `html` so users can set them as a class directly on the `html` element.
  },

  'h1, h2, h3, h4, h5, h6': {
    // Remove default text styles and margin for spacing
    fontSize: 'inherit',
    fontWeight: 'inherit',
    margin: 0,
  },

  p: {
    margin: 0,
  },

  'blockquote, dl, dd, figure': {
    margin: 0,
  },

  a: {
    // Reset links to optimize for opt-in styling instead of opt-out.
    color: 'inherit',
    textDecoration: 'inherit',
  },

  'b, strong': {
    // Add the correct font weight in Edge and Safari.
    fontWeight: 'bolder',
  },

  small: {
    // Add the correct font size in all browsers.
    fontSize: '80%',
  },

  'code, kbd, samp, pre': {
    fontFamily: theme.fontFamily.mono, // Use the user's configured `mono` font family by default.
    fontSize: '1em', // Correct the odd `em` font sizing in all browsers.
  },
  pre: {
    margin: 0,
  },

  hr: {
    height: 0, // Add the correct height in Firefox.
    margin: 0, // Remove default spacing
    color: 'inherit', // Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
  },

  sub: {
    bottom: '-0.25em',
  },

  sup: {
    top: '-0.5em',
  },

  'sub, sup': {
    // Prevent `sub` and `sup` elements from affecting the line height in all browsers.
    fontSize: '75%',
    lineHeight: 0,
    position: 'relative',
    verticalAlign: 'baseline',
  },

  'abbr:where([title])': {
    // Add the correct text decoration in Chrome, Edge, and Safari.
    textDecoration: 'underline dotted',
  },

  table: {
    textIndent: 0, // Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
    borderColor: 'inherit', // Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
    borderCollapse: 'collapse', // Remove gaps between table borders by default.
  },

  button: {
    '-webkit-appearance': 'button', // Correct the inability to style clickable types in iOS and Safari.
    backgroundColor: 'transparent', // Remove default button styles.
    backgroundImage: 'none', // Remove default button styles.
    color: 'inherit', // Change the font styles in all browsers.
    cursor: 'pointer', // Set the default cursor for buttons.
    fontFamily: 'inherit', // Change the font styles in all browsers.
    fontSize: '100%', // Change the font styles in all browsers.
    lineHeight: 'inherit', // Change the font styles in all browsers.
    margin: 0, // Remove the margin in Firefox and Safari.
    padding: 0, // Remove default padding in all browsers.
    textTransform: 'none', // Remove the inheritance of text transform in Edge and Firefox.
  },

  "[role='button']": {
    cursor: 'pointer', // Set the default cursor for buttons.
  },

  'input, optgroup, select, textarea': {
    fontFamily: 'inherit', // Change the font styles in all browsers.
    fontSize: '100%', // Change the font styles in all browsers.
    lineHeight: 'inherit', // Change the font styles in all browsers.
    color: 'inherit', // Change the font styles in all browsers.
    margin: 0, // Remove the margin in Firefox and Safari.
    padding: 0, // Remove default padding in all browsers.
  },
  select: {
    textTransform: 'none', // Remove the inheritance of text transform in Edge and Firefox.
  },

  ':-moz-focusring': {
    outline: 'auto', // Use the modern Firefox focus style for all focusable elements.
  },

  ':-moz-ui-invalid': {
    boxShadow: 'none', // Remove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
  },

  progress: {
    verticalAlign: 'baseline', // Add the correct vertical alignment in Chrome and Firefox.
  },

  '::-webkit-inner-spin-button, ::-webkit-outer-spin-button': {
    height: 'auto', // Correct the cursor style of increment and decrement buttons in Safari.
  },

  "[type='search']": {
    '-webkit-appearance': 'textfield', // Correct the odd appearance in Chrome and Safari.
    outlineOffset: '-2px', // Correct the outline style in Safari.
  },

  '::-webkit-search-decoration': {
    '-webkit-appearance': 'none', // Remove the inner padding in Chrome and Safari on macOS.
  },

  '::-webkit-file-upload-button': {
    '-webkit-appearance': 'button', // Correct the inability to style clickable types in iOS and Safari.
    font: 'inherit', // Change font properties to `inherit` in Safari.
  },

  summary: {
    display: 'list-item', // Add the correct display in Chrome and Safari.
  },

  fieldset: {
    margin: 0,
    padding: 0,
  },

  legend: {
    padding: 0,
  },

  'ol, ul, menu': {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },

  textarea: {
    resize: 'vertical', // Prevent resizing textareas horizontally by default.
  },

  'input::placeholder, textarea::placeholder': {
    opacity: 1, // Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
  },

  'svg, canvas, audio, iframe, embed, object': {
    display: 'block', // Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)
    verticalAlign: 'middle', // Align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210) This can trigger a poorly considered lint error in some tools but is included by design.
  },

  'img, video': {
    maxWidth: '100%', // Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
    height: 'auto', // Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
    display: 'block', // Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)
    verticalAlign: 'middle', // Align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210) This can trigger a poorly considered lint error in some tools but is included by design.
  },

  '[hidden]': {
    display: 'none', // Ensure the default browser behavior of the `hidden` attribute.
  },
}
