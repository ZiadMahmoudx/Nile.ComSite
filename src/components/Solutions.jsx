import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { 
  Server, 
  Cloud, 
  Shield, 
  Settings, 
  Database, 
  Zap,
  ArrowRight 
} from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      icon: Server,
      title: "Datacenter",
      description: "Starting with metal, getting your datacenter set up and ready to host your services and applications with enterprise-grade infrastructure.",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      borderColor: "border-blue-400/30"
    },
    {
      icon: Cloud,
      title: "Cloud",
      description: "There are many reasons why an enterprise might want to adopt cloud computing. Unlock the power of scalable, flexible cloud solutions.",
      color: "text-cyan-400",
      bgColor: "bg-cyan-400/10",
      borderColor: "border-cyan-400/30"
    },
    {
      icon: Shield,
      title: "Security",
      description: "The security of your data, systems and networks should imperatively keep pace with your business initiatives and growth.",
      color: "text-red-400",
      bgColor: "bg-red-400/10",
      borderColor: "border-red-400/30"
    },
    {
      icon: Settings,
      title: "Management",
      description: "Business growth has fueled the need for optimally managed IT that would increase efficiency and reduce operational overhead.",
      color: "text-green-400",
      bgColor: "bg-green-400/10",
      borderColor: "border-green-400/30"
    },
    {
      icon: Database,
      title: "Productivity",
      description: "Get things done more efficiently, in less time. This is how we define productivity in the modern digital workplace.",
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      borderColor: "border-purple-400/30"
    },
    {
      icon: Zap,
      title: "Business Continuity",
      description: "Today, access to information is the key to survival in the fast evolving business world. Ensure your operations never stop.",
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
      borderColor: "border-yellow-400/30"
    }
  ];

  return (
    <section id="solutions" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Our </span>
            <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Business needs will keep changing, and tomorrow your people will face new challenges. 
            We provide comprehensive IT solutions to help you stay ahead.
          </p>
        </div>

        {/* Solutions grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <Card 
                key={index} 
                className={`card-hover bg-card border ${solution.borderColor} hover:border-primary/50 transition-all duration-300`}
              >
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 ${solution.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                    <IconComponent className={`w-8 h-8 ${solution.color}`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {solution.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {solution.description}
                  </CardDescription>
                  <Button 
                    variant="ghost" 
                    className="mt-4 p-0 h-auto text-primary hover:text-primary/80"
                    onClick={() => alert(`Learn more about ${solution.title}`)}
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA section */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground tech-glow"
            onClick={() => window.location.href = "#solutions"}
          >
            View All Solutions
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
