<ComponentsList components={['FormGroup', 'Input', 'Input.Field', 'Input.Label', 'Input.Error', 'Input.Description']} />

Create consistent forms

<form>
  <FormGroup>
    <Input>
      <Input.Label>
        Label
      </Input.Label>
      <Input.Field placeholder="Sample input" />
      <Input.Description>
        Provide additional details
      </Input.Description>
      <Input.Error>
        Oh No! <Anchor href="#" color="white" className="text-underline">Go Home</Anchor>
      </Input.Error>
  </Input>
  </FormGroup>
</form>
