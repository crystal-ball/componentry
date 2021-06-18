/* eslint-disable @typescript-eslint/no-empty-interface */
import { staticComponent } from '../utils/static-component-builder';

/**
 * [Table component 📝](https://componentry.design/components/table)
 * @experimental
 */
export var Table = staticComponent('Table', {
  role: 'table'
});
Table.Body = staticComponent('TableBody', {
  role: 'rowgroup'
});
Table.Head = staticComponent('TableHead', {
  role: 'rowgroup'
});
Table.Row = staticComponent('TableRow', {
  role: 'row'
});
Table.Header = staticComponent('TableHeader', {
  role: 'columnheader'
});
Table.Cell = staticComponent('TableCell', {
  role: 'cell'
});