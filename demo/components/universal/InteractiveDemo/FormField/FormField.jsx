import React from 'react'
import { Dropdown } from 'componentry'

/* eslint-disable jsx-a11y/label-has-for */

type Props = {
  boolean?: boolean,
  changeValues?: Object,
  id: string,
  label: string,
  options?: Array<string>,
  value: string,
  onChange: Function,
}

const FormField = ({
  boolean,
  changeValues,
  label,
  id,
  options,
  value,
  onChange,
}: Props) => {
  // Determine the form field type (input, checkbox, dropdown) to display
  let field
  if (options) {
    const triggerValue = value === null ? <em>none</em> : value
    field = (
      <Dropdown
        className="ml-2"
        onDeactivated={e => {
          let val
          if (e.target.value && e.target.value === 'none') {
            val = null
          } else if (e.target.value) {
            val = e.target.value
          } else {
            val = value
          }

          onChange({ [id]: val })
        }}
      >
        <Dropdown.Trigger link>{triggerValue}</Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Item value="none" className="font-italic font-weight-light">
            none
          </Dropdown.Item>
          <div className="dropdown-divider" />
          {options.map(option => (
            <Dropdown.Item key={option} value={option}>
              {option}
            </Dropdown.Item>
          ))}
        </Dropdown.Content>
      </Dropdown>
    )
  } else if (boolean) {
    field = (
      <input
        id="outline"
        className="form-check-input ml-2"
        type="checkbox"
        checked={value}
        onChange={() => {
          if (changeValues) {
            onChange(changeValues[String(!value)])
          } else {
            onChange({ [id]: !value })
          }
        }}
      />
    )
  }

  return (
    <div className="form-group row mb-2" key={id || label}>
      <label htmlFor="hello" className="col-sm-6 col-form-label py-0">
        {label}:
      </label>
      <div className="col-sm-6">{field}</div>
    </div>
  )
}

export default FormField
