import React from 'react'

// No-op replacement for outdated react-document-title package
export default function DocumentTitle({ children }) {
  return <React.Fragment>{children}</React.Fragment>
}
