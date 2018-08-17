// @flow
/* eslint-disable import/prefer-default-export */

/**
 * Find the closest DOM parent with the a `data-id` matching `guid`. If a matching
 * ancestor is not found returns `null`
 */
export const closest = (target: Node, guid: string): ?Node => {
  // $FlowIgnore
  if (target.dataset && target.dataset.id === guid) return target
  if (target.parentNode) return closest(target.parentNode, guid)

  // Default null when no matches are found
  return null
}
