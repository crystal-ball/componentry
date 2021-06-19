import { useTheme } from '../Theme/Theme';
import { element } from '../utils/element-creator';

/**
 * [Flex component 📝](https://componentry.design/components/flex)
 */
export const Flex = props => {
  const {
    align,
    direction,
    inline,
    justify,
    wrap,
    ...rest
  } = { ...useTheme('Flex', props.__precompile),
    ...props
  }; // Tailwind uses a flex-col class but direction="col" is super wonky
  // => so props use "column" and we replace with "col"

  const computedDirection = direction?.replace('column', 'col');
  return element('Flex', {
    componentCx: {
      'flex': !inline,
      'inline-flex': inline,
      [`flex-${computedDirection}`]: computedDirection,
      [`flex-${wrap}`]: wrap
    },
    alignItems: align,
    justifyContent: justify,
    ...rest
  });
};
Flex.displayName = 'Flex';