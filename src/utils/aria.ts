/**
 * @file
 * Library utility functions for working with props to className+style
 * mappings
 */

import { AriaAttributes } from 'react'

type StringBoolean = 'true' | 'false'

// --------------------------------------------------------
// Element ARIA attributes generator

/** ARIA attributes to compute for an element */
export interface ARIAControls {
  /** Include an `aria-controls` attribute */
  controls?: boolean
  /** Include an `aria-describedby` attribute */
  describedby?: boolean
  /** Include an `aria-expanded` attribute */
  expanded?: boolean
  /** Include an `aria-haspopup` attribute */
  haspopup?: boolean
  /** Include an `aria-hidden` attribute */
  hidden?: boolean
  /** Include an `id` attribute */
  id?: boolean
  /** Include an `aria-labelledby` attribute */
  labelledby?: boolean
  /** Inlclude a `role` attribute */
  role?: string
  /** Include an `aria-selected` attribute */
  selected?: boolean
}

interface ComputeARIAOptions {
  active: boolean | string
  activeId?: string
  guid: string
  type?: 'action' | 'content'
  aria?: ARIAControls
}

interface ComputedARIA extends AriaAttributes {
  id?: string
  role?: string
}

/** Computes ARIA attributes for an element */
export function computeARIA({
  active,
  activeId,
  guid,
  type,
  aria = {},
}: ComputeARIAOptions): ComputedARIA {
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
  } = aria
  const computedAria: ComputedARIA = {}

  if (controls) computedAria['aria-controls'] = guid
  if (describedby) computedAria['aria-describedby'] = guid
  if (haspopup) computedAria['aria-haspopup'] = 'true'
  if (id) computedAria.id = guid
  if (labelledby) computedAria['aria-labelledby'] = guid
  if (role) computedAria.role = role

  if (typeof active === 'boolean') {
    if (expanded) computedAria['aria-expanded'] = String(active) as StringBoolean
    if (hidden) computedAria['aria-hidden'] = String(!active) as StringBoolean
    if (selected) computedAria['aria-selected'] = String(active) as StringBoolean
  }

  // For elements with multiple actions/content groups an activeId is used to
  // track which group is active. Aria values must include addl identifiers
  // to ensure uniqueness
  if (activeId && type === 'action') {
    computedAria.id = `${guid}-${activeId}-tab`
    computedAria['aria-controls'] = `${guid}-${activeId}-content`
    computedAria['aria-selected'] = String(active === activeId) as StringBoolean
  } else if (activeId && type === 'content') {
    computedAria.id = `${guid}-${activeId}-content`
    computedAria['aria-labelledby'] = `${guid}-${activeId}-action`
    computedAria['aria-hidden'] = String(activeId !== active) as StringBoolean
  }

  return computedAria
}
