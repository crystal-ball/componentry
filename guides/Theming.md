Componentry uses very few styles, and when styles are added Bootstrap variables
are used whenever possible. This makes styling Componentry components simple and
consistent, your Bootstrap theme customizations will automatically theme
Componentry.

## Set theme defaults with `<ThemeProvider />`

Customizations for behavior or defaults can be set using the `<ThemeProvider />`
component. The theme provider sets your customizations on the context, and will
be picked up by any child component. The available options are:

* `defaultButtonColor` - Sets the default color for `Button` components.
* `transitionDuration` - Sets the default length for transitions.

```jsx
<ThemeProvider theme={{ defaultButtonColor: 'secondary' }}>
  {/* Any child component will be themed */}
</ThemeProvider>
```

_Note that these defaults can still be overriden for any component instance._

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
    <path d="M32,3.22,19.22,16,32,28.78,28.78,32,16,19.22,3.22,32,0,28.78,12.78,16,0,3.22,3.22,0,16,12.78,28.78,0Z">
    </path>
  </symbol>
</svg>
```
