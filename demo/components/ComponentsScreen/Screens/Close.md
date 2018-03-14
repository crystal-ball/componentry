<ComponentsList components={['Icon']} />

Create consistent close triggers throughout an application.

The Close component creates a Button with a close SVG as content. Using the
component enables applying styles can to the close button and icon specifically
using the `.btn-close` target.

The Close component icon includes an `aria-label` to provide screen readers to
announce the close button purpose.

<InteractiveDemo
  renderCode={() => `<Close onClick={evt => console.log(evt) } />`}
  renderComponent={() => <Close onClick={evt => console.log(evt) } />}
/>

