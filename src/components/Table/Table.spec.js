import { elementTests } from '../../test/element-tests'
import { Table } from './Table'

describe('<Table />', () => {
  elementTests(Table)
})

/**
 * TABLE FEATURES
 *
 * - Cell widths are configurable
 * - Cells can contain checkboxes, buttons, or menus
 * - Table head can be sticky positioned to top with a scrolling body
 * - Each table row can function as a link, including right click to open
 *    context menu, cmd+click to open in new tab
 *
 * ### Table.Header
 * 1. Display flex, w/ 8px gap for including icon
 *
 * ### Table.SortIcon
 * 1. Show when active or when hovering cell
 * 2. Transition fade opacity
 * 3. Transition rotate 180deg
 *
 * ### Table.ActionCell
 * 1. Has a different className for not showing hover of row link
 * 2. Enables different styling for action elements
 */
