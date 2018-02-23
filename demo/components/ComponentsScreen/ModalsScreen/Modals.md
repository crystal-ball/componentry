---
componentProps:
  - active: true
  - name: ariaTitle
    description: Provides a modal title for screen readers
    type: string
    defaultValue: ''
  - deactivate: true
  - size: true
---

<ComponentsList
  components={[
    "Modal",
    "Modal.Header",
    "Modal.Title",
    "Modal.Body",
    "Modal.Footer"
  ]}
/>

Add user dialogs to surface additional content without leaving the current
context.

Componentry Modals are wrapped with the `withActive` HOC, enabling all of the
APIs for an Active.Content subcomponent. The Modal component can be used as a
child component of an Active component to quickly setup an uncontrolled Modal,
or the `active` and `deactivate` props can be passed in to create a controlled
modal.

<InteractiveDemo
  defaults={{ size: null }}
  formFields={[
    { label: 'size', options: this.props.sizes },
  ]}
  renderCode={({ size }) => `<Active>
  <Active.Trigger>Trigger Modal</Active.Trigger>
  <Modal${size ? ` size="${size}"` : ''}>
    <Modal.Header>
      <Modal.Title>Demo uncontrolled modal</Modal.Title>
      <Active.Trigger link>
        <Icon id="close" className="text-dark" aria-label="close" />
      </Active.Trigger>
    </Modal.Header>
    <Modal.Body>
      <p>
        This is an uncontrolled modal that will automatically manage its active
        state using the parent Active component.
      </p>
    </Modal.Body>
    <Modal.Footer>
      <Active.Trigger color="dark" outline>
        Close
      </Active.Trigger>
      <Button color="primary">Save Changes</Button>
    </Modal.Footer>
  </Modal>
</Active>`}
  renderComponent={({ size }) => (
    <Active>
      <Active.Trigger>Trigger Modal</Active.Trigger>
      <Modal size={size}>
        <Modal.Header>
          <Modal.Title>Demo uncontrolled modal</Modal.Title>
          <Active.Trigger link>
            <Icon id="close" className="text-dark" aria-label="close" />
          </Active.Trigger>
        </Modal.Header>
        <Modal.Body>
          <p>
            This is an uncontrolled modal that will automatically manage its active
            state using the parent Active component.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Active.Trigger color="dark" outline>
            Close
          </Active.Trigger>
          <Button color="primary">Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </Active>
  )}
/>

<Alert color="info">
  <h4 className="alert-heading">ℹ️ Active usage</h4>
  <div>
    The Modal component is wrapped with the Active.Content subcomponent state
    handlers, so you can use the Modal inside of an Active component for an
    uncontrolled component, or pass in <code>active</code> and{' '}
    <code>deactivate</code> props to control the modal.
  </div>


  <h4 className="alert-heading mt-3">ℹ️ Close button alignment</h4>
  <div>
    By default the modal header flex alignment is set to start to align the close
    button to the top of the header. Use class <code>.align-items-center</code>
    {' '}to align the close button to the vertical middle of the header.
  </div>
</Alert>

<PropsDocs componentProps={componentProps} activeComponent size />
