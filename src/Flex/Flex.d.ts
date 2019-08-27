interface FlexProps {
  /** Specify the flex direction of the container */
  direction: '' | 'column' | 'column-reverse' | 'row' | 'row-reverse'
  /** Toggles between display flex and display inline-flex */
  inline: boolean
  /** Adds flexbox align-items atomic classes */
  align: '' | 'start' | 'center' | 'end' | 'baseline' | 'stretch'
  /** Adds flexbox justify-content atomic classes */
  justify: '' | 'start' | 'center' | 'end' | 'around' | 'between' | 'evenly'
  /** Sets a flex-wrap utility class */
  wrap: '' | 'wrap' | 'wrap-reverse' | 'nowrap'
}