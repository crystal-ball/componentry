// @flow
export type ComponentArias = {
  controls?: boolean | string,
  describedby?: boolean,
  expanded?: boolean,
  haspopup?: boolean,
  hidden?: boolean,
  id?: boolean | string,
  labelledby?: boolean | string,
  role?: string,
  selected?: boolean
}

/**
 * Return object of aria attributes using options
 */
export default ({
  active,
  controls,
  describedby,
  expanded,
  haspopup,
  hidden,
  id,
  labelledby,
  guid,
  role,
  selected
}: ComponentArias & { active: boolean, guid: string }) => {
  const arias = {}

  // Handle standard aria values
  if (describedby) arias['aria-describedby'] = guid
  if (expanded) arias['aria-expanded'] = String(active)
  if (haspopup) arias['aria-haspopup'] = 'true'
  if (hidden) arias['aria-hidden'] = String(!active)
  if (selected) arias['aria-selected'] = String(active)
  if (role) arias.role = role

  // Handle dynamic aria values
  if (controls)
    arias['aria-controls'] = typeof controls === 'string' ? controls : guid
  if (id) arias.id = typeof id === 'string' ? id : guid
  if (labelledby)
    arias['aria-labelledby'] = typeof labelledby === 'string' ? labelledby : guid

  return arias
}
