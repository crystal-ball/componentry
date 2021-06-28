import elementFactory from '../component-factories/element';

/**
 * The library makes use of Buttons that should not have the base `.btn` class. It's
 * more explicit to specify this as a component type (and easier to debug/reason
 * about).
 * @param {boolean} decorated
 */
const makeButton = decorated => elementFactory(decorated ? 'Button' : 'BaseButton', ({
  color,
  link,
  outline,
  size,
  ...props
}) => ({
  tag: 'button',
  type: 'button',
  className: {
    btn: decorated,
    'btn-anchor': link,
    // btn-<COLOR> class is only for regular themed buttons, suppress for other
    // btn theme flavors
    [`btn-${color}`]: color && !link && !outline,
    [`btn-outline-${color}`]: outline,
    'btn-sm': size === 'small',
    'btn-lg': size === 'large'
  },
  ...props
}));

const Button = makeButton(true);
const BaseButton = makeButton(false);
export { BaseButton };
export default Button;