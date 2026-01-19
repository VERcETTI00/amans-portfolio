import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Linkedin, Twitter, Figma, FigmaIcon, LucideFigma } from "lucide-react"
import AnimatedSection from "@/components/ui/AnimatedSection"

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16" animation="fadeUp">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Let's Work Together
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your next project to life? Let's discuss how we can work together.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection animation="fadeUp" delay={0.2}>
              <Card className="border-0 shadow-card">
                <CardHeader>
                  <CardTitle>Send me a message</CardTitle>
                  <CardDescription>
                    I'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input 
                          id="firstName"
                          type="text"
                          placeholder="John"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input 
                          id="lastName"
                          type="text"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email"
                        type="email"
                        placeholder="john.doe@example.com"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input 
                        id="subject"
                        type="text"
                        placeholder="Project Inquiry"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message"
                        placeholder="Tell me about your project..."
                        rows={5}
                        className="resize-none"
                      />
                    </div>
                    
                    <Button type="submit" className="w-full" size="lg">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </AnimatedSection>
            
            <AnimatedSection animation="slideLeft" delay={0.4}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-6">
                    Get In Touch
                  </h3>
                  <p className="text-muted-foreground mb-8">
                    I'm always open to discussing new opportunities, interesting projects, or just having a chat about design.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a 
                        href="mailto:yadavaman2794@gmail.com"
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        yadavaman2794@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <a 
                        href="tel:+1234567890"
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        +91 9908632794
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Location</p>
                      <p className="text-muted-foreground">
                        Dehradun, UK, India
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-8">
                  <h4 className="text-lg font-semibold text-foreground mb-4">
                    Follow Me
                  </h4>
                  <div className="flex gap-4">
                    <Button variant="minimal" size="sm" asChild>
                      <a href="https://www.linkedin.com/in/amanwhodesigns/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Linkedin size={16} />
                        LinkedIn
                      </a>
                    </Button>
                    <Button variant="minimal" size="sm" asChild>
                      <a href="https://vercetti_00.artstation.com/" target="_blank" rel="noopener noreferrer">
                        Art Station
                      </a>
                    </Button>
                    <Button variant="minimal" size="sm" asChild>
                      <a href="https://www.figma.com/@amanwhodesigns" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Figma size={16} />
                        Figma
                      </a>
                    </Button>
                    <Button variant="minimal" size="sm" asChild>
                      <a href="https://www.behance.net/amanyadav82" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        Behance
                      </a>
                    </Button>
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

export default Contact