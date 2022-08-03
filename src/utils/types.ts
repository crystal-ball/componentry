/* eslint-disable @typescript-eslint/ban-types */
/**
 * @file
 * Utilities for working with complex TS types.
 */

/**
 * Type display utility
 * @see https://effectivetypescript.com/2022/02/25/gentips-4-display/
 */
export type Resolve<T> = T extends Function ? T : { [K in keyof T]: T[K] }

/**
 * Utility type used to merge two types with user defined overrides.
 * @example
 * ```ts
 * export interface ExampleProps {}
 * interface DefaultExampleProps { radical: boolean }
 * type Props = MergeTypes<DefaultExampleProps, ExampleProps>
 * ```
 */
export type MergeTypes<Base, Overrides> = Omit<Base, keyof Overrides> & Overrides

/**
 * Convenience type for reducing boilerplate documenting component style APIs.
 * @internal
 */
export type StylesDefinition = {
  [Rule: string]: any
}

/**
 * Utility type converts a theme definition to version that can be used with
 * `keyof` to extract the appropriate props for that theme value (and
 * specifically converting 'DEFAULT' keys to boolean types), eg for flexGrow:
 * ```tsx
 * interface Theme {
 *   flexGrow: { DEFAULT: 1; 0: 0; }
 * }
 * ```
 * The correct utility prop type of `boolean | 0 | undefined` can be extracted as:
 * ```tsx
 * type FlexGrowProp = keyof UtilityPropsForTheme<Theme['flexGrow']>
 * ```
 */
export type UtilityPropsForTheme<ThemeValue> = {
  [Key in keyof ThemeValue as Key extends 'DEFAULT' ? boolean : Key]: ThemeValue[Key]
}

/**
 * Distributive conditional type utility for using Omit with a union of types,
 * where K will be omitted from every type in the union.
 */
export type DistributiveOmit<T, K extends keyof any> = T extends any ? Omit<T, K> : never
