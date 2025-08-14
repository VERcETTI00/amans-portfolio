import { useEffect, useState } from 'react'

export const useScrollProgress = () => {
  const [scrollY, setScrollY] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    let ticking = false

    const updateScrollY = () => {
      setScrollY(window.scrollY)
      setIsScrolled(window.scrollY > 10)
      ticking = false
    }

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollY)
        ticking = true
      }
    }

    window.addEventListener('scroll', requestTick, { passive: true })
    
    return () => window.removeEventListener('scroll', requestTick)
  }, [])

  return { scrollY, isScrolled }
}