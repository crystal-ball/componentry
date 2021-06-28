import { createElement } from 'react';
import { object, shape } from 'prop-types';
import classNames from 'classnames';

/**
 *
 * @export
 * @returns {Component} React functional stateless component with base classes.
 */
export default ((name, elementComputer) => {
  const Element = ({
    className: propsClassName,
    ...props
  }, ctx = {
    THEME: {}
  }) => {
    const ctxProps = ctx.THEME ? ctx.THEME[name] : null;
    let mergedProps = props;
    let ctxClassName = null;

    if (ctxProps) {
      mergedProps = { ...ctxProps,
        ...props
      };
      ctxClassName = ctxProps.className;
    }

    const computed = typeof elementComputer === 'function' ? elementComputer(mergedProps, ctx) : { ...elementComputer,
      ...props
    };
    const {
      as,
      children,
      className,
      tag,
      ...computedProps
    } = computed;
    return createElement(as || tag || 'div', {
      className: classNames(ctxClassName, className, propsClassName),
      ...computedProps
    }, children);
  };

  Element.displayName = name;
  Element.contextTypes = {
    THEME: shape({
      [name]: object
    }),
    [name]: object
  };
  return Element;
});