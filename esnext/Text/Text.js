/* eslint-disable @typescript-eslint/no-empty-interface */
import { useTheme } from '../Theme/Theme';
import { element } from '../utils/element-creator';
/** Element used for each variant */

const defaultElementsMap = {
  'heading-1': 'h1',
  'heading-2': 'h2',
  'heading-3': 'h3',
  'body': 'p',
  'code': 'code',
  'small': 'small'
}; // Module augmentation interface for overriding component props' types

/**
 * [Text component 📝](https://componentry.design/components/text)
 */
export const Text = props => {
  const {
    variant = 'body',
    align,
    bold,
    color,
    inline,
    elementsMap = {},
    ...rest
  } = { ...useTheme('Text', props.__precompile),
    ...props
  };
  return element('Text', {
    as: inline ? 'span' : elementsMap[variant] || defaultElementsMap[variant] || 'p',
    componentCx: {
      [`${variant}-variant`]: !inline
    },
    fontColor: color,
    fontWeight: bold ? 'bold' : null,
    textAlign: align,
    ...rest
  });
};
Text.displayName = 'Text';