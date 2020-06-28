Componentry uses very few styles, and when styles are added Bootstrap variables
are used whenever possible. This makes styling Componentry components simple and
consistent, your Bootstrap theme customizations will automatically theme
Componentry.

## Set theme defaults with `<ThemeProvider />`

Customizations for behavior or defaults can be set using the `<ThemeProvider />`
component. The theme provider sets your customizations on the context, and will
be picked up by any child component. The available options are:

- `defaultButtonColor` - Sets the default color for `Button` components.
- `transitionDuration` - Sets the default length for transitions.

```jsx
<ThemeProvider theme={{ defaultButtonColor: 'secondary' }}>
  {/* Any child component will be themed */}
</ThemeProvider>
```

_Note that these defaults can still be overriden for any component instance._

## Dynamic theming

Componentry supports runtime dynamic theming with CSS variables. The SASS
variables define the default theme for Componentry. Additional containers can be
added that update the CSS variables inside them.

1. Continue to allow using SASS variables to set the theme
2. Library handles creating CSS variables for styles
3. Better ability to work within a theme context

Answer:

1. Componentry sets up the CSS variables that will be the "default" theme,
   applications can then create additional theme containers that override the
   CSS variables:

   ```scss
   .rad-theme {
     --primary: #fe6083;
   }
   ```

   In this case, the `.rad-theme` container can be used to override the primary
   color used throughout library.

## Customizing icons

The default library icons can be enabled by setting `$include-icons` true in
your theme. The included icons are displayed with`background-image` styles.

The preferred method for customizing icons is with an inlined `<svg>` with your
icon. Componentry includes a `<use>` element for each icon, and will use your
included icon. The id for any icon used is documented in the component.

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  style="position: absolute; width: 0; height: 0"
>
  <symbol viewBox="0 0 32 32" id="close">
    <path
      d="M32,3.22,19.22,16,32,28.78,28.78,32,16,19.22,3.22,32,0,28.78,12.78,16,0,3.22,3.22,0,16,12.78,28.78,0Z"
    ></path>
  </symbol>
</svg>
```

## Bootstrap enhancements

Componentry enhancements to Bootstrap include:

- Using the `aria-hidden` attribute to handle showing/hiding elements instead of
  a class name. The `aria-hidden` attribute is used in all components for A++
  accesibility, and instead of duplicating the aria status in a class name
  Componentry extends the Bs styles to trigger off the aria status.
- Where possible floats have been replaced with flexbox rules.
- Included `icon` class adds base styles for font icons using SVGs.
- Tooltips and Popovers use a relative positioned container with absolute
  positioned children for DOM placement instead of fixed position. This removes
  necessity of calculating fixed top/left coordinates.
- The content container for any element with active states uses a standard
  classname convention where a `<TYPE>-container` wraps a `<TYPE>-content`
  class. For dropdowns, this means the `.dropdown-menu` class is normalized to
  `dropdown-content`.
