import { Card, CardContent } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { 
  Users, 
  Award, 
  Target, 
  ArrowRight,
  CheckCircle 
} from 'lucide-react';

const About = () => {
  const features = [
    "Customer centric team",
    "Best-in-class solutions", 
    "High quality services",
    "25+ years of experience"
  ];

  const values = [
    {
      icon: Users,
      title: "Customer Centric",
      description: "We put our customers at the heart of everything we do, ensuring their success is our success."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every project, delivering solutions that exceed expectations."
    },
    {
      icon: Target,
      title: "Innovation",
      description: "We embrace cutting-edge technologies to provide innovative solutions for complex challenges."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold">
                <span className="text-foreground">About </span>
                <span className="text-gradient">NILE.COM</span>
              </h2>
              <p className="text-xl text-muted-foreground italic">
                "We don't do miracles, but we do amazing things"
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Established in 1999, NILE.COM is a private joint stock company based in Cairo, Egypt. 
                We have successfully prospered in the rapidly evolving and highly demanding fields of 
                communication and information technology.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Over the past 25+ years, we have built a reputation for delivering innovative IT solutions 
                and consulting services that help businesses transform and thrive in the digital age. 
                Our commitment to excellence and customer satisfaction has made us a trusted partner 
                for organizations across Egypt and the region.
              </p>
            </div>

            {/* Features list */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              onClick={() => window.location.href = "#about"}
            >
              Learn More About Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Right content - Values cards */}
          <div className="space-y-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="card-hover bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-foreground">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-6 bg-card rounded-lg border border-border">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Technology Partners</div>
              </div>
              <div className="text-center p-6 bg-card rounded-lg border border-border">
                <div className="text-3xl font-bold text-primary mb-2">250+</div>
                <div className="text-sm text-muted-foreground">Technologies Mastered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
