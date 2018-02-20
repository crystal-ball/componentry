import classNames from 'classnames'

import Button from '../Button/Button'
import elementFactory from '../component-factories/element-factory'

export default elementFactory({
  name: 'NavItem',
  computedClassName: (ctxClassName, propsClassName, { active, href, to }) =>
    classNames('nav-item', ctxClassName, propsClassName, {
      active,
      'nav-link': href || to,
    }),
  computedTag: props => (props.onClick ? Button : 'a'),
  clean: ['active'],
})
