import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface CursorState {
  x: number
  y: number
  isHovering: boolean
  isProject: boolean
  text?: string
}

const CustomCursor = () => {
  const [cursorState, setCursorState] = useState<CursorState>({
    x: 0,
    y: 0,
    isHovering: false,
    isProject: false,
  })

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if device is mobile or has touch capability
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (isMobile) return

    let animationFrameId: number

    const updateCursor = (e: MouseEvent) => {
      animationFrameId = requestAnimationFrame(() => {
        setCursorState(prev => ({
          ...prev,
          x: e.clientX,
          y: e.clientY,
        }))
      })
    }

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isLink = target.tagName === 'A' || target.closest('a')
      const isButton = target.tagName === 'BUTTON' || target.closest('button')
      const isProject = target.closest('[data-project]')
      
      if (isProject) {
        setCursorState(prev => ({
          ...prev,
          isHovering: true,
          isProject: true,
          text: 'View',
        }))
      } else if (isLink || isButton) {
        setCursorState(prev => ({
          ...prev,
          isHovering: true,
          isProject: false,
        }))
      }
    }

    const handleMouseLeave = () => {
      setCursorState(prev => ({
        ...prev,
        isHovering: false,
        isProject: false,
        text: undefined,
      }))
    }

    // Add event listeners
    document.addEventListener('mousemove', updateCursor, { passive: true })
    
    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [data-project]')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      cancelAnimationFrame(animationFrameId)
      document.removeEventListener('mousemove', updateCursor)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [isMobile])

  if (isMobile) return null

  return (
    <>
      <motion.div
        className="custom-cursor"
        animate={{
          x: cursorState.x - 4,
          y: cursorState.y - 4,
          scale: cursorState.isHovering ? (cursorState.isProject ? 2 : 1.5) : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />
      
      {cursorState.isProject && cursorState.text && (
        <motion.div
          className="custom-cursor-text"
          animate={{
            x: cursorState.x - 20,
            y: cursorState.y - 40,
            opacity: 1,
          }}
          initial={{ opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 28,
          }}
        >
          {cursorState.text}
        </motion.div>
      )}
    </>
  )
}

export default CustomCursor