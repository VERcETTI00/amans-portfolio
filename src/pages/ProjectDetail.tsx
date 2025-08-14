import { useParams, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Calendar, User, Tag } from "lucide-react"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

// Import project images
import heroProject from "@/assets/hero-project.jpg"
import mobileAppProject from "@/assets/mobile-app-project.jpg"
import brandIdentityProject from "@/assets/brand-identity-project.jpg"
import ecommerceProject from "@/assets/ecommerce-project.jpg"
import dashboardProject from "@/assets/dashboard-project.jpg"
import editorialProject from "@/assets/editorial-project.jpg"

const projects = {
  1: {
    title: "E-commerce Platform Redesign",
    category: "Web Design",
    client: "RetailCo",
    duration: "3 months",
    year: "2024",
    description: "A complete redesign of RetailCo's e-commerce platform, focusing on improving user experience and increasing conversion rates. The project involved extensive user research, prototyping, and testing to create a more intuitive shopping experience.",
    image: ecommerceProject,
    tags: ["UI/UX", "Web Design", "E-commerce", "User Research"],
    challenge: "The existing platform had a high abandonment rate and poor mobile experience. Users struggled with navigation and the checkout process was overly complex.",
    solution: "We streamlined the user journey, implemented a mobile-first design approach, and simplified the checkout process. The new design features improved product discovery, personalized recommendations, and a one-click checkout option.",
    results: [
      "45% increase in conversion rate",
      "60% reduction in cart abandonment",
      "30% improvement in mobile engagement"
    ],
    technologies: ["Figma", "Principle", "Adobe Creative Suite", "Miro"]
  },
  2: {
    title: "Mobile Banking Application",
    category: "Mobile App",
    client: "FinanceFirst Bank",
    duration: "4 months",
    year: "2024",
    description: "Designed an intuitive mobile banking app that simplifies complex financial tasks for everyday users. The app features biometric authentication, real-time transaction tracking, and personalized financial insights.",
    image: mobileAppProject,
    tags: ["Mobile Design", "Fintech", "UI/UX", "iOS"],
    challenge: "Traditional banking apps are often intimidating and difficult to navigate. Users needed a simple way to manage their finances without overwhelming complexity.",
    solution: "Created a clean, accessible interface with clear visual hierarchy. Implemented smart categorization, spending insights, and quick actions for common tasks. The design prioritizes security while maintaining ease of use.",
    results: [
      "90% user satisfaction rate",
      "50% increase in mobile transactions",
      "40% reduction in customer support calls"
    ],
    technologies: ["Figma", "Principle", "Sketch", "InVision"]
  },
  3: {
    title: "Sustainable Fashion Brand Identity",
    category: "Branding",
    client: "EcoThread",
    duration: "2 months",
    year: "2023",
    description: "Developed a comprehensive brand identity for EcoThread, a sustainable fashion startup. The project included logo design, color palette, typography, and brand guidelines that reflect the company's environmental values.",
    image: brandIdentityProject,
    tags: ["Branding", "Logo Design", "Visual Identity", "Sustainability"],
    challenge: "Creating a brand identity that stands out in the crowded fashion market while authentically representing sustainable values without appearing preachy or dated.",
    solution: "Designed a modern, minimalist identity using earth-inspired colors and clean typography. The logo incorporates subtle references to growth and renewal, while the overall aesthetic feels premium and contemporary.",
    results: [
      "Featured in 5 major design publications",
      "25% increase in brand recognition",
      "Successfully launched with $2M in pre-orders"
    ],
    technologies: ["Adobe Illustrator", "Adobe InDesign", "Figma"]
  },
  4: {
    title: "Business Analytics Dashboard",
    category: "Dashboard",
    client: "DataInsights Corp",
    duration: "3 months",
    year: "2024",
    description: "Designed a comprehensive analytics dashboard that transforms complex business data into actionable insights. The interface helps teams make data-driven decisions quickly and efficiently.",
    image: dashboardProject,
    tags: ["Data Visualization", "Dashboard", "B2B", "Analytics"],
    challenge: "Business users were overwhelmed by complex data presentations and struggled to extract meaningful insights from existing reports.",
    solution: "Created an intuitive dashboard with progressive disclosure, customizable widgets, and clear data visualization. Implemented smart filtering and real-time collaboration features.",
    results: [
      "75% faster decision-making process",
      "95% user adoption rate",
      "50% reduction in report generation time"
    ],
    technologies: ["Figma", "D3.js", "Adobe Creative Suite"]
  },
  5: {
    title: "SaaS Product Landing Page",
    category: "Web Design",
    client: "TechFlow Solutions",
    duration: "1 month",
    year: "2024",
    description: "Designed a high-converting landing page for TechFlow's new SaaS product. The page clearly communicates the product's value proposition and guides visitors through the conversion funnel.",
    image: heroProject,
    tags: ["Web Design", "SaaS", "Landing Page", "Conversion"],
    challenge: "The client needed a landing page that could effectively communicate complex technical features to both technical and non-technical audiences.",
    solution: "Created a multi-layered content strategy with clear value propositions, benefit-focused copy, and strategic use of social proof. The design guides users through a logical flow from awareness to action.",
    results: [
      "200% increase in sign-ups",
      "65% improvement in page engagement",
      "35% increase in trial-to-paid conversion"
    ],
    technologies: ["Figma", "Adobe Creative Suite", "Principle"]
  },
  6: {
    title: "Digital Magazine Layout",
    category: "Print Design",
    client: "Modern Design Quarterly",
    duration: "2 months",
    year: "2023",
    description: "Designed the layout for a special digital edition of Modern Design Quarterly, focusing on typography, visual hierarchy, and reading experience across different devices.",
    image: editorialProject,
    tags: ["Editorial Design", "Typography", "Digital Publishing"],
    challenge: "Creating an engaging reading experience that works well on both desktop and mobile devices while maintaining the magazine's premium aesthetic.",
    solution: "Developed a flexible grid system with careful attention to typography and spacing. Used strategic white space and high-quality imagery to create visual interest while ensuring readability.",
    results: [
      "40% increase in reading completion",
      "Featured as 'Best Digital Design' at Publishing Awards",
      "85% reader satisfaction score"
    ],
    technologies: ["Adobe InDesign", "Adobe Photoshop", "Figma"]
  }
}

const ProjectDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  
  const project = projects[Number(id) as keyof typeof projects]
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => navigate('/')}>Back to Home</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Button 
                variant="minimal" 
                size="sm" 
                onClick={() => navigate('/')}
                className="mb-8"
              >
                <ArrowLeft size={16} className="mr-2" />
                Back to Portfolio
              </Button>
              
              <div className="mb-8">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="text-sm bg-accent/10 text-accent px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={14} />
                    {project.year}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User size={14} />
                    {project.client}
                  </div>
                </div>
                
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  {project.title}
                </h1>
                
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-sm bg-muted text-muted-foreground px-3 py-1 rounded-md flex items-center gap-1"
                    >
                      <Tag size={12} />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Image */}
        <section className="py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="aspect-[16/10] overflow-hidden rounded-lg shadow-card">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      The Challenge
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      The Solution
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Results
                    </h3>
                    <ul className="space-y-2">
                      {project.results.map((result, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Duration</h4>
                    <p className="text-muted-foreground">{project.duration}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Client</h4>
                    <p className="text-muted-foreground">{project.client}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Tools Used</h4>
                    <div className="space-y-2">
                      {project.technologies.map((tech) => (
                        <div key={tech} className="text-sm text-muted-foreground py-1">
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Interested in working together?
              </h3>
              <p className="text-muted-foreground mb-8">
                Let's discuss your project and see how I can help bring your ideas to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="/#contact">Start a Project</a>
                </Button>
                <Button variant="minimal" size="lg" asChild>
                  <a href="/">View More Work</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

export default ProjectDetail