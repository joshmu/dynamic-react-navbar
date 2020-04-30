import { useEffect, useState } from 'react'

const useScrollDirection = () => {
  const [scroll, setScroll] = useState(null)
  const [scrollingDown, setScrollingDown] = useState(false)

  const handleScroll = () => {
    const newScroll = window.scrollY
    setScrollingDown(newScroll > scroll)
    setScroll(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
    // eslint-disable-next-line
  }, [scroll])

  return { scrollingDown }
}

export default useScrollDirection
