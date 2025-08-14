import { Button } from "@/components/ui/button"
import { useScrollProgress } from "@/hooks/useScrollProgress"

const Header = () => {
  const { isScrolled } = useScrollProgress()

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'bg-background/90 backdrop-blur-lg border-b border-border/50 shadow-sm' 
          : 'bg-transparent'
      }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-xl font-semibold text-foreground hover:text-accent transition-colors">
              Alex Chen
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#work" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Work
            </a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>
          
          <Button variant="outline" size="sm" asChild>
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header