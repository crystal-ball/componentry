// @flow
import React from 'react'
import classNames from 'classnames'
import DocumentTitle from 'react-document-title'

type Props = {
  className?: string,
  title: string,
}

export default ({ title, className = '' }: Props) => {
  const pageTitle = title.charAt(0).toUpperCase() + title.slice(1)

  return (
    <div className={classNames('border-bottom', 'border-light', className)}>
      <DocumentTitle title={`${pageTitle} · Componentry`} />
      <h1 className='display-3'>{pageTitle}</h1>
    </div>
  )
}
