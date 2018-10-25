---
componentProps:
  - name: block
    description: Sets inline utility class <code>.d-block</code>
    type: boolean
    default: false
  - name: inline
    description: Sets inline utility class <code>.d-inline-block</code>
    type: boolean
    default: false
---
<ComponentsList components={['Block']} />

Quickly create block layouts.

<InteractiveDemo
  defaults={{ block: false, inline: false}}
  formFields={[
    { label: 'block', boolean: true },
    { label: 'inline', boolean: true },
  ]}
  renderCode={data => `<Block width="100%"${props.renderPropsText(data)}>
  <div className="w-25 p2 border">Item</div>
  <div className="w-25 p2 border">Item</div>
  <div className="w-25 p2 border">Item</div>
</Block>`}
  renderComponent={data => (<Block width="100%" {...data}>
  <div className="w-25 p2 border border-success">Item</div>
  <div className="w-25 p2 border border-success">Item</div>
  <div className="w-25 p2 border border-success">Item</div>
</Block>)}
/>

<PropsTabs componentProps={componentProps}  />
