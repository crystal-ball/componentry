import React from 'react'
import cx from 'classnames'

export interface BaseProps {
  /** Component element */
  as?: React.ElementType
  /** Component className, can be a string, array, or object */
  className?: Parameters<typeof cx>[0]
  // --- Spacing
  /** margin */
  m?: string | number
  /** margin-top */
  mt?: string | number
  /** margin-right */
  mr?: string | number
  /** margin-bottom */
  mb?: string | number
  /** margin-left */
  ml?: string | number
  /** margin-left && margin-right */
  mx?: string | number
  /** margin-top && margin-bottom  */
  my?: string | number
  /** padding */
  p?: string | number
  /** padding-top */
  pt?: string | number
  /** padding-right */
  pr?: string | number
  /** padding-bottom */
  pb?: string | number
  /** padding-left */
  pl?: string | number
  /** padding-left && padding-right */
  px?: string | number
  /** padding-top && padding-bottom */
  py?: string | number
  // --- Typography
  /** Text font-style style */
  fontStyle?: 'italic' | 'unset'
  /** Text font-weight style */
  fontWeight?: 'light' | 'normal' | 'bold'
}
