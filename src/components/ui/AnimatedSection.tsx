import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  animation?: 'fadeUp' | 'fadeIn' | 'scaleIn' | 'slideLeft'
}

const animations = {
  fadeUp: {
    hidden: { 
      opacity: 0, 
      y: 30,
    },
    visible: { 
      opacity: 1, 
      y: 0,
    }
  },
  fadeIn: {
    hidden: { 
      opacity: 0,
    },
    visible: { 
      opacity: 1,
    }
  },
  scaleIn: {
    hidden: { 
      opacity: 0, 
      scale: 0.95,
    },
    visible: { 
      opacity: 1, 
      scale: 1,
    }
  },
  slideLeft: {
    hidden: { 
      opacity: 0, 
      x: 30,
    },
    visible: { 
      opacity: 1, 
      x: 0,
    }
  }
}

const AnimatedSection = ({ 
  children, 
  className = '', 
  delay = 0, 
  animation = 'fadeUp' 
}: AnimatedSectionProps) => {
  const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <motion.div
      ref={ref as any}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={animations[animation]}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedSection