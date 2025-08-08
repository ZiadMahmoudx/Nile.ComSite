import { Button } from '@/components/ui/button.jsx';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 border border-primary/30 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-secondary/30 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-primary/20 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-foreground">Transforming</span>
              <br />
              <span className="text-foreground">Business Through</span>
              <br />
              <span className="text-gradient">Technology</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg">
              Since 1999, NILE.COM has been delivering innovative IT solutions and consulting services, 
              helping businesses thrive in the digital age.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground tech-glow"
              onClick={() => window.location.href = "#solutions"}
            >
              Explore Solutions
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => alert("Demo video coming soon!")}
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">25+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">1,750+</div>
              <div className="text-sm text-muted-foreground">Satisfied Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">2,500+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
          </div>
        </div>

        {/* Right content - Tech visualization */}
        <div className="relative">
          <div className="relative w-full h-96 flex items-center justify-center">
            {/* Central hub */}
            <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center pulse-glow">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-primary-foreground rounded-full"></div>
              </div>
            </div>

            {/* Orbiting elements */}
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-secondary rounded-full"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-secondary rounded-full"></div>
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-secondary rounded-full"></div>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-secondary rounded-full"></div>
            </div>

            {/* Connection lines */}
            <div className="absolute inset-0">
              <svg className="w-full h-full" viewBox="0 0 400 400">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#ff6b35" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
                <circle
                  cx="200"
                  cy="200"
                  r="150"
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  strokeDasharray="10,5"
                  className="animate-pulse"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="100"
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="1"
                  strokeDasharray="5,3"
                  className="animate-pulse"
                  style={{ animationDelay: '1s' }}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
