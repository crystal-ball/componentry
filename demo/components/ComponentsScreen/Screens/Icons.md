<ComponentsList components={['Icon']} />

Render crisp icons at any size using an inline SVG sprite.

The Icon component simplifies setting up an icon system using an SVG sprite.
After including an inline SVG sprite in the application document, Icon
components can reference SVGs by id with full browser support.

Icon have width and height of 1em, making the SVGs match font size by
default. SVGs automatically inherit font sizes and color, and inline SVGs can
be styled with CSS.

<InteractiveDemo
  renderCode={() => `<h1><Icon id="check-box" /> SVG icon system</h1>`}
  renderComponent={() => <h1><Icon id="check-box" /> SVG icon system</h1>}
/>
