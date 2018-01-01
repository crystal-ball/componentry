import React, { Fragment } from 'react'

/* eslint-disable react/no-danger */

type Props = {
  contentProps: Array,
}

export default ({ contentProps }: Props) => (
  <table className="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Type</th>
        <th>Default</th>
      </tr>
    </thead>
    <tbody>
      {contentProps.map(({ name, description, type, defaultValue }) => (
        <tr key={name}>
          <td>{name}</td>
          <td dangerouslySetInnerHTML={{ __html: description }} />
          {/* {Array.isArray(type) && (
            <Fragment>
              <div className="text-muted small">
                Enums: [
                {type.map((enumType, idx) => (
                  <Fragment>
                    {idx ? ', ' : ''}
                    <code key={enumType}>{enumType}</code>
                  </Fragment>
                ))}
                ]
              </div>
            </Fragment>
          )} */}
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
          <td>
            <code>{defaultValue}</code>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
)
