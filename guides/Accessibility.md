We believe that creating fully accessible content is not just a compliance
checkbox. Accessibility is a core goal that Componentry aims to fulfill with
A++, 💯 level support.

Componentry components are fully accessible out of the box. The library handles
coordinating [WAI-ARIA][] accessibility attributes within components, but
additional attributes may be required when creating application components and
behaviors. Familiarity with the following patterns should provide foundational
knowledge for creating accessible content.

<Alert color="success">
  We're never done improving. Do you know how Componentry can be more
  accessible? Please{' '}
  <a href="https://github.com/crystal-ball/componentry/issues">file an issue</a>
  {' '}letting us know, or better yet submit a pull request 🎉
</Alert>

## Use the `<Button />` component

When creating interactable elements, using the correct HTML element provides
better default accessibility attributes. The `<Button />` component can be
configured to appear and behave the same as an anchor element by passing a
truthy `link` prop. Using buttons for any element that has user interaction is
important because button elements include important accessibility traits by
default, such as keyboard operation.

```jsx
<Button onClick={this.handleEvent} link>
  Click here to trigger an event...
</Button>
```

## Visibility utilities

Content which should be visually hidden, but remain accessible to assistive
technologies such as screen readers, can be styled using the `.sr-only` class.
This can be useful in situations where additional visual information or cues
(such as meaning denoted through the use of color) need to also be conveyed to
non-visual users.

```jsx
<p class="text-danger">
  <span class="sr-only">Danger: </span>
  This action is not reversible
</p>
```

For visually hidden interactive controls, such as traditional "skip" links,
`.sr-only` can be combined with the `.sr-only-focusable` class. This will ensure
that the control becomes visible once focused (for sighted keyboard users).

```jsx
<a class="sr-only sr-only-focusable" href="#content">
  Skip to main content
</a>
```

Componentry uses the `aria-hidden` attribute to handle hiding content that
should not be visible and should be ignored by screen readers. For
presentational elements that should be visible but ignored by screen readers,
the `presentation` role can be used.

```jsx
<span aria-hidden="false">
  This span is visible and accessible by screen readers
</span>
<span aria-hidden="true">
  This span is hidden and ignored by screen readers
</span>
<span aria-hidden="true" role="presentation">
  This span is visible but ignored by screen readers, it should include
  presentational content only!
</span>
```

## Color contrast

Sufficient color contrast is important to provide enough contrast between text
and its background so that it can be read by people with moderately low vision.
A [contrast ratio checker][contrast] can be used to verify your theme colors
have enough contrast.

### Additional resources

* [`eslint-plugin-jsx-a11y`][eslint]
* [Contrast ratio checker][contrast]
* [Web Content Accessibility Guidelines (WCAG) 2.0][wcag]
* [The A11Y Project][a11y-project]
* [MDN accessibility documentation][mdn-accessibility]
* [Tenon.io Accessibility Checker][tenon]
* [Colour Contrast Analyser (CCA)][cca]
* ["HTML Codesniffer" bookmarklet for identifying accessibility
  issues][codesniffer]

_[Thanks to Bootstrap for some of the above utilties and docs][bootstrap]_

<!-- Links -->

[bootstrap]: https://getbootstrap.com/docs/4.0/getting-started/accessibility/
[wai-aria]: https://www.w3.org/WAI/intro/aria
[contrast]: https://leaverou.github.io/contrast-ratio/
[eslint]: https://github.com/evcohen/eslint-plugin-jsx-a11y
[wcag]: https://www.w3.org/TR/WCAG20/
[a11y-project]: http://a11yproject.com/
[mdn-accessibility]: https://developer.mozilla.org/en-US/docs/Web/Accessibility
[tenon]: https://tenon.io/
[cca]: https://developer.paciellogroup.com/resources/contrastanalyser/
[codesniffer]: https://github.com/squizlabs/HTML_CodeSniffer
