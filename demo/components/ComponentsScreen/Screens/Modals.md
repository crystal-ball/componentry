---
componentProps:
  - active: true
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
  {({ deactivate }) => (
    <Fragment>
      <Active.Trigger>Trigger Modal</Active.Trigger>
      <Modal size={size}>
        <Modal.Header>
          <Modal.Title>Demo uncontrolled modal</Modal.Title>
          <Close onClick={deactivate} />
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
    </Fragment>
  )}
</Active>`}
  renderComponent={({ size }) => (
    <Active>
      {({ deactivate }) => (
        <Fragment>
          <Active.Trigger>Trigger Modal</Active.Trigger>
          <Modal size={size}>
            <Modal.Header>
              <Modal.Title>Demo uncontrolled modal</Modal.Title>
              <Close onClick={deactivate} />
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
        </Fragment>
      )}
    </Active>
  )}
/>

<SupportingInfo
  classes={['modal-dialog-centered', ]}
  apis={['Active component', 'Sized component']}
/>

<Alert color="info">
  <h4 className="alert-heading">ℹ️ Active usage</h4>
  <div>
    The Modal component is wrapped with the Active.Content subcomponent state
    handlers, so you can use the Modal inside of an Active component for an
    uncontrolled component, or pass in <code>active</code> and{' '}
    <code>deactivate</code> props to control the modal.
  </div>
</Alert>

### <Icon id="stars" /> A++ Accessibility

The Modal and Modal.Title components automatically set up the required aria
attributes for screen readers to link the title content to the modal. For modals
without a visual title, it is best practice to include a Modal.Title instance
with a description of the modal and the class `sr-only`. This will provide the
screen reader context for the modal without affecting layout.

```jsx
<Modal>
  <Modal.Title className="sr-only">Confirm accessibility</Modal.Title>
  <Modal.Body className="text-center">
    <p>
      Using the <code>sr-only</code> class with the Modal.Title<br/>
      provides an accessible title for this header.
    </p>
  </Modal.Body>
</Modal>
```

<PropsTabs componentProps={componentProps} activeComponent size />
