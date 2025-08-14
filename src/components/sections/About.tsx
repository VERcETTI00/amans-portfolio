import { Badge } from "@/components/ui/badge"
import AnimatedSection from "@/components/ui/AnimatedSection"

const skills = [
  "User Interface Design",
  "User Experience Design", 
  "Prototyping",
  "Design Systems",
  "User Research",
  "Visual Design"
]

const tools = [
  "Figma",
  "Adobe Creative Suite",
  "Principle", 
  "Framer",
  "Miro",
  "Notion"
]

const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection animation="fadeUp">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                About Me
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a product designer with 5+ years of experience creating meaningful digital experiences. 
                  My approach combines user-centered design thinking with a deep understanding of business goals.
                </p>
                <p>
                  I believe great design should be invisible—it should solve problems so elegantly that users 
                  don't even think about the interface. This philosophy guides every project I work on, from 
                  initial research to final implementation.
                </p>
                <p>
                  When I'm not designing, you'll find me exploring local coffee shops, reading about emerging 
                  technologies, or experimenting with photography. I'm always curious about how design can 
                  make the world a little bit better.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slideLeft" delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Skills
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {skills.map((skill) => (
                      <div 
                        key={skill}
                        className="text-sm text-muted-foreground py-2 px-3 bg-background rounded-md border border-border"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Tools
                  </h3>
                  <div className="grid grid-cols-3 gap-2">
                    {tools.map((tool) => (
                      <div 
                        key={tool}
                        className="text-sm text-muted-foreground py-2 px-3 bg-background rounded-md border border-border text-center"
                      >
                        {tool}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About