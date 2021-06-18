import { createElement } from 'react';
import clsx from 'clsx';
import { parseBaseCx } from './class-names';
import { componentry } from './componentry'; // Type used to *constrain* what props can be passed into element()

// 📝 Type docs
// ElementOptions<TProps> is needed for componentCx and themeCx which we don't
//   want to define in the component props
// interface ComponentProps is needed to type the shared props as, className,
//   and style

/**
 * Utility function handles calling React.createElement such that the component
 * render element can be specified with an `as` prop and all classes and styles
 * are merged properly.
 *
 * (This lets us create elements that are very flexible with much less verbose
 * code at the definition site)
 */
export function element(displayName, {
  as = 'div',
  className,
  componentCx,
  style,
  themeCx,
  ...merged
}) {
  // The componentry util will: filter out remaining library props, create base
  // styles, and create base classNames

  /* @ts-ignore BaseProps isn't fully typed out to match componentry() yet */
  const {
    utilityCx,
    props,
    styles
  } = componentry(merged);
  return /*#__PURE__*/createElement(as, {
    style: { ...styles,
      ...style
    },
    className: clsx(`🅲-${parseBaseCx(displayName)}`, // Component base className, eg '🅲-btn'
    themeCx, // User defined default className from theme context
    componentCx, // Library defined component specific classNames, eg 'btn-sm'
    className, // User supplied className
    utilityCx // Utility classNames, eg 'mt-xl'
    ),
    ...props
  });
}