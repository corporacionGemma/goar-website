import { useEffect, useState } from 'react'

const useScroll = (scrollRef: React.RefObject<HTMLDivElement>, scrollValue: number): boolean => {
  const [value, setValue] = useState(false)
  useEffect(() => {
    const handleScroll = (): void => {
      const div = scrollRef.current
      const position = div?.getBoundingClientRect()
      const result = position?.y !== undefined ? position?.y < -scrollValue : false
      setValue(result)
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return value
}

export default useScroll
