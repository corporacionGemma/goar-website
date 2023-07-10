import { useEffect, useState, useRef } from 'react'

const useScrollMobile = (scrollRef: React.RefObject<HTMLDivElement>): boolean => {
  const previusValue = useRef(0)
  const [value, setValue] = useState(true)
  useEffect(() => {
    const handleScroll = (): void => {
      const div = scrollRef.current
      const position = div?.getBoundingClientRect()
      const result = (position?.y !== undefined) ? position?.y > previusValue.current : false
      previusValue.current = position?.y !== undefined ? position.y : 0
      setValue(result)
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return value
}

export default useScrollMobile
