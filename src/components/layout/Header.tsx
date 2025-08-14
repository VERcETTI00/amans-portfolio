import { Button } from "@/components/ui/button"

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
          
          <Button variant="accent" size="sm" className="hidden sm:flex">
            Let's Work Together
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header