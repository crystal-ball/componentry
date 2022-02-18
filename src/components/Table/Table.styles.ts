import { getMergedConfig } from '../../plugin-postcss/configs'

const { theme } = getMergedConfig()

//                                        <Input /> styles
// --------------------------------------------------------

export const tableStyles = {
  '.🅲Table-base': {
    display: 'block',
    width: '100%',
  },

  '.🅲TableHead': {
    // 📝 Notes
    // - Borders: Table head has a border bottom, and then sibling rows have border top. This
    //   keeps a border below the head for tables with body scrolling.
    borderBottom: `${theme.borderWidth.DEFAULT} solid ${theme.borderColor.DEFAULT}`,
  },

  '.🅲TableHeader': {
    fontWeight: theme.fontWeight.bold,
    padding: theme.spacing[1],
  },

  '.🅲TableBody': {},

  '.🅲TableRow': {
    display: 'grid',
    // grid-template-columns: repeat(auto-fit, minmax(1px, 1fr));
    // Default table row grid will be columns of even width
    gridAutoColumns: '1fr',
    gridAutoFlow: 'column',
    // Add a border top to every row after the first one (not on first or there would
    // be a double border at the top of the table)
    '& + &': {
      borderTop: `${theme.borderWidth.DEFAULT} solid ${theme.borderColor.DEFAULT}`,
    },
  },

  '.🅲TableCell': {
    padding: theme.spacing[1],
  },
}
