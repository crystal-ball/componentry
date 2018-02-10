import React, { Fragment } from 'react'
import { Active } from 'componentry'

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
      {contentProps.map(
        ({ name, description, type, defaultValue, color, size }) => {
          if (color) {
            return (
              <tr key="color">
                <td className="text-info">color</td>
                <td colSpan="3">
                  See{' '}
                  <Active.Trigger activeId="element" link>
                    element props - color
                  </Active.Trigger>
                </td>
              </tr>
            )
          }

          if (size) {
            return (
              <tr key="size">
                <td className="text-info">size</td>
                <td colSpan="3">
                  See{' '}
                  <Active.Trigger activeId="element" link>
                    element props - size
                  </Active.Trigger>
                </td>
              </tr>
            )
          }

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
        },
      )}
    </tbody>
  </table>
)
