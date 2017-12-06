// @flow
import React, { Component } from 'react'
import classNames from 'classnames'

type Props = {
  className: ?string,
  font: ?boolean,
  id: string,
  title: ?string,
  presentation: ?boolean
}

/**
 * Use the icon component with an svg imported from `/media/icons` to create an icon
 * font.
 */
export default class Icon extends Component<Props> {
  static defaultProps = {
    className: '',
    font: true,
    presentation: false,
    title: null
  }

  constructor(props: Props) {
    super(props)
    // $FlowIgnore: Flow doesn't know about webpack magic comments for dynamic imports
    import(/* webpackMode: "eager", webpackChunkName: "icons" */ `media/icons/${
      props.id
    }.svg`)
  }

  render() {
    const { title, presentation, id, className, font } = this.props

    return (
      <svg
        aria-label={title}
        role={presentation ? 'presentation' : 'img'}
        className={classNames('icon', id, className, { font })}
      >
        <use xlinkHref={`#${id}`} href={`#${id}`} />
      </svg>
    )
  }
}
