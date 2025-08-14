import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import AnimatedSection from "@/components/ui/AnimatedSection"
import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

// Import project images
import heroProject from "@/assets/hero-project.jpg"
import mobileAppProject from "@/assets/mobile-app-project.jpg"
import brandIdentityProject from "@/assets/brand-identity-project.jpg"
import ecommerceProject from "@/assets/ecommerce-project.jpg"
import dashboardProject from "@/assets/dashboard-project.jpg"
import editorialProject from "@/assets/editorial-project.jpg"

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    category: "Web Design",
    description: "Complete redesign of a modern e-commerce platform focusing on user experience and conversion optimization.",
    image: ecommerceProject,
    tags: ["UI/UX", "Web Design", "E-commerce"]
  },
  {
    id: 2,
    title: "Mobile Banking App",
    category: "Mobile App",
    description: "Intuitive mobile banking experience that simplifies complex financial tasks for everyday users.",
    image: mobileAppProject,
    tags: ["Mobile Design", "Fintech", "UI/UX"]
  },
  {
    id: 3,
    title: "Brand Identity System",
    category: "Branding",
    description: "Comprehensive brand identity design for a sustainable fashion startup, including logo and visual guidelines.",
    image: brandIdentityProject,
    tags: ["Branding", "Logo Design", "Visual Identity"]
  },
  {
    id: 4,
    title: "Analytics Dashboard",
    category: "Dashboard",
    description: "Data visualization dashboard that transforms complex metrics into actionable insights for business teams.",
    image: dashboardProject,
    tags: ["Data Viz", "Dashboard", "B2B"]
  },
  {
    id: 5,
    title: "SaaS Landing Page",
    category: "Web Design",
    description: "High-converting landing page design that clearly communicates product value and drives user acquisition.",
    image: heroProject,
    tags: ["Web Design", "SaaS", "Landing Page"]
  },
  {
    id: 6,
    title: "Editorial Design",
    category: "Print",
    description: "Magazine layout design that balances typography, imagery, and whitespace for optimal reading experience.",
    image: editorialProject,
    tags: ["Editorial", "Typography", "Print Design"]
  }
]

const Work = () => {
  return (
    <section id="work" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16" animation="fadeUp">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Selected Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A curated collection of projects that showcase my approach to solving design challenges.
            </p>
          </AnimatedSection>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {projects.map((project, index) => (
                <motion.div
                key={project.id}
                variants={staggerItem}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Card 
                  className="group overflow-hidden border-0 shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer"
                  data-project
                >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="mb-3">
                    <span className="text-sm text-accent font-medium">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button 
                    variant="minimal" 
                    size="sm" 
                    className="p-0 h-auto text-sm"
                    asChild
                  >
                    <a href={`/project/${project.id}`} className="inline-flex items-center gap-1">
                      View Project
                      <ExternalLink size={14} />
                    </a>
                  </Button>
                </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Work