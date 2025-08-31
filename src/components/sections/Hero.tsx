import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import AnimatedSection from "@/components/ui/AnimatedSection"
import { motion } from "framer-motion"
import { useMousePosition } from "@/hooks/useMousePosition"
import JellySphere from "@/components/ui/JellySphere"


const Hero = () => {
  const mousePosition = useMousePosition()

  const getTranslation = () => {
    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2
    
    const translateX = ((mousePosition.x - centerX) / window.innerWidth) * 20
    const translateY = ((mousePosition.y - centerY) / window.innerHeight) * 20
    
    return { 
      translateX: Math.max(-15, Math.min(15, translateX)), 
      translateY: Math.max(-15, Math.min(15, translateY)) 
    }
  }

  const { translateX, translateY } = getTranslation()

  return (
    <section className="min-h-screen flex items-center justify-center bg-hero-gradient relative overflow-hidden">
      <JellySphere />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          className="max-w-4xl mx-auto text-center transition-transform duration-200 ease-out" 
          style={{
            transform: `translate(${translateX}px, ${translateY}px)`,
          }}
        >
          <AnimatedSection animation="fadeIn">
          <h1 className="text-4xl sm:text-5xl lg:text-hero font-bold leading-tight mb-6">
            Aman Yadav
          </h1>
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
      </div>
    </section>
  )
}

export default Hero