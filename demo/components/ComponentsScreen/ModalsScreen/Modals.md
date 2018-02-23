<ComponentsList
  components={[
    "Modal",
    "Modal.Header",
    "Modal.Title",
    "Modal.Body",
    "Modal.Footer"
  ]}
/>

Modal component...


<Active>
  <Active.Trigger link={false}>Trigger Modal</Active.Trigger>
  <Modal>
    <Modal.Header>
      <Modal.Title>This is the header</Modal.Title>
      <Active.Trigger link>
        <Icon id="close" className="text-dark" aria-label="close" />
      </Active.Trigger>
    </Modal.Header>
    <Modal.Body>This is a modal</Modal.Body>
    <Modal.Footer>
      <Active.Trigger color="dark" outline>
        Close
      </Active.Trigger>
      <Button color="primary">Save Changes</Button>
    </Modal.Footer>
  </Modal>
</Active>

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
