import React, { Fragment } from 'react'
import { Active } from 'componentry'

import { component } from './props-docs-content.scss'

type Props = {
  contentProps: Array,
}

const renderPropRef = (name, activeId) => (
  <tr key={name}>
    <td className="text-info">{name}</td>
    <td colSpan="3">
      See{' '}
      <Active.Trigger activeId={activeId} link>
        element props - {name}
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
      {contentProps.map(({ name, description, type, defaultValue, ...refs }) => {
        // Component pages can specify refs to Componentry API props that render a
        // link to that tab
        if (refs.active) return renderPropRef('active', 'active')
        if (refs.color) return renderPropRef('color', 'element')
        if (refs.deactivate) return renderPropRef('deactivate', 'active')
        if (refs.direction) return renderPropRef('direction', 'element')
        if (refs.size) return renderPropRef('size', 'element')

        return (
          <tr key={name}>
            <td className="text-info">{name}</td>
            <td>
              {Array.isArray(type) ? (
                <Fragment>
                  <div className="mb-2">
                    <code>enum</code>
                  </div>
                  <div className="text-muted small">Enums: [</div>
                  <div className="text-muted small">
                    {type.map(enumType => (
                      <Fragment key={enumType}>
                        &nbsp;&nbsp;<code key={enumType}>{enumType}</code>
                        <br />
                      </Fragment>
                    ))}
                  </div>
                  <div className="text-muted small">]</div>
                </Fragment>
              ) : (
                <code>{type}</code>
              )}
            </td>
            {/* eslint-disable react/no-danger */}
            <td dangerouslySetInnerHTML={{ __html: description }} />
            <td>
              <code>{defaultValue}</code>
            </td>
          </tr>
        )
      })}
    </tbody>
  </table>
)
