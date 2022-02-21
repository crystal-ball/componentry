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
