import { useEffect } from 'react'

/**
 * Hook prevents body scroll when active. Use with elements that have their
 * own scroll like Modals and Dropdowns
 */
export const useNoScroll = active => {
  useEffect(() => {
    const { classList } = window.document.body
    if (active) classList.add('no-scroll')
    else classList.remove('no-scroll')

    // On unmount always remove scroll in case of events like routing away from
    // open modals
    return function cleanup() {
      classList.remove('no-scroll')
    }
  }, [active])
}
