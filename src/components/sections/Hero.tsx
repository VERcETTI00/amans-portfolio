import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import AnimatedSection from "@/components/ui/AnimatedSection"
import { motion } from "framer-motion"
import { useMousePosition } from "@/hooks/useMousePosition"

const Hero = () => {
  const mousePosition = useMousePosition()

  // Different random movement speeds for aesthetic variety
  const getRandomTranslation = (multiplier: number, index: number) => {
    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2
    
    // Add some randomness based on element index
    const randomOffsetX = Math.sin(index * 1.7) * 5
    const randomOffsetY = Math.cos(index * 2.3) * 5
    
    const translateX = ((mousePosition.x - centerX) / window.innerWidth) * multiplier + randomOffsetX
    const translateY = ((mousePosition.y - centerY) / window.innerHeight) * multiplier + randomOffsetY
    
    return { 
      translateX: Math.max(-20, Math.min(20, translateX)), 
      translateY: Math.max(-20, Math.min(20, translateY)) 
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-hero-gradient relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection animation="fadeIn">
          {/* Main title with subtle movement */}
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-hero font-bold leading-tight mb-6"
            style={{
              transform: `translate(${getRandomTranslation(8, 1).translateX}px, ${getRandomTranslation(8, 1).translateY}px)`,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            Aman Yadav
          </motion.h1>
          
          {/* Subtitle with different movement speed */}
          <motion.p 
            className="text-xl sm:text-2xl text-muted-foreground mb-4 font-light"
            style={{
              transform: `translate(${getRandomTranslation(12, 2).translateX}px, ${getRandomTranslation(12, 2).translateY}px)`,
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            Product Designer
          </motion.p>
          
          {/* Description with another speed */}
          <motion.p 
            className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
            style={{
              transform: `translate(${getRandomTranslation(6, 3).translateX}px, ${getRandomTranslation(6, 3).translateY}px)`,
            }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            I craft thoughtful digital experiences that solve real problems for real people.
          </motion.p>
          
          {/* Buttons with different movement */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            style={{
              transform: `translate(${getRandomTranslation(10, 4).translateX}px, ${getRandomTranslation(10, 4).translateY}px)`,
            }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <Button variant="default" size="lg" asChild>
              <a href="#work">View My Work</a>
            </Button>
            <Button variant="minimal" size="lg" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </motion.div>
          
          {/* Arrow with unique movement */}
          <motion.div 
            className="flex justify-center"
            style={{
              transform: `translate(${getRandomTranslation(15, 5).translateX}px, ${getRandomTranslation(15, 5).translateY}px)`,
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <a 
              href="#work" 
              className="inline-flex items-center text-muted-foreground hover:text-accent transition-colors group"
              aria-label="Scroll to work section"
            >
              <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

export default Hero