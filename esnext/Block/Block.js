import { useTheme } from '../Theme/Theme';
import { element } from '../utils/element-creator';

/**
 * [Block component 📝](https://componentry.design/components/block)
 */
export const Block = props => {
  const {
    inline,
    ...rest
  } = { ...useTheme('Block', props.__precompile),
    ...props
  };
  return element('Block', {
    componentCx: {
      'block': !inline,
      'inline-block': inline
    },
    ...rest
  });
};
Block.displayName = 'Block';