import React from 'react'

import Icon from 'components/universal/Icon'
import ClickToCopy from 'components/universal/ClickToCopy'

type Props = {
  classes: Array<string>,
  apis: Array<string>,
}

export default ({ classes = [], apis = [] }: Props) => {
  const showClasses = !!classes.length
  const showAPIs = !!apis.length

  return (
    <div className="row justify-content-center my-4">
      <div className="w-100 d-flex">
        {showClasses && (
          <div className="w-50 mx-3">
            <h4 className="border-bottom border-dark">
              <Icon id="bootstrap" /> Utility classes
            </h4>
            <ul className="list-unstyled ml-3">
              {classes.map(className => (
                <li key={className}>
                  <ClickToCopy
                    copyText="alert-link"
                    className="text-dark"
                    render={icons => (
                      <span>
                        {icons} <code>.{className}</code>
                      </span>
                    )}
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
        {showAPIs && (
          <div className="w-50 mx-3">
            <h4 className="border-bottom border-dark">
              <Icon id="terminal" className="text-primary" /> Componentry APIs
            </h4>
            <ul className="list-unstyled ml-3">
              {apis.map(api => (
                <li key={api}>
                  <Icon id="check" className="text-success" /> {api}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
