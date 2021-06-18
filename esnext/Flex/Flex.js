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
  };
  return element('Flex', {
    componentCx: {
      'flex': !inline,
      'inline-flex': inline,
      [`flex-${direction}`]: direction,
      [`flex-${wrap}`]: wrap
    },
    alignItems: align,
    justifyContent: justify,
    ...rest
  });
};
Flex.displayName = 'Flex';