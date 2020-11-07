/** Parses a base className from a component display name */
export const parseBaseCx = (displayName: string): string =>
  displayName.replace(
    /[A-Z]/g,
    (match, offset) => `${offset ? '-' : ''}${match.toLowerCase()}`,
  )
