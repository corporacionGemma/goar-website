import type React from 'react'
import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

interface Props {
  children: React.ReactNode
}
const Wrapper: React.FC<Props> = ({ children }) => {
  const location = useLocation()
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
    if (history.scrollRestoration.length > 0) {
      history.scrollRestoration = 'manual'
    }
  }, [location.pathname])
  return children
}

export default Wrapper
