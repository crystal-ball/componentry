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
  selected?: boolean,
}

export type AriasOptions = {
  active?: boolean,
  activeId?: string,
  guid: string,
  type: 'content' | 'trigger',
  arias: ComponentArias,
}

/**
 * Return object of aria attributes using options
 */
export default ({ active, activeId, guid, type, arias: configArias }: AriasOptions) => {
  const {
    controls,
    describedby,
    expanded,
    haspopup,
    hidden,
    id,
    labelledby,
    role,
    selected,
  } = configArias
  const arias = {}

  if (controls) arias['aria-controls'] = guid
  if (describedby) arias['aria-describedby'] = guid
  if (expanded) arias['aria-expanded'] = String(active)
  if (haspopup) arias['aria-haspopup'] = 'true'
  if (hidden) arias['aria-hidden'] = String(!active)
  if (id) arias.id = guid
  if (labelledby) arias['aria-labelledby'] = guid
  if (role) arias.role = role
  if (selected) arias['aria-selected'] = String(active)

  // For elements with multiple trigger/content groups an activeId is used to
  // track which group is active. Aria values must include addl identifiers
  // to ensure uniqueness

  // TODO: should these include guids to ensure ids are unique??
  if (activeId && type === 'trigger') {
    arias.id = `${guid}-${activeId}-tab`
    arias['aria-controls'] = `${guid}-${activeId}-content`
    arias['aria-selected'] = String(active === activeId)
  } else if (activeId && type === 'content') {
    arias.id = `${guid}-${activeId}-content`
    arias['aria-labelledby'] = `${guid}-${activeId}-trigger`
    arias['aria-hidden'] = String(activeId !== active)
  }

  return arias
}
