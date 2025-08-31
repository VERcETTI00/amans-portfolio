import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface AnimatedText3DProps {
  text: string
  className?: string
  style?: React.CSSProperties
}

const AnimatedText3D = ({ text, className = "", style }: AnimatedText3DProps) => {
  const [isAnimating, setIsAnimating] = useState(true)
  
  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  const characters = text.split('').map((char, index) => ({
    char: char === ' ' ? '\u00A0' : char, // Non-breaking space
    index
  }))

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  }

  const characterVariants = {
    hidden: {
      opacity: 0,
      scaleY: 0.1,
      rotateX: -90,
      transformOrigin: "bottom center"
    },
    visible: {
      opacity: 1,
      scaleY: 1,
      rotateX: 0,
      transformOrigin: "bottom center",
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 200,
        duration: 0.6
      }
    }
  }

  return (
    <motion.div
      className={`perspective-1000 ${className}`}
      style={{
        ...style,
        transformStyle: "preserve-3d"
      }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {characters.map(({ char, index }) => (
        <motion.span
          key={index}
          variants={characterVariants}
          className="inline-block relative"
          style={{
            transformStyle: "preserve-3d",
            textShadow: isAnimating 
              ? `
                0 1px 0 hsl(var(--muted-foreground)),
                0 2px 0 hsl(var(--muted-foreground)),
                0 3px 0 hsl(var(--muted-foreground)),
                0 4px 0 hsl(var(--muted-foreground)),
                0 5px 0 hsl(var(--muted-foreground)),
                0 6px 0 hsl(var(--muted-foreground)),
                0 7px 0 hsl(var(--muted-foreground)),
                0 8px 0 hsl(var(--muted-foreground)),
                0 9px 0 hsl(var(--muted-foreground)),
                0 10px 10px hsl(var(--muted-foreground) / 0.4),
                0 20px 20px hsl(var(--muted-foreground) / 0.2),
                0 30px 30px hsl(var(--muted-foreground) / 0.1)
              `
              : `
                0 1px 0 hsl(var(--muted-foreground)),
                0 2px 0 hsl(var(--muted-foreground)),
                0 3px 0 hsl(var(--muted-foreground)),
                0 4px 0 hsl(var(--muted-foreground)),
                0 5px 5px hsl(var(--muted-foreground) / 0.3),
                0 10px 10px hsl(var(--muted-foreground) / 0.2)
              `,
            background: "linear-gradient(135deg, hsl(var(--foreground)), hsl(var(--foreground) / 0.8))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            willChange: "transform"
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  )
}

export default AnimatedText3D