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
 * @experimental
 */
export const Table = staticComponent('Table', {
  role: 'table',
}) as Table

Table.Body = staticComponent<TableBodyProps>('TableBody', { role: 'rowgroup' })
Table.Head = staticComponent<TableHeadProps>('TableHead', { role: 'rowgroup' })
Table.Row = staticComponent<TableRowProps>('TableRow', { role: 'row' })
Table.Header = staticComponent<TableHeaderProps>('TableHeader', { role: 'columnheader' })
Table.Cell = staticComponent<TableCellProps>('TableCell', { role: 'cell' })
