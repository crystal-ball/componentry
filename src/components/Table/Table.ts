import React from 'react'
import { createStaticComponent } from '../../utils/create-static-component'
import { UtilityProps } from '../../utils/utility-props'

export interface TableProps extends UtilityProps, React.ComponentPropsWithoutRef<'div'> {}
export interface TableBodyProps
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
export const Table = createStaticComponent('Table', {
  role: 'table',
}) as Table

Table.Body = createStaticComponent<TableBodyProps>('TableBody', { role: 'rowgroup' })
Table.Head = createStaticComponent<TableHeadProps>('TableHead', { role: 'rowgroup' })
Table.Row = createStaticComponent<TableRowProps>('TableRow', { role: 'row' })
Table.Header = createStaticComponent<TableHeaderProps>('TableHeader', {
  role: 'columnheader',
})
Table.Cell = createStaticComponent<TableCellProps>('TableCell', { role: 'cell' })
