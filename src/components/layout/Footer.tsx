const Footer = () => {
  return (
    <footer className="py-12 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-muted-foreground text-sm">
                © 2024 Alex Chen. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <a 
                href="https://linkedin.com/in/alexchen" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors text-sm"
              >
                LinkedIn
              </a>
              <a 
                href="https://dribbble.com/alexchen" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors text-sm"
              >
                Dribbble
              </a>
              <a 
                href="https://twitter.com/alexchen" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors text-sm"
              >
                Twitter
              </a>
              <a 
                href="mailto:hello@alexchen.design"
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