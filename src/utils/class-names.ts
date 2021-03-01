import clsx from 'clsx'

/** Parses a base className from a component display name */
export const parseBaseCx = (displayName: string): string =>
  displayName.replace(
    /[A-Z]/g,
    (match, offset) => `${offset ? '-' : ''}${match.toLowerCase()}`,
  )

type NavFlags = {
  fill?: boolean
  justify?: boolean
  pills?: boolean
  vertical?: boolean
}

/** Creates the classes for nav elements */
export const navClasses = (
  variant: string,
  { fill, justify, pills, vertical }: NavFlags,
): string =>
  clsx({
    [`${variant}-fill`]: fill,
    [`${variant}-justified`]: justify,
    [`${variant}-pills`]: pills,
    [`${variant}-vertical`]: vertical,
  })
