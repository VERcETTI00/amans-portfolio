const Footer = () => {
  return (
    <footer className="py-12 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-muted-foreground text-sm">
                © 2025 Aman Yadav. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <a 
                href="https://www.linkedin.com/in/amanwhodesigns/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors text-sm"
              >
                LinkedIn
              </a>
              <a 
                href="https://vercetti_00.artstation.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors text-sm"
              >
                Art Station
              </a>
              <a 
                href="https://www.behance.net/amanyadav82" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors text-sm"
              >
                Behance
              </a>
              <a 
                href="https://www.figma.com/@amanwhodesigns" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors text-sm"
              >
                Figma
              </a>
              <a 
                href="mailto:amanwhodesigns@gmail.com"
                className="text-muted-foreground hover:text-accent transition-colors text-sm"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer