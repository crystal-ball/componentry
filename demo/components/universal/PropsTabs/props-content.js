const themeColors = [
  '"primary"',
  '"secondary"',
  '"success"',
  '"danger"',
  '"warning"',
  '"info"',
  '"light"',
  '"dark"',
]

// Static content for the Componentry and Active props
export const activeProps = [
  {
    name: 'active',
    description:
      'Controls the active state of an element. Providing a value will create a controlled component.<br>ℹ️ For elements with multiple content containers pass an <code>activeId</code> to activate that content container.',
    type: 'boolean | string',
    default: false,
  },
  {
    name: 'defaultActive',
    description:
      '<em>Initializes</em> the active state to <code>true</code>.<br>ℹ️ Pass a truthy value when you want an active component to be initially rendered as active',
    type: 'boolean',
    default: false,
  },
  {
    name: 'mouseEvents',
    description:
      'For elements with mouseEvents they can be disabled by passing a falsey value',
    type: 'boolean',
    default: true,
  },
  {
    name: 'activate',
    description:
      "The activate hook is called when an inactive element's <code>Trigger</code> component is clicked. Providing a value will create a controlled component.",
    type: 'function',
  },
  {
    name: 'deactivate',
    description:
      "The deactivate hook is called when an active element's <code>Trigger</code> component is clicked. Providing a value will create a controlled component.",
    type: 'function',
  },
  {
    name: 'onActivate',
    description: 'Hook called on activate event',
    type: 'function',
  },
  {
    name: 'onActivated',
    description: 'Hook called after activate event',
    type: 'function',
  },
  {
    name: 'onDeactivate',
    description: 'Hook called on deactivate event',
    type: 'function',
  },
  {
    name: 'onDeactivated',
    description: 'Hook called after deactivate event',
    type: 'function',
  },
]

export const componentryProps = [
  {
    name: 'as',
    description: 'Element type to create, can be a component or an HTML tag name',
    type: 'Component | string',
    default: 'div',
  },
  {
    name: 'bg',
    description: 'Sets background color utility class <code>.bg-COLOR</code>',
    type: themeColors,
  },
  {
    name: 'border',
    description: 'Set an inline border style',
    type: 'string',
  },
  {
    name: 'borderTop',
    description: 'Set an inline border top style',
    type: 'string',
  },
  {
    name: 'borderRight',
    description: 'Set an inline border right style',
    type: 'string',
  },
  {
    name: 'borderBottom',
    description: 'Set an inline border bottom style',
    type: 'string',
  },
  {
    name: 'borderLeft',
    description: 'Set an inline border left style',
    type: 'string',
  },
  {
    name: 'borderColor',
    description: 'Sets border color utility class <code>.border-BORDER_COLOR</code>',
    type: [...themeColors, '"border"'],
  },
  {
    name: 'color',
    description:
      'Sets font color utility class <code>.text-COLOR</code> (Unless used in component props for components with colors, eg Button)',
    type: [...themeColors, '"muted"', '"body"'],
  },
  {
    name: 'direction',
    description: 'Content alignment direction relative to trigger',
    type: ['"top"', '"right"', '"bottom"', '"left"'],
  },
  {
    name: 'fontWeight',
    description: 'Sets font weight utility class <code>.text-FONT_WEIGHT</code>',
    type: ['light', 'normal', 'bold'],
  },
  {
    name: 'fontSize',
    description: 'Sets an inline font size style',
    type: 'number | string',
  },
  {
    name: 'height',
    description: 'Set an inline height style',
    type: 'number | string',
  },
  {
    name: 'minHeight',
    description: 'Set an inline min height style',
    type: 'number | string',
  },
  {
    name: 'maxHeight',
    description: 'Set an inline max height style',
    type: 'number | string',
  },
  {
    name: 'italic',
    description: 'Sets italic font utility class <code>.text-italic</code>',
    type: 'boolean',
    default: false,
  },
  {
    name: 'letterSpacing',
    description: 'Sets an inline letter spacing style',
    type: 'number | string',
  },
  {
    name: 'lineHeight',
    description: 'Sets an inline line height style',
    type: 'number | string',
  },
  {
    name: 'm, mt, mr, mb, ml, mx, my',
    description:
      'Set a margin, pass a number for a theme class or a string for a specific override',
    type: 'number | string',
  },
  {
    name: 'monospace',
    description: 'Sets monospace font utility class <code>.text-monospace</code>',
    type: 'boolean',
    default: false,
  },
  {
    name: 'p, pt, pr, pb, pl, px, py',
    description:
      'Set a padding, pass a number for a theme class or a string for a specific override',
    type: 'number | string',
  },
  {
    name: 'size',
    description:
      'Sets font size utility class <code>.text-SIZE</code> (Unless used in component props for components with sizes, eg Button)',
    type: ['"sm"', '"lg"'],
  },
  {
    name: 'textAlign',
    description: 'Sets text alignment utility class <code>.text-TEXT_ALIGN</code>',
    type: ['"left"', '"center"', '"right"', '"justified"'],
  },
  {
    name: 'uppercase',
    description: 'Sets uppercase font utility class <code>.text-uppercase</code>',
    type: 'boolean',
    default: false,
  },
  {
    name: 'width',
    description: 'Set an inline width style',
    type: 'number | string',
  },
  {
    name: 'minWidth',
    description: 'Set an inline min width style',
    type: 'number | string',
  },
  {
    name: 'maxWidth',
    description: 'Set an inline max width style',
    type: 'number | string',
  },
]
