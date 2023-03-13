/**
 * @file
 * Utility types for working with complex TS types.
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
