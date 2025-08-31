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
            className="perspective-1000 mb-6"
            style={{ perspective: '1000px' }}
          >
            <h1 
              ref={nameRef}
              className="text-4xl sm:text-5xl lg:text-hero font-bold text-foreground leading-tight transform-gpu transition-transform duration-100 ease-out hover:scale-105"
              style={{
                transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                transformStyle: 'preserve-3d',
                textShadow: `
                  1px 1px 0px hsl(var(--muted-foreground)),
                  2px 2px 0px hsl(var(--muted-foreground)),
                  3px 3px 0px hsl(var(--muted-foreground)),
                  4px 4px 0px hsl(var(--muted-foreground)),
                  5px 5px 0px hsl(var(--muted-foreground)),
                  6px 6px 10px rgba(0, 0, 0, 0.4),
                  ${rotateY * 0.8}px ${rotateX * 0.8}px 15px rgba(0, 0, 0, 0.3)
                `,
                willChange: 'transform',
                WebkitTextStroke: '1px hsl(var(--border))',
              }}
            >
              Aman Yadav
            </h1>
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