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

#### Modal header alignment

By default the modal header uses flex align-items start to align the close
button to the top right corner. Use class `.align-items-center` to align the
close button to the middle of the header.

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
