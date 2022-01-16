import clsx from 'clsx'

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
