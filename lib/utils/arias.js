// @flow
export type ComponentArias = {
  controls?: boolean,
  describedby?: boolean,
  expanded?: boolean,
  haspopup?: boolean,
  hidden?: boolean,
  id?: boolean,
  labelledby?: boolean,
  role?: string
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
  role
}: ComponentArias & { active: boolean, guid: string }) => ({
  'aria-controls': controls ? guid : null,
  'aria-describedby': describedby ? guid : null,
  'aria-expanded': expanded ? String(active) : null,
  'aria-haspopup': haspopup ? 'true' : null,
  'aria-hidden': hidden ? String(!active) : null,
  'aria-labelledby': labelledby ? guid : null,
  id: id ? guid : null,
  role
})
