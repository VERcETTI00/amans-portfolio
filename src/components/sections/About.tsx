import { Badge } from "@/components/ui/badge"
import AnimatedSection from "@/components/ui/AnimatedSection"

const skills = [
  "3D Modelling",
  "3D Texturing",
  "3D Lighting",
  "Animation",
  "Management",
  "User Interface Design",
  "User Experience Design", 
  "Prototyping",
  "Design Systems",
  "Problem Solving"
]

const tools = [
  "Autodesk Maya",
  "Substance 3D Painter",
  "Blender",
  "Unreal Engine",
  "D5 Render",
  "KeyShot Studio",
  "Zbrush",
  "Adobe After Effects",
  "Adobe Illustrator",
  "Adobe Photoshop",
  "Figma",
  "Adobe Creative Suite"  
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
                  A storyteller at heart, driven by the belief that whether through film, 3D environments, or user interfaces, design holds the power to move people.
                </p>
                <p>
                  Currently pursuing a Master’s in Animation & Multimedia, the work explores the intersection of art and technology. Projects span across 3D modeling, environment design, texturing, and lighting, as well as brand campaigns, UI/UX concepts, and research into how gamification and sustainable design can shape the future of user engagement. A published book chapter on Augmented Reality and Modern Multimedia Design further reflects a deep curiosity about how immersive technologies transform creative expression.
                </p>
                <p>
                  Prior to academic research and creative exploration, professional experience as a UI/UX Designer and Product Manager involved building digital products that balanced user needs with business goals. This hands-on background established a strong foundation in design thinking, product strategy, and storytellings showing how these elements converge to create practical and impactful solutions.
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
                  <div className="grid grid-cols-2 gap-2">
                    {tools.map((tool) => (
                      <div 
                        key={tool}
                        className="text-sm text-muted-foreground py-2 px-3 bg-background rounded-md border border-border"
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