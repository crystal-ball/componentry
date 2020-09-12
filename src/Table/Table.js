import { staticComponent } from '../factories/static-component'

/**
 * [Table component 📝](https://componentry.design/components/table)
 */
export const Table = staticComponent('Table', {
  componentCx: '🅲-table',
  role: 'table',
})

/**
 * [Table head component 📝](https://componentry.design/components/table)
 */
Table.Head = staticComponent('TableHead', {
  componentCx: '🅲-table-head',
  role: 'rowgroup',
})

/**
 * [Table body component 📝](https://componentry.design/components/table)
 */
Table.Body = staticComponent('TableBody', {
  componentCx: '🅲-table-body',
  role: 'rowgroup',
})

/**
 * [Table row component 📝](https://componentry.design/components/table)
 */
Table.Row = staticComponent('TableRow', {
  componentCx: '🅲-table-row',
  role: 'row',
})

/**
 * [Table header component 📝](https://componentry.design/components/table)
 */
Table.Header = staticComponent('TableHeader', {
  componentCx: '🅲-table-header',
  role: 'columnheader',
})

/**
 * [Table cell component 📝](https://componentry.design/components/table)
 */
Table.Cell = staticComponent('TableCell', {
  componentCx: '🅲-table-cell',
  role: 'cell',
})
