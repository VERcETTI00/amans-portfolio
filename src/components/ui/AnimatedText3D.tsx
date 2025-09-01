import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface AnimatedText3DProps {
  text: string
  className?: string
  style?: React.CSSProperties
}

// Gizmo Components
const TransformGizmo = ({ show }: { show: boolean }) => (
  <motion.div
    className="absolute -right-12 top-1/2 transform -translate-y-1/2"
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: show ? 1 : 0, scale: show ? 1 : 0 }}
    transition={{ delay: 1.2, duration: 0.4 }}
  >
    {/* X Axis - Red */}
    <div className="absolute w-8 h-0.5 bg-red-500 transform origin-left"></div>
    <div className="absolute w-2 h-2 bg-red-500 transform translate-x-7 -translate-y-1 rotate-45"></div>
    
    {/* Y Axis - Green */}
    <div className="absolute w-0.5 h-8 bg-green-500 transform origin-top -translate-y-8"></div>
    <div className="absolute w-2 h-2 bg-green-500 transform -translate-y-9 -translate-x-1 rotate-45"></div>
    
    {/* Z Axis - Blue */}
    <div className="absolute w-6 h-0.5 bg-blue-500 transform origin-left rotate-45 translate-y-3"></div>
    <div className="absolute w-2 h-2 bg-blue-500 transform translate-x-4 translate-y-2 rotate-45"></div>
  </motion.div>
)

const WireframeGrid = ({ show }: { show: boolean }) => (
  <motion.div
    className="absolute inset-0 pointer-events-none overflow-hidden"
    initial={{ opacity: 0 }}
    animate={{ opacity: show ? 0.3 : 0 }}
    transition={{ duration: 0.5 }}
  >
    {/* Grid lines */}
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200">
      {/* Horizontal lines */}
      {[...Array(8)].map((_, i) => (
        <line
          key={`h-${i}`}
          x1="0"
          y1={i * 25}
          x2="400"
          y2={i * 25}
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-muted-foreground/20"
        />
      ))}
      {/* Vertical lines */}
      {[...Array(16)].map((_, i) => (
        <line
          key={`v-${i}`}
          x1={i * 25}
          y1="0"
          x2={i * 25}
          y2="200"
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-muted-foreground/20"
        />
      ))}
    </svg>
  </motion.div>
)

const ExtrusionGuides = ({ show }: { show: boolean }) => (
  <motion.div
    className="absolute inset-0 pointer-events-none"
    initial={{ opacity: 0 }}
    animate={{ opacity: show ? 1 : 0 }}
    transition={{ delay: 1.5, duration: 0.4 }}
  >
    {/* Extrusion depth lines */}
    <div className="absolute top-0 left-0 w-full h-full">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-0.5 h-4 bg-accent"
          style={{
            left: `${20 + i * 15}%`,
            top: '85%',
            borderLeft: '1px dashed currentColor',
          }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: show ? 1 : 0 }}
          transition={{ delay: 1.5 + i * 0.1 }}
        />
      ))}
    </div>
  </motion.div>
)

const ViewportUI = ({ show }: { show: boolean }) => (
  <motion.div
    className="absolute inset-0 pointer-events-none"
    initial={{ opacity: 0 }}
    animate={{ opacity: show ? 1 : 0 }}
    transition={{ delay: 0.8, duration: 0.4 }}
  >
    {/* Viewport corners */}
    <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-accent"></div>
    <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-accent"></div>
    <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-accent"></div>
    <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-accent"></div>
    
    {/* Coordinate system indicator */}
    <div className="absolute bottom-4 left-4 text-xs text-muted-foreground font-mono">
      <div className="text-red-500">X</div>
      <div className="text-green-500">Y</div>
      <div className="text-blue-500">Z</div>
    </div>
    
    {/* Tool indicator */}
    <div className="absolute top-4 right-4 text-xs text-accent font-mono bg-background/80 px-2 py-1 rounded">
      EXTRUDE
    </div>
  </motion.div>
)

const AnimatedText3D: React.FC<AnimatedText3DProps> = ({ text, className = '', style = {} }) => {
  const [phase, setPhase] = useState(0)

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  }

  const characterVariants = {
    hidden: {
      opacity: 0,
      y: 10,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
        type: "spring" as const,
        stiffness: 120,
        damping: 10
      }
    },
    extruded: {
      y: -4,
      scale: 1.02,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  }

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 200),   // Grid appears
      setTimeout(() => setPhase(2), 300),   // Text starts appearing immediately
      setTimeout(() => setPhase(3), 1000),  // Extrusion begins
      setTimeout(() => setPhase(4), 1500),  // Final state
    ]

    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <div 
      className={`relative ${className}`} 
      style={style}
    >
      <WireframeGrid show={phase >= 1} />
      <ViewportUI show={phase >= 1} />
      
      <motion.h1
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="font-bold text-black relative z-20"
        style={{
          filter: phase >= 3 ? 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' : 'none',
          opacity: 1
        }}
      >
        {text.split('').map((char, index) => (
          <motion.span
            key={`${char}-${index}`}
            variants={characterVariants}
            className="inline-block"
            style={{
              display: char === ' ' ? 'inline' : 'inline-block',
              width: char === ' ' ? '0.3em' : 'auto'
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.h1>
      
      <TransformGizmo show={phase >= 3} />
      <ExtrusionGuides show={phase >= 3} />
    </div>
  )
}

export default AnimatedText3D