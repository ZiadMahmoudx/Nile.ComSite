import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { 
  Headphones, 
  Rocket, 
  Users, 
  Wrench,
  ArrowRight 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Headphones,
      title: "Support",
      subtitle: "Standard Support",
      description: "24/7 technical support and maintenance services to keep your systems running smoothly and efficiently.",
      features: ["24/7 Monitoring", "Remote Support", "On-site Assistance", "Preventive Maintenance"],
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: Rocket,
      title: "Implementation", 
      subtitle: "Cloud Implementation",
      description: "Expert implementation services for cloud migration, infrastructure setup, and system deployment.",
      features: ["Cloud Migration", "System Integration", "Data Transfer", "Performance Optimization"],
      color: "text-orange-500",
      bgColor: "bg-orange-500/10"
    },
    {
      icon: Users,
      title: "Consulting",
      subtitle: "Security Assessment",
      description: "Strategic IT consulting and security assessment services to optimize your technology investments.",
      features: ["Security Audits", "Risk Assessment", "Compliance Review", "Strategic Planning"],
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: Wrench,
      title: "Managed Services",
      subtitle: "Complete IT Management",
      description: "Comprehensive managed services to handle all aspects of your IT infrastructure and operations.",
      features: ["Infrastructure Management", "Network Monitoring", "Backup Solutions", "Disaster Recovery"],
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Our </span>
            <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our services cover the complete IT lifecycle, from initial consultation and implementation 
            to ongoing support and managed services.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="card-hover bg-card border-border hover:border-primary/50 transition-all duration-300 h-full"
              >
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 ${service.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                    <IconComponent className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm text-primary font-medium uppercase tracking-wide">
                      {service.title}
                    </div>
                    <CardTitle className="text-2xl font-bold text-foreground">
                      {service.subtitle}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <CardDescription className="text-muted-foreground leading-relaxed text-base">
                    {service.description}
                  </CardDescription>
                  
                  {/* Features list */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className={`w-2 h-2 ${service.bgColor} rounded-full`}></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    variant="ghost" 
                    className="mt-4 p-0 h-auto text-primary hover:text-primary/80"
                    onClick={() => alert(`Learn more about ${service.subtitle}`)}
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Process section */}
        <div className="bg-muted/30 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Our Service Process
            </h3>
            <p className="text-lg text-muted-foreground">
              We follow a proven methodology to ensure successful project delivery
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Understanding your needs and requirements" },
              { step: "02", title: "Planning", desc: "Developing a comprehensive strategy and roadmap" },
              { step: "03", title: "Implementation", desc: "Executing the solution with precision and care" },
              { step: "04", title: "Support", desc: "Ongoing maintenance and optimization" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">{process.step}</span>
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">{process.title}</h4>
                <p className="text-muted-foreground">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA section */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
            onClick={() => window.location.href = "#contact"}
          >
            Get Started Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
