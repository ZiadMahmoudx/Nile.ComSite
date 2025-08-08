import { useState } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Menu, X, Mail, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      {/* Top bar with contact info */}
      <div className="bg-muted/50 py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-primary" />
              <span>info@nilecom.com.eg</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-primary" />
              <span>+20 (2) 27024681</span>
            </div>
          </div>
          <div className="text-muted-foreground">
            Maadi, Cairo, Egypt
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="py-4 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/nilecom_logo.png" alt="NILE.COM Logo" className="h-8" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#solutions" className="text-foreground hover:text-primary transition-colors">
              Solutions
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#partners" className="text-foreground hover:text-primary transition-colors">
              Partners
            </a>
            <a href="#careers" className="text-foreground hover:text-primary transition-colors">
              Careers
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              Request Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground hover:text-primary transition-colors px-4 py-2">
                Home
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors px-4 py-2">
                About
              </a>
              <a href="#solutions" className="text-foreground hover:text-primary transition-colors px-4 py-2">
                Solutions
              </a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors px-4 py-2">
                Services
              </a>
              <a href="#partners" className="text-foreground hover:text-primary transition-colors px-4 py-2">
                Partners
              </a>
              <a href="#careers" className="text-foreground hover:text-primary transition-colors px-4 py-2">
                Careers
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors px-4 py-2">
                Contact
              </a>
              <div className="px-4 py-2">
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  Request Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
