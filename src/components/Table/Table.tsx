import { createElement } from '../../utils/create-element'
import { createStaticComponent } from '../../utils/create-static-component'
import { DistributiveOmit, MergeTypes } from '../../utils/types'
import { UtilityProps } from '../../utils/utility-props'
import { useThemeProps } from '../Provider/Provider'

/** Module augmentation interface for overriding component props' types */
export interface TablePropsOverrides {}

export interface TablePropsDefaults {
  /** Table size */
  size?: 'small' | 'large'
  /** Display variant */
  variant?: 'table'
}

export type TablePropsBase<Elem extends React.ElementType = 'svg'> = UtilityProps &
  MergeTypes<TablePropsDefaults, TablePropsOverrides> & { as?: Elem }

export type TableProps<Elem extends React.ElementType = 'svg'> = TablePropsBase<Elem> &
  DistributiveOmit<React.ComponentPropsWithRef<Elem>, keyof TablePropsBase<Elem>>

export interface TableBodyProps
  extends UtilityProps,
    React.ComponentPropsWithoutRef<'div'> {}
export interface TableActionCellProps
  extends UtilityProps,
    React.ComponentPropsWithoutRef<'div'> {}
export interface TableCellProps
  extends UtilityProps,
    React.ComponentPropsWithoutRef<'div'> {}
export interface TableHeadProps
  extends UtilityProps,
    React.ComponentPropsWithoutRef<'div'> {}
export interface TableHeaderProps
  extends UtilityProps,
    React.ComponentPropsWithoutRef<'div'> {}
export interface TableRowProps
  extends UtilityProps,
    React.ComponentPropsWithoutRef<'div'> {}
export interface TableRowLinkProps
  extends UtilityProps,
    React.ComponentPropsWithoutRef<'a'> {
  as?: React.ElementType
}
export interface TableSortIconProps
  extends UtilityProps,
    Omit<
      React.ComponentPropsWithoutRef<'svg'>,
      | 'display'
      | 'fontFamily'
      | 'fontSize'
      | 'fontWeight'
      | 'height'
      | 'letterSpacing'
      | 'radius'
      | 'width'
    > {
  as?: React.ElementType
  sortOrder: 'asc' | 'desc'
}

/**
 * A Table!!
 * @example
 * ```tsx
 * <Table>
 *   Much table component
 * </Table>
 * ```
 * @see [📝 Table](https://componentry.design/docs/components/table)
 */
export interface Table {
  <Elem extends React.ElementType = 'div'>(props: TableProps<Elem>): React.ReactElement
  displayName: 'Table'
  /**
   * [Table ActionCell component 📝](https://componentry.design/components/table)
   */
  ActionCell: React.FC<TableActionCellProps>
  /**
   * [Table Body component 📝](https://componentry.design/components/table)
   */
  Body: React.FC<TableBodyProps>
  /**
   * [Table Cell component 📝](https://componentry.design/components/table)
   */
  Cell: React.FC<TableCellProps>
  /**
   * [Table Head component 📝](https://componentry.design/components/table)
   */
  Head: React.FC<TableHeadProps>
  /**
   * [Table Header component 📝](https://componentry.design/components/table)
   */
  Header: React.FC<TableHeaderProps>
  /**
   * [Table Row component 📝](https://componentry.design/components/table)
   */
  Row: React.FC<TableRowProps>
  /**
   * [Table RowLink component 📝](https://componentry.design/components/table)
   */
  RowLink: React.FC<TableRowLinkProps>
  /**
   * [Table SortIcon component 📝](https://componentry.design/components/table)
   */
  SortIcon: React.FC<TableSortIconProps>
}

export const Table = ((props) => {
  const {
    size,
    variant = 'table',
    ...rest
  } = {
    ...useThemeProps('Table'),
    ...props,
  }

  return createElement({
    as: 'div',
    componentCx: [
      `C9Y-Table-base C9Y-Table-${variant}`,
      { [`C9Y-Table-${size}Size`]: size },
    ],
    role: 'table',
    ...rest,
  })
}) as Table
Table.displayName = 'Table'

Table.ActionCell = createStaticComponent<TableActionCellProps>('TableActionCell', {
  role: 'cell',
  onClick: (evt) => {
    // Auto stop propagation to integrate nicely with RowLink elements
    evt.stopPropagation()
  },
})
Table.Body = createStaticComponent<TableBodyProps>('TableBody', { role: 'rowgroup' })
Table.Cell = createStaticComponent<TableCellProps>('TableCell', { role: 'cell' })
Table.Head = createStaticComponent<TableHeadProps>('TableHead', { role: 'rowgroup' })
Table.Row = createStaticComponent<TableRowProps>('TableRow', { role: 'row' })
Table.RowLink = createStaticComponent<TableRowLinkProps>('TableRowLink', { as: 'a' })

// TODO: add role based on presence of onClick
Table.Header = createStaticComponent<TableHeaderProps>('TableHeader', {
  role: 'columnheader',
})

// TODO: active and asc-desc classes
Table.SortIcon = function TableSortIcon({ sortOrder, ...rest }: TableSortIconProps) {
  return createElement({
    componentCx: `C9Y-TableSortIcon C9Y-TableSortIcon-${sortOrder}SortOrder`,
    children: (
      <svg
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <line x1='12' y1='5' x2='12' y2='19' />
        <polyline points='19 12 12 19 5 12' />
      </svg>
    ),
    ...rest,
  })
}

/**
 * ## NOTES
 * 1. Why not include the Link functionality in Row? Keeping Row as a div
 *    wrapper ensures that we can precompile it, although it requires more
 *    composition in each instance consumers can create their own composed
 *    component, eg Table.LinkedRow
 *
 *
 * TODO: TYPES
 * 1. Ensure Table can have additional components included
 * 2. Ensure each Table subcomponent types work correctly
 *
 * TODO: SORTING
 * 1. Headers that are sortable need to be role="button"
 * 2. Add direction support to SortIcon
 * 3. Add animatino to SortIcon
 */
