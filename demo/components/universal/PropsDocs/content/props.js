export default {
  elementProps: [
    {
      name: 'as',
      description: 'Element type to create, can be a component or an HTML tag name',
      type: 'Component | string',
      defaultValue: 'div',
    },
    {
      name: 'color',
      description: 'Sets the theme color for the element.',
      type: [
        '"primary"',
        '"secondary"',
        '"success"',
        '"danger"',
        '"warning"',
        '"info"',
        '"light"',
        '"dark"',
        '"none"',
      ],
      defaultValue: 'undefined',
    },
    {
      name: 'direction',
      description: 'Content alignment direction relative to trigger.',
      type: ['"top"', '"right"', '"bottom"', '"left"'],
    },
    {
      name: 'size',
      description: 'Sets the size for the element.',
      type: ['"small"', '"large"'],
      defaultValue: 'undefined',
    },
  ],
  activeProps: [
    {
      name: 'active',
      description:
        'Controls the active state of an element. Providing a value will create a controlled component.<br>ℹ️ For elements with multiple content containers pass an <code>activeId</code> to activate that content container.',
      type: 'boolean | string',
      defaultValue: 'false',
    },
    {
      name: 'defaultActive',
      description:
        '<em>Initializes</em> the active state to <code>true</code>.<br>ℹ️ Pass a truthy value when you want an active component to be initially rendered as active',
      type: 'boolean',
      defaultValue: 'false',
    },
    {
      name: 'activate',
      description:
        "The activate hook is called when an inactive element's <code>Trigger</code> component is clicked. Providing a value will create a controlled component.",
      type: 'function',
      defaultValue: 'undefined',
    },
    {
      name: 'deactivate',
      description:
        "The deactivate hook is called when an active element's <code>Trigger</code> component is clicked. Providing a value will create a controlled component.",
      type: 'function',
      defaultValue: 'undefined',
    },
    {
      name: 'onActivate',
      description: 'Hook called on activate event',
      type: 'function',
      defaultValue: 'undefined',
    },
    {
      name: 'onActivated',
      description: 'Hook called after activate event',
      type: 'function',
      defaultValue: 'undefined',
    },
    {
      name: 'onDeactivate',
      description: 'Hook called on deactivate event',
      type: 'function',
      defaultValue: 'undefined',
    },
    {
      name: 'onDeactivated',
      description: 'Hook called after deactivate event',
      type: 'function',
      defaultValue: 'undefined',
    },
  ],
}
