// postcss-js has no TS definitions, this satisfies types in src/ and is
// probably correct ¯\_(ツ)_/¯
declare module 'postcss-js' {
  import { Parser } from 'postcss'

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const parser: Parser = () => {}
  export default parser
}
