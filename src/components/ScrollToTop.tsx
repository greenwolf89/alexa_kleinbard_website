import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Scroll window to top on client-side navigation (SPA default leaves scroll position). */
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
