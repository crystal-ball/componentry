---
componentProps:
  - color: true
  - name: link
    description: Link buttons are styled to appear the same as <code>anchor</code> elements.
    type: boolean
    defaultValue: false
  - name: outline
    description: Outline buttons have a themed outline and white background appearance.
    type: boolean
    defaultValue: false
  - size: true
---

<p className="lead">The Button component is the base component for any element
that has a user interaction in the library. Use Button components
for actions in forms, dialogs and more.</p>

See the <Link to="/concepts/accessibility">A++ accessibility guide</Link> for
information on the importance of using a button element for any user interaction
target that is not an anchor element.

#### Button configurations

<ButtonsDemo />

<PropsDocs componentProps={componentProps} themeColors size />
