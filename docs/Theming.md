# Theming

- Theme shape matches Tailwind for easy integration
- Component styles use theme values for creating default styles

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

## Future

- Explore using CSS variables for dynamic theming
