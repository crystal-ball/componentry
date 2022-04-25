/**
 * @file
 * Utilities for working with complex TS types.
 */

/**
 * Utility type used to merge default component prop types with user defined
 * overrides.
 * @example
 * ```ts
 * export interface ExampleProps {}
 * interface DefaultExampleProps { radical: boolean }
 * type Props = MergePropTypes<DefaultExampleProps, ExampleProps>
 * ```
 */
export type MergePropTypes<Defaults, Overrides> = {
  [Prop in keyof Defaults]: Prop extends keyof Overrides
    ? Overrides[Prop]
    : Defaults[Prop]
}

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
