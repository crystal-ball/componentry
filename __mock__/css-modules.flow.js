// @flow

/*
 * Module provides flow typings for css modules imports. Preferred method is to
 * use namespaced '.component' class. default export should match any property
 * string.
 */
export const component = 'component'

type CSSModule = { [key: string]: string }
const emptyCSSModule: CSSModule = {}
export default emptyCSSModule
