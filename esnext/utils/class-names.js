import clsx from 'clsx';
/** Parses a base className from a component display name */

export const parseBaseCx = displayName => displayName.replace(/[A-Z]/g, (match, offset) => `${offset ? '-' : ''}${match.toLowerCase()}`);

/** Creates the classes for nav elements */
export const navClasses = (variant, {
  fill,
  justify,
  pills,
  vertical
}) => clsx({
  [`${variant}-fill`]: fill,
  [`${variant}-justified`]: justify,
  [`${variant}-pills`]: pills,
  [`${variant}-vertical`]: vertical
});