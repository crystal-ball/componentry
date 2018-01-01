<p className="lead">Button component...</p>

The `Button` component is the base component for any element that has a user
interaction in the library. It is important to use either a button element or a
valid href for any click target in order to support keyboard users _(See A++
Accessibility Guide)_. In cases where a target that looks like a link is
required, but the target causes an in page change, the `Button` component should
be used with the `link` prop.

Docs: color, link, outline, size

<Button>Primary</Button>
