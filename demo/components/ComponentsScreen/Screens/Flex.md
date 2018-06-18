<ComponentsList components={['Anchor', 'Header']} />

Quickly create flex layouts with shorthand props.

<InteractiveDemo
  defaults={{ align: null, justify: null}}
  formFields={[
    { label: 'align', options: ['start', 'center', 'end', 'baseline', 'stretch'] },
    { label: 'justify', options: ['start', 'center', 'end', 'around', 'between'] },
  ]}
  renderCode={({ align, justify }) => `<Flex className="w-100 border border-primary"${align ? ' align="${align}"' : ''}${justify ? ' justify="${justify}"' : ''}>
  <div className="w-25 p2 border">Item</div>
  <div className="w-25 p2 border">Item</div>
  <div className="w-25 p2 border">Item</div>
</Flex>`}
  renderComponent={opts => (<Flex className="w-100 h-100 border border-primary" {...opts}>
  <div className="w-25 p2 border border-success">Item</div>
  <div className="w-25 p2 border border-success">Item</div>
  <div className="w-25 p2 border border-success">Item</div>
</Flex>)}
/>
