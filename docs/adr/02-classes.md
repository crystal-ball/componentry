# Component classes

- Date: 1/11/22

## Context and Problem Statement

The pattern for component classNames is a key interaction point for users, the
library needs to balance brevity with specificity with configurability.

## Decision Drivers

- The end result classNames should be readable and look "good".
- Ideally the library avoids extra string manipulation if possible, eg changing
  `size="small"` to `C9Y-Button-sizeSmall` requires upper-casing first letter,
  adding code and execution overhead.
- User style configuration is easier with camelCase b/c the styles are defined
  in JS.
- The library needs to support users setting specific styles for
  variant+color/size combo. eg set color vs background color for filled vs
  outlined variant colors.
- Library needs to avoid name collisions with any Tailwind classes.
- Overriding classes should be possible by searching for the style definitions
  in Componentry, defining classes with some magic makes customization less
  intuitive.

## Decision Outcome

Component classes are prefixed with `C9Y-Component`, variants don't have a
suffix, modifier classes have suffixes, eg for a Button, variant filled, error
color, and small size:

```html
<button
  className="C9Y-Button-base C9Y-Button-filled C9Y-Button-errorColor C9Y-Button-smallSize"
>
  Button
</button>
```

Classes for sub-components do not have `-base`, eg for Card, there are classes
`C9Y-CardHeader`, `C9Y-CardFooter`, etc. This pattern is intended to direct
styles and usage towards using a single variant for each component style.

## Considered Options

### Decision - Variants

```html
<h1 class="C9Y-Text-base C9Y-Text-h1Variant">Heading 1</h1>
```

Including "Variant" with the className was considered, but it seems heavy
handed, and isn't necessary for distinguishing between variant and color
classes.

### Decision - lowercase kebab

```html
<button
  className="C9Y-Button-base C9Y-Button-filled C9Y-Button-error-color C9Y-Button-small-size"
>
  Button
</button>
```

Using lowercase kebab style was considered, but that makes defining override
styles in JS more difficult.

### Positive Consequences

- Meets all the requirements of Decision Drivers.

### Negative Consequences

- Override styles use the library C9Y- emoji which is fun, but isn't easy to
  copy/paste

## Links <!-- optional -->

- Blueprint is a good kebab case example:
  https://blueprintjs.com/docs/#core/components/button
- MUI example of difficult to configure styles:
  https://github.com/mui-org/material-ui/blob/master/packages/mui-material-next/src/Button/Button.js
