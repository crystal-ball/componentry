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
    <>
      <Active.Trigger>Trigger Modal</Active.Trigger>
      <Modal size={size}>
        <Modal.Header>
          <Modal.Title>Demo uncontrolled modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            This is an uncontrolled modal that will automatically manage its active
            state using the parent Active component.
          </p>
        </Modal.Body>
        <Modal.Footer className="btn-container-x">
          <Active.Trigger outline="dark" anchor={false}>
            Close
          </Active.Trigger>
          <Button color="primary">Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  )}
</Active>`}
  renderComponent={({ size }) => (
    <Active>
      {({ deactivate }) => (
        <>
          <Active.Trigger>Trigger Modal</Active.Trigger>
          <Modal size={size}>
            <Modal.Header>
              <Modal.Title>Demo uncontrolled modal</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                This is an uncontrolled modal that will automatically manage its active
                state using the parent Active component.
              </p>
            </Modal.Body>
            <Modal.Footer className="btn-container-x">
              <Active.Trigger outline="dark" anchor={false}>
                Close
              </Active.Trigger>
              <Button color="primary">Save Changes</Button>
            </Modal.Footer>
          </Modal>
        </>
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

### Header close button

By default a close button is not included in the Modal.Header component. Pass
{' '}`close` to include an instance of the Close component with the Modal
{' '}`deactivate` set to the Close `onClick`.

```jsx
<Modal.Header close>
  <Modal.Title>Modal with close button</Modal.Title>
</Modal.Header>
```

If you'd like to include a Close button by default for all modals in your
application, you can use the ThemeProvider to set close to true by default.

```jsx
<ThemeProvider theme={{ ModalHeader: { close: true }}}>
  {/* All Modal.Header instances in your app will have close defaulted true */}
</ThemeProvider>
```

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

<PropsTabs componentProps={componentProps} activeComponent />
