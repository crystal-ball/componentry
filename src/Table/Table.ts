/* eslint-disable @typescript-eslint/no-empty-interface */
import { staticComponent } from '../utils/static-component-builder'
import { ComponentBaseProps } from '../utils/types'

export interface TableProps extends ComponentBaseProps<'div'> {}
export interface TableBodyProps extends ComponentBaseProps<'div'> {}
export interface TableCellProps extends ComponentBaseProps<'div'> {}
export interface TableHeadProps extends ComponentBaseProps<'div'> {}
export interface TableHeaderProps extends ComponentBaseProps<'div'> {}
export interface TableRowProps extends ComponentBaseProps<'div'> {}

export interface Table {
  (props: TableProps): React.ReactElement
  displayName: 'Table'
  /**
   * [Table body component 📝](https://componentry.design/components/table)
   */
  Body: React.FC<TableBodyProps>
  /**
   * [Table cell component 📝](https://componentry.design/components/table)
   */
  Cell: React.FC<TableCellProps>
  /**
   * [Table head component 📝](https://componentry.design/components/table)
   */
  Head: React.FC<TableHeadProps>
  /**
   * [Table header component 📝](https://componentry.design/components/table)
   */
  Header: React.FC<TableHeaderProps>
  /**
   * [Table row component 📝](https://componentry.design/components/table)
   */
  Row: React.FC<TableRowProps>
}

/**
 * [Table component 📝](https://componentry.design/components/table)
 */
export const Table = staticComponent('Table', {
  componentCx: '🅲-table',
  role: 'table',
}) as Table

// --------------------------------------------------------
// Table.Body

Table.Body = staticComponent('TableBody', {
  componentCx: '🅲-table-body',
  role: 'rowgroup',
})

// --------------------------------------------------------
// Table.Head

Table.Head = staticComponent('TableHead', {
  componentCx: '🅲-table-head',
  role: 'rowgroup',
})

// --------------------------------------------------------
// Table.Row

Table.Row = staticComponent('TableRow', {
  componentCx: '🅲-table-row',
  role: 'row',
})

// --------------------------------------------------------
// Table.Header

Table.Header = staticComponent('TableHeader', {
  componentCx: '🅲-table-header',
  role: 'columnheader',
})

// --------------------------------------------------------
// Table.Cell

Table.Cell = staticComponent('TableCell', {
  componentCx: '🅲-table-cell',
  role: 'cell',
})
