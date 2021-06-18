/**
 * Library utility functions for working with props to className+style mappings
 * @module
 */
// --------------------------------------------------------
// Element ARIA attributes generator

/** ARIA attributes to compute for an element */

/** Computes ARIA attributes for an element */
export function computeARIA({
  active,
  activeId,
  guid,
  type,
  aria = {}
}) {
  const {
    controls,
    describedby,
    expanded,
    haspopup,
    hidden,
    id,
    labelledby,
    role,
    selected
  } = aria;
  const computedAria = {};
  if (controls) computedAria['aria-controls'] = guid;
  if (describedby) computedAria['aria-describedby'] = guid;
  if (haspopup) computedAria['aria-haspopup'] = 'true';
  if (id) computedAria.id = guid;
  if (labelledby) computedAria['aria-labelledby'] = guid;
  if (role) computedAria.role = role;

  if (typeof active === 'boolean') {
    if (expanded) computedAria['aria-expanded'] = String(active);
    if (hidden) computedAria['aria-hidden'] = String(!active);
    if (selected) computedAria['aria-selected'] = String(active);
  } // For elements with multiple actions/content groups an activeId is used to
  // track which group is active. Aria values must include addl identifiers
  // to ensure uniqueness


  if (activeId && type === 'action') {
    computedAria.id = `${guid}-${activeId}-tab`;
    computedAria['aria-controls'] = `${guid}-${activeId}-content`;
    computedAria['aria-selected'] = String(active === activeId);
  } else if (activeId && type === 'content') {
    computedAria.id = `${guid}-${activeId}-content`;
    computedAria['aria-labelledby'] = `${guid}-${activeId}-action`;
    computedAria['aria-hidden'] = String(activeId !== active);
  }

  return computedAria;
}