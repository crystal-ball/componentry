import React, { Fragment } from 'react'
import { Active, Icon } from 'componentry'

import { component } from './tab-content.scss'

type Props = {
  contentProps: Array,
}

const renderPropRef = (name, activeId) => (
  <tr key={name}>
    <td className="text-primary">{name}</td>
    <td colSpan="3">
      <Active.Trigger activeId={activeId} anchor>
        <Icon id="share" /> {activeId} props
      </Active.Trigger>
    </td>
  </tr>
)

export default ({ contentProps }: Props) => (
  <table className={`table ${component}`}>
    <thead>
      <tr>
        <th className="name">Name</th>
        <th className="type">Type</th>
        <th className="description">Description</th>
        <th className="default">Default</th>
      </tr>
    </thead>
    <tbody>
      {contentProps.map(({ name, description, type, default: defaultValue, ...refs }) => {
        // Component pages can specify refs to Componentry API props that render a
        // link to that tab
        if (refs.active) return renderPropRef('active', 'Active')
        if (refs.color) return renderPropRef('color', 'Componentry')
        if (refs.deactivate) return renderPropRef('deactivate', 'Active')
        if (refs.direction) return renderPropRef('direction', 'Componentry')
        if (refs.size) return renderPropRef('size', 'Componentry')

        return (
          <tr key={name}>
            <td className="text-primary">{name}</td>
            <td>
              <code>{Array.isArray(type) ? 'Enum' : type}</code>
            </td>
            {/* eslint-disable react/no-danger */}
            <td>
              <div dangerouslySetInnerHTML={{ __html: description }} />
              {Array.isArray(type) ? (
                <div className="small text-muted">
                  Enums: [
                  {type.map((enumerable, idx) => (
                    <Fragment key={enumerable}>
                      {idx ? ', ' : ''}
                      <code>{enumerable}</code>
                    </Fragment>
                  ))}
                  ]
                </div>
              ) : null}
            </td>
            <td>
              <code>{String(defaultValue)}</code>
            </td>
          </tr>
        )
      })}
    </tbody>
  </table>
)
