import cx from 'classnames'

/**
 * actionClasses generates the classes for action components.
 * @param {string} base
 * @param {string} variant
 * @param {Object} opts
 * @param {boolean} [opts.active]
 * @param {string} [opts.color]
 * @param {boolean} [opts.disabled]
 * @param {string} [opts.outline]
 * @param {string} [opts.size]
 * @returns {string}
 */
export function actionClasses(base, variant, { active, color, disabled, size }) {
  return cx(base, `${base}-${variant}`, {
    [`${base}-${size}`]: size,
    [`${base}-${color}-color`]: color,
    active,
    // We include a disabled class AND pass disabled prop to btn element for a11y
    disabled,
  })
}
