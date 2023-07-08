import { useEffect, useState } from 'react'

const useScroll = ({ scrollRef, scrollValue }: { scrollRef: any, scrollValue: number }): boolean => {
  const [value, setValue] = useState(false)
  useEffect(() => {
    const handleScroll = (): void => {
      const div = scrollRef.current
      const { y } = div?.getBoundingClientRect()
      const result = y < -scrollValue
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
