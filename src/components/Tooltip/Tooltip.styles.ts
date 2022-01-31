/* eslint-disable prefer-template */
import { getMergedConfig } from '../../plugin-postcss/configs'

const { theme } = getMergedConfig()

//                                       <Tooltip /> styles
// --------------------------------------------------------

const tooltipArrowWidth = 10 // in pixels

export const tooltipStyles = {
  '.🅲Tooltip-base': {
    display: 'inline-block',
    position: 'relative',
  },

  // --- ACTION
  '.🅲TooltipAction': {},

  // --- CONTENT POSITIONER
  '.🅲TooltipContent': {
    // Content container overrides the width constraints for parent element
    'width': '300px',
    'position': 'absolute',
    'opacity': 0,
    'transition': 'opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1)',

    '&.🅲-active': {
      opacity: 1,
    },
  },

  // --- CONTENT
  '.🅲TooltipContentContents': {
    backgroundColor: theme.colors.gray[800],
    borderRadius: theme.borderRadius.md,
    color: theme.colors.inverse,
    fontSize: theme.fontSize.sm,
    marginTop: tooltipArrowWidth + 'px',
    maxWidth: '300px',
    padding: '0.25rem 0.5rem',
    position: 'relative',
    display: 'inline-block',
    textAlign: 'left',
    wordWrap: 'break-word', // Allow breaking very long words so they don't overflow the tooltip's bounds
  },

  // --- ARROW
  '.🅲TooltipContentArrow': {
    'height': tooltipArrowWidth * 2 + 'px',
    'left': '0.5rem',
    'overflow': 'hidden',
    'pointerEvents': 'none', // Prevents mouseenter of tip that slightly overlaps action
    'position': 'absolute',
    'top': tooltipArrowWidth * -1 + 'px',
    'width': tooltipArrowWidth * 2 + 'px',

    '&:after': {
      background: theme.colors.gray[800],
      content: `''`,
      height: tooltipArrowWidth,
      left: tooltipArrowWidth / 2 + 'px',
      position: 'absolute',
      top: tooltipArrowWidth * 1.5 + 'px',
      transform: 'rotate(45deg)',
      width: tooltipArrowWidth,
    },
  },
}