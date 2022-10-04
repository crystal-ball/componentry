import { type CSSProperties } from 'react'
import { Theme } from '../../theme/theme'

//                                         <Table /> styles
// --------------------------------------------------------

export const tableStyles = (theme: Theme): TableStyles => ({
  '.C9Y-Table-base': {
    display: 'block',
    width: '100%',
  },

  '.C9Y-TableHead': {
    // nb: Table head has a border bottom, and then all sibling rows have border
    // top. This keeps a border below the head for tables with body scrolling.
    borderBottom: theme.border.DEFAULT,
  },

  '.C9Y-TableHeader': {
    // Flex display w/ gap enables easy addition of TableSortIcon elements
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing[2],
    fontWeight: theme.fontWeight.bold,
  },

  '.C9Y-TableBody': {},

  '.C9Y-TableRow': {
    position: 'relative',
    display: 'grid',
    // Default table row grid will be columns of even width
    gridAutoColumns: '1fr',
    gridAutoFlow: 'column',

    alignItems: 'center',
    padding: theme.spacing[2],
    gap: theme.spacing[4],

    // Add a border top to every row after the first one (not on first or there would
    // be a double border at the top of the table)
    '& + &': {
      borderTop: theme.border.DEFAULT,
    },

    // Show a hover background for the entire rows when a TableRowLink is
    // present and hovered
    '&:has(.C9Y-TableRowLink:hover)': {
      background: theme.colors.gray[100],
    },
  },

  '.C9Y-TableCell': {},

  // Also provides an option to target+style action cells differently
  '.C9Y-TableActionCell': {
    // Create a new stacking context to overlay any included TableRowLink
    // elements, provides ability to override click, and prevents TableRowLink
    // hover styles from being triggered for row-internal actions
    isolation: 'isolate',
  },

  // --- ROW LINK
  '.C9Y-TableRowLink': {
    // Absolute positioning allows the row child to cover the entire row,
    // providing an accessible link element
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },

  // --- SORT ICON
  '.C9Y-TableSortIcon': {
    transition: 'transform 200ms',

    '& svg': {
      width: '1em',
      height: '1em',
    },
  },

  '.C9Y-TableSortIcon-descSortOrder': {
    transform: 'rotate(180deg)',
  },
})

export interface TableStyles {
  '.C9Y-Table-base': CSSProperties
  '.C9Y-TableHead': CSSProperties
  '.C9Y-TableHeader': CSSProperties
  '.C9Y-TableBody': CSSProperties
  '.C9Y-TableRow': {
    '& + &': CSSProperties
    '&:has(.C9Y-TableRowLink:hover)': CSSProperties
  } & CSSProperties
  '.C9Y-TableCell': CSSProperties
  '.C9Y-TableActionCell': CSSProperties
  '.C9Y-TableRowLink': CSSProperties
  '.C9Y-TableSortIcon': {
    '& svg': CSSProperties
  } & CSSProperties
  '.C9Y-TableSortIcon-descSortOrder': CSSProperties
}
