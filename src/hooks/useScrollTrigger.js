import { useEffect, useState } from 'react'

const useScrollDirection = () => {
  const [scroll, setScroll] = useState(null)
  const [showNav, setShowNav] = useState(false)
  const [triggerPosition, setTriggerPosition] = useState(0)

  // todo: would be good to make this dynamic
  const navMinHeight = 40

  const handleScroll = () => {
    const newScroll = window.scrollY
    console.log({ newScroll, triggerPosition })
    if (newScroll > triggerPosition - navMinHeight) {
      if (!showNav && triggerPosition !== 0) {
        console.log('fire!')
        setShowNav(true)
      }
    } else {
      if (showNav) setShowNav(false)
    }
    setScroll(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
    // eslint-disable-next-line
  }, [scroll, triggerPosition])

  const elemToTriggerNav = (selector) => {
    const elem = document.querySelector(selector)
    if (elem && triggerPosition === 0) setTriggerPosition(elem.offsetTop)
  }

  return { showNav, elemToTriggerNav }
}

export default useScrollDirection
