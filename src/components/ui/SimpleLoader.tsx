import React from 'react'
import { motion } from 'framer-motion'

const SimpleLoader = () => {
  return (
    <div className="fixed inset-0 z-50 bg-background flex items-center justify-center">
      <div className="flex flex-col items-center text-center">
        {/* Main loading dots */}
        <div className="flex items-center justify-center space-x-2 mb-6">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-foreground rounded-full"
              animate={{
                y: [-8, 8, -8],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        {/* Loading text */}
        <motion.p 
          className="text-foreground font-mono text-sm tracking-wider text-center mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          LOADING
        </motion.p>
        
        {/* Progress line */}
        <div className="w-32 h-px bg-muted-foreground/20 overflow-hidden">
          <motion.div 
            className="h-full bg-foreground"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ 
              duration: 2,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default SimpleLoader