import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Facebook,
  ArrowUp
} from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const solutions = [
    "Datacenter",
    "Management", 
    "Productivity",
    "Cloud",
    "Business Continuity",
    "Security"
  ];

  const services = [
    "Automation",
    "Consulting",
    "Implementation", 
    "Managed Services",
    "Support"
  ];

  const company = [
    "About",
    "Message from the Chairman",
    "Our History",
    "Competitive Edge",
    "Our Team"
  ];

  return (
    <footer className="bg-card border-t border-border">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">N</span>
              </div>
              <span className="text-2xl font-bold text-foreground">NILE.COM</span>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              Since 1999, NILE.COM has been delivering innovative IT solutions and consulting 
              services, helping businesses thrive in the digital age.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-foreground">info@nilecom.com.eg</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-foreground">+20 (2) 27024681</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-foreground">Maadi, Cairo, Egypt</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-foreground">Solutions</h3>
            <div className="space-y-3">
              {solutions.map((solution, index) => (
                <a 
                  key={index}
                  href={`#${solution.toLowerCase()}`}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {solution}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-foreground">Services</h3>
            <div className="space-y-3">
              {services.map((service, index) => (
                <a 
                  key={index}
                  href={`#${service.toLowerCase()}`}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {service}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-foreground">Company</h3>
            <div className="space-y-3">
              {company.map((item, index) => (
                <a 
                  key={index}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="space-y-3 pt-4 border-t border-border">
              <a href="#partners" className="block text-muted-foreground hover:text-primary transition-colors">
                Partners
              </a>
              <a href="#careers" className="block text-muted-foreground hover:text-primary transition-colors">
                Careers
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © Copyright 2024. All Rights Reserved. NILE.COM
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Terms of Service
              </a>
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="text-muted-foreground hover:text-primary"
              >
                <ArrowUp className="w-4 h-4 mr-2" />
                Back to Top
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
