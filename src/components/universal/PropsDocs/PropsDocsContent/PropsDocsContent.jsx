import React, { Fragment } from 'react'

import { component } from './props-docs-content.scss'

type Props = {
  contentProps: Array,
}

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
      {contentProps.map(({ name, description, type, defaultValue }) => (
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
                      <code key={enumType}>{enumType}</code>
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
      ))}
    </tbody>
  </table>
)
