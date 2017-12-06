// @flow
import React from 'react'

import PrismHighlighter from 'components/universal/PrismHighlighter'
import { Alert } from 'componentry-lib'

const buttonExample = `<Button onClick={this.handleEvent} link>
  Click here to trigger an event...
</Button>`

const srExample = `<p class="text-danger">
<span class="sr-only">Danger: </span>
This action is not reversible
</p>`

const srFocusExample = `<a class="sr-only sr-only-focusable" href="#content">Skip to main content</a>`

const ariasHiddenExample = `<span aria-hidden="false">
  This span is visible and accessible by screen readers
</span>
<span aria-hidden="true">
  This span is hidden and ignored by screen readers
</span>
<span aria-hidden="true" role="presentation">
  This span is visible but ignored by screen readers, it should include
  presentational content only!
</span>`

export default () => (
  <div>
    <p className="lead">
      We believe that creating fully accessible content is not just a compliance
      checkbox. Accessibility is a core goal that Componentry aims to fulfill with
      A++,{' '}
      <span role="img" aria-label="100 percent">
        💯
      </span>{' '}
      level support.
    </p>
    <p>
      Componentry components are fully accessible out of the box. The library
      handles coordinating{' '}
      <a
        href="https://www.w3.org/WAI/intro/aria"
        target="_blank"
        rel="noopener noreferrer"
      >
        WAI-ARIA
      </a>{' '}
      accessibility attributes within components, but additional attributes may be
      required when creating application components and behaviors. Familiarity with
      the following patterns should provide foundational knowledge for creating
      accessible content.
    </p>
    <Alert color="success">
      We&apos;re never done improving. Do you know how Componentry can be more
      accessible? Please{' '}
      <a href="https://github.com/crystal-ball/componentry/issues">file an issue</a>{' '}
      letting us know, or better yet submit a pull request{' '}
      <span role="img" aria-label="huzzah">
        🎉
      </span>
    </Alert>
    <h4>
      Use the <code>&lt;Button /&gt;</code> component
    </h4>
    <p>
      When creating interactable elements, using the correct HTML element provides
      better default accessibility attributes. The <code>&lt;Button /&gt;</code>{' '}
      component can be configured to appear and behave the same as an anchor element
      by passing a truthy <code>link</code> prop. Using buttons for any element that
      has user interaction is important because button elements include important
      accessibility traits by default, such as keyboard operation.
    </p>
    <PrismHighlighter language="jsx">{buttonExample}</PrismHighlighter>
    <h4>Visibility utilities</h4>
    <p>
      Content which should be visually hidden, but remain accessible to assistive
      technologies such as screen readers, can be styled using the{' '}
      <code>.sr-only</code> class. This can be useful in situations where additional
      visual information or cues (such as meaning denoted through the use of color)
      need to also be conveyed to non-visual users.
    </p>
    <PrismHighlighter language="html">{srExample}</PrismHighlighter>
    <p>
      For visually hidden interactive controls, such as traditional &quot;skip&quot;
      links,
      <code>.sr-only</code> can be combined with the <code>.sr-only-focusable</code>{' '}
      class. This will ensure that the control becomes visible once focused (for
      sighted keyboard users).
    </p>
    <PrismHighlighter language="html">{srFocusExample}</PrismHighlighter>
    <p>
      Componentry uses the <code>aria-hidden</code> attribute to handle hiding
      content that should not be visible and should be ignored by screen readers.
      For presentational elements that should be visible but ignored by screen
      readers, the <code>presentation</code> role can be used.
    </p>
    <PrismHighlighter language="html">{ariasHiddenExample}</PrismHighlighter>
    <h4>Color contrast</h4>
    <p>
      Sufficient color contrast is important to provide enough contrast between text
      and its background so that it can be read by people with moderately low
      vision. A{' '}
      <a
        href="https://leaverou.github.io/contrast-ratio/"
        target="_blank"
        rel="noopener noreferrer"
      >
        contrast ratio checker
      </a>{' '}
      can be used to verify your theme colors have enough contrast.
    </p>
    <h4>Additional resources</h4>
    <ul>
      <li>
        <a
          href="https://github.com/evcohen/eslint-plugin-jsx-a11y"
          target="_blank"
          rel="noopener noreferrer"
        >
          <code>eslint-plugin-jsx-a11y</code>
        </a>
      </li>
      <li>
        <a
          href="https://leaverou.github.io/contrast-ratio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contrast ratio checker
        </a>
      </li>
      <li>
        <a
          href="https://www.w3.org/TR/WCAG20/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Web Content Accessibility Guidelines (WCAG) 2.0
        </a>
      </li>
      <li>
        <a href="http://a11yproject.com/" target="_blank" rel="noopener noreferrer">
          The A11Y Project
        </a>
      </li>
      <li>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Accessibility"
          target="_blank"
          rel="noopener noreferrer"
        >
          MDN accessibility documentation
        </a>
      </li>
      <li>
        <a href="https://tenon.io/" target="_blank" rel="noopener noreferrer">
          Tenon.io Accessibility Checker
        </a>
      </li>
      <li>
        <a
          href="https://developer.paciellogroup.com/resources/contrastanalyser/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Colour Contrast Analyser (CCA)
        </a>
      </li>
      <li>
        <a
          href="https://github.com/squizlabs/HTML_CodeSniffer"
          target="_blank"
          rel="noopener noreferrer"
        >
          “HTML Codesniffer” bookmarklet for identifying accessibility issues
        </a>
      </li>
    </ul>
    <p>
      <a
        href="https://getbootstrap.com/docs/4.0/getting-started/accessibility/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <em>Thanks to Bootstrap for some of the above utilties and docs</em>
      </a>
    </p>
  </div>
)
