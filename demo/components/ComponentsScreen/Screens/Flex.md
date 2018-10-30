---
defaults:
  align: null
  direction: null
  inline: false
  justify: null
  wrap: null
formFields:
  - label: align
    options: ['start', 'center', 'end', 'baseline', 'stretch']
  - label: direction
    options: ['column', 'column-reverse', 'row', 'row-reverse']
  - label: inline
    boolean: true
  - label: justify
    options: ['start', 'center', 'end', 'around', 'between', 'evenly']
  - label: wrap
    options: ['wrap', 'wrap-reverse', 'nowrap']
componentProps:
  - name: align
    description: Sets flex align utility class <code>.align-items-ALIGN</code>
    type: ['start', 'center', 'end', 'baseline', 'stretch']
  - name: direction
    description: Specify the flex direction of the container
    type: ['column', 'column-reverse', 'row', 'row-reverse']
  - name: inline
    description: Sets inline utility class <code>.d-inline-flex</code>
    type: boolean
    default: "false"
  - name: justify
    description: Sets flex justify utility class <code>.flex-justify-JUSTIFY</code>
    type: ['start', 'center', 'end', 'around', 'between']
  - name: wrap
    description: Sets flex wrap utility class <code>.flex-WRAP</code>
    type: ['wrap', 'wrap-reverse', 'nowrap']
---
<ComponentsList components={['Flex']} />

Quickly create flex layouts with shorthand props.

<InteractiveDemo
  defaults={defaults}
  formFields={formFields}
  renderCode={data => `<Flex className="w-100 border border-primary"${props.renderPropsText(data)}>
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

<PropsTabs componentProps={componentProps}  />
