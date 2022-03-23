import { getMergedConfig } from '../../plugin-postcss/configs'

const { theme } = getMergedConfig()

//                                        <Input /> styles
// --------------------------------------------------------

export const inputStyles = {
  // FIELD
  '.C9Y-InputField': {
    display: 'block',
    width: '100%',
    padding: `${theme.spacing[2]} ${theme.spacing[4]}`,
    fontSize: theme.fontSize.body,
    lineHeight: 1,
    color: theme.colors.gray[700],
    backgroundColor: theme.colors.background,
    backgroundClip: 'padding-box',
    border: theme.border.DEFAULT,
    borderRadius: theme.borderRadius.DEFAULT, // Note: This has no effect on <select>s in some browsers, due to the limited style-ability of `<select>`s in CSS.

    transition: 'borderColor 0.2s linear',

    // Customize the `:focus` state to imitate native WebKit styles.
    '&:focus': {
      borderColor: theme.colors.primary[500],
      outline: 0,
      // box-shadow: $input-box-shadow, $input-focus-box-shadow,
    },

    // Placeholder
    '&::placeholder': {
      color: theme.colors.gray[600],
      // Override Firefox's unusual default opacity, see https://github.com/twbs/bootstrap/pull/11526.
      opacity: 1,
    },

    // Disabled and read-only inputs
    //
    // HTML5 says that controls under a fieldset > legend:first-child won't be
    // disabled if the fieldset is disabled. Due to implementation difficulty, we
    // don't honor that edge case, we style them as disabled anyway.
    '&:disabled, &[readonly]': {
      backgroundColor: theme.colors.gray[200],
      // iOS fix for unreadable disabled content, see https://github.com/twbs/bootstrap/issues/11655.
      opacity: 1,
    },

    // Invalid inputs
    '&:invalid, &.C9Y-invalid': {
      background: theme.colors.error[100],
      color: theme.colors.error[500],
      borderColor: theme.colors.error[500],
    },
  },

  // LABEL
  '.C9Y-InputLabel': {
    display: 'inline-block',
    marginBottom: theme.spacing[1],
    color: theme.colors.gray[700],
    fontSize: theme.fontSize.body,
  },

  // DESCRIPTION
  '.C9Y-InputDescription': {
    display: 'block',
    margin: theme.spacing[1],
    color: theme.colors.gray[700],
    fontSize: theme.fontSize.small,
  },

  // Error
  '.C9Y-InputError': {
    display: 'block',
    margin: theme.spacing[1],
    color: theme.colors.error[500],
    fontSize: theme.fontSize.small,
  },
}

// // --------------------------------------------------------
// // Sizes

// .input-field-sm {
//   padding: $input-padding-y-sm $input-padding-x-sm,
//   font-size: $font-size-sm,
//   line-height: $input-line-height-sm,
//   @include border-radius($input-border-radius-sm),
// }

// .input-field-lg {
//   padding: $input-padding-y-lg $input-padding-x-lg,
//   font-size: $font-size-lg,
//   line-height: $input-line-height-lg,
//   @include border-radius($input-border-radius-lg),
// }
