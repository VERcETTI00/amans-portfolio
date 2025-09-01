import { useState, useEffect } from 'react'

export const usePageLoading = (minLoadTime = 2000) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const startTime = Date.now()

    const handleLoad = () => {
      const elapsed = Date.now() - startTime
      const remainingTime = Math.max(0, minLoadTime - elapsed)
      
      setTimeout(() => {
        setIsLoading(false)
      }, remainingTime)
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
      return () => window.removeEventListener('load', handleLoad)
    }
  }, [minLoadTime])

  return isLoading
}