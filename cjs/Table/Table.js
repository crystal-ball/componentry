"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Table = void 0;

var _staticComponentBuilder = require("../utils/static-component-builder");

/* eslint-disable @typescript-eslint/no-empty-interface */

/**
 * [Table component 📝](https://componentry.design/components/table)
 * @experimental
 */
var Table = (0, _staticComponentBuilder.staticComponent)('Table', {
  role: 'table'
});
exports.Table = Table;
Table.Body = (0, _staticComponentBuilder.staticComponent)('TableBody', {
  role: 'rowgroup'
});
Table.Head = (0, _staticComponentBuilder.staticComponent)('TableHead', {
  role: 'rowgroup'
});
Table.Row = (0, _staticComponentBuilder.staticComponent)('TableRow', {
  role: 'row'
});
Table.Header = (0, _staticComponentBuilder.staticComponent)('TableHeader', {
  role: 'columnheader'
});
Table.Cell = (0, _staticComponentBuilder.staticComponent)('TableCell', {
  role: 'cell'
});