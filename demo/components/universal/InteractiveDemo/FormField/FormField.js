import React from 'react'
import { Dropdown } from 'componentry'
import classNames from 'classnames'

import { component } from './form-field.scss'

/* eslint-disable jsx-a11y/label-has-for */

type Props = {
  boolean?: boolean,
  changeValues?: Object,
  label: string,
  options?: Array<string>,
  string?: boolean,
  value: string,
  onChange: Function,
}

const FormField = ({
  boolean,
  changeValues,
  label,
  onChange,
  options,
  string,
  value,
}: Props) => {
  // Determine the form field type (input, checkbox, dropdown) to display
  let field
  if (options) {
    const triggerValue = value === null ? <em>none</em> : value
    field = (
      <Dropdown
        className='ml-2 dropdown-field'
        onDeactivated={e => {
          let val
          if (e.target.value && e.target.value === 'none') {
            val = null
          } else if (e.target.value) {
            val = e.target.value
          } else {
            val = value
          }

          onChange({ [label]: val })
        }}
      >
        <Dropdown.Trigger>{triggerValue}</Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Item value='none' className='font-italic font-weight-light'>
            none
          </Dropdown.Item>
          <div className='dropdown-divider' />
          {options.map(option => (
            <Dropdown.Item key={option} value={option}>
              {option}
            </Dropdown.Item>
          ))}
        </Dropdown.Content>
      </Dropdown>
    )
  } else if (string) {
    field = (
      <input
        className='form-control'
        onChange={e => {
          onChange({ [label]: e.target.value })
        }}
      />
    )
  } else if (boolean) {
    field = (
      <input
        id={label}
        className='form-check-input ml-2'
        type='checkbox'
        checked={value}
        onChange={() => {
          if (changeValues) {
            onChange(changeValues[String(!value)])
          } else {
            onChange({ [label]: !value })
          }
        }}
      />
    )
  }

  return (
    <div className={`form-group row mb-2 ${component}`} key={label}>
      <label
        htmlFor={label}
        className={classNames('col-sm-5', {
          'col-form-label': !boolean,
          'form-check-label': boolean,
        })}
      >
        <code>{label}</code>:
      </label>
      <div className='col-sm-7'>{field}</div>
    </div>
  )
}

export default FormField
