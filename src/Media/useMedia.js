import { useContext } from 'react'
import { Context } from './Media'

/**
 * Custom hook that should be used to access Media context.
 */
export default function useMedia() {
  const media = useContext(Context)
  if (process.env.NODE_ENV !== 'production' && !media) {
    console.warn('useMedia used without a <Media /> provider provided')
    return null
  }
  return media
}
