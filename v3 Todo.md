# Changes

1. Bootstrap mixins are being separated by utility/atomic mixins vs component
   mixins for generating component styles.
1. All of the Bootstrap files are being extracted into the Componentry library
   files.

---

1. The new entry is: `componentry.scss`
    1. `theme.scss`: includes functions/mixins/variables (old Bootstrap)
    1. `initialize`: includes css variables and reboot
    1. `content`: optional include for type, forms, images, tables, code
    1. `components`: includes each of the component styles
    1. `atomics`: includes all of the utility styles

---

## Future work

- Provide optional components for content styles, eg Header, Table, etc.




# Remove deprecated:

Hover mixin and `$enable-hover-media-query` are deprecated.

Origally added during our alphas and maintained during betas, this mixin was
designed to prevent `:hover` stickiness on iOS-an issue where hover styles
would persist after initial touch.

For backward compatibility, we've kept these mixins and updated them to
always return their regular pseudo-classes instead of a shimmed media query.

Issue: https://github.com/twbs/bootstrap/issues/25195
