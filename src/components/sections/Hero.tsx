import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import AnimatedSection from "@/components/ui/AnimatedSection"
import { motion } from "framer-motion"
import { useMousePosition } from "@/hooks/useMousePosition"
import { useRef } from "react"

const Hero = () => {
  const mousePosition = useMousePosition()
  const nameRef = useRef<HTMLHeadingElement>(null)

  const getRotation = () => {
    if (!nameRef.current) return { rotateX: 0, rotateY: 0 }
    
    const rect = nameRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const rotateX = ((mousePosition.y - centerY) / window.innerHeight) * -20
    const rotateY = ((mousePosition.x - centerX) / window.innerWidth) * 20
    
    return { 
      rotateX: Math.max(-15, Math.min(15, rotateX)), 
      rotateY: Math.max(-15, Math.min(15, rotateY)) 
    }
  }

  const { rotateX, rotateY } = getRotation()

  return (
    <section className="min-h-screen flex items-center justify-center bg-hero-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="max-w-4xl mx-auto text-center" animation="fadeIn">
          <div 
            className="perspective-1000 mb-6 relative"
            style={{ perspective: '1000px' }}
          >
            <div
              ref={nameRef}
              className="text-4xl sm:text-5xl lg:text-hero font-bold leading-tight transform-gpu transition-transform duration-100 ease-out hover:scale-105 relative"
              style={{
                transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                transformStyle: 'preserve-3d',
                willChange: 'transform',
              }}
            >
              {/* Layer 1 - Front (brightest) */}
              <span 
                className="absolute inset-0 text-foreground"
                style={{
                  transform: 'translateZ(0px)',
                  textShadow: '0 0 20px hsl(var(--primary) / 0.5)',
                }}
              >
                Aman Yadav
              </span>
              
              {/* Layer 2 - Slightly back */}
              <span 
                className="absolute inset-0"
                style={{
                  transform: 'translateZ(-2px)',
                  color: 'hsl(var(--foreground) / 0.9)',
                }}
              >
                Aman Yadav
              </span>
              
              {/* Layer 3 - Further back */}
              <span 
                className="absolute inset-0"
                style={{
                  transform: 'translateZ(-4px)',
                  color: 'hsl(var(--foreground) / 0.8)',
                }}
              >
                Aman Yadav
              </span>
              
              {/* Layer 4 - Even further back */}
              <span 
                className="absolute inset-0"
                style={{
                  transform: 'translateZ(-6px)',
                  color: 'hsl(var(--foreground) / 0.7)',
                }}
              >
                Aman Yadav
              </span>
              
              {/* Layer 5 - Deep back */}
              <span 
                className="absolute inset-0"
                style={{
                  transform: 'translateZ(-8px)',
                  color: 'hsl(var(--foreground) / 0.6)',
                }}
              >
                Aman Yadav
              </span>
              
              {/* Layer 6 - Deepest (darkest) */}
              <span 
                className="absolute inset-0"
                style={{
                  transform: 'translateZ(-10px)',
                  color: 'hsl(var(--foreground) / 0.5)',
                  textShadow: `${rotateY * 0.8}px ${rotateX * 0.8}px 15px rgba(0, 0, 0, 0.6)`,
                }}
              >
                Aman Yadav
              </span>
              
              {/* Invisible placeholder for layout */}
              <span className="opacity-0">Aman Yadav</span>
            </div>
          </div>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-4 font-light">
            Product Designer
          </p>
          <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            I craft thoughtful digital experiences that solve real problems for real people.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button variant="default" size="lg" asChild>
              <a href="#work">View My Work</a>
            </Button>
            <Button variant="minimal" size="lg" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
          
          <div className="flex justify-center">
            <a 
              href="#work" 
              className="inline-flex items-center text-muted-foreground hover:text-accent transition-colors group"
              aria-label="Scroll to work section"
            >
              <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default Hero