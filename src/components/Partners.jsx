import { Card, CardContent } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { ArrowRight } from 'lucide-react';

const Partners = () => {
  // Partner logos - using placeholder divs with company names
  const partners = [
    { name: "Microsoft", color: "bg-blue-600" },
    { name: "Dell EMC", color: "bg-blue-500" },
    { name: "Fortinet", color: "bg-red-600" },
    { name: "Broadcom", color: "bg-red-500" },
    { name: "VMware", color: "bg-blue-700" },
    { name: "Nutanix", color: "bg-blue-800" },
    { name: "Cisco", color: "bg-blue-600" },
    { name: "HP Enterprise", color: "bg-blue-500" },
    { name: "IBM", color: "bg-blue-900" },
    { name: "Oracle", color: "bg-red-700" },
    { name: "AWS", color: "bg-orange-500" },
    { name: "Azure", color: "bg-blue-600" }
  ];

  return (
    <section id="partners" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Our </span>
            <span className="text-gradient">Partners</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The challenge is staying in pace, on the high velocity track, with IT innovation 
            and with changing market trends. We partner with industry leaders to deliver 
            cutting-edge solutions.
          </p>
        </div>

        {/* Partners grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mb-12">
          {partners.map((partner, index) => (
            <Card 
              key={index} 
              className="card-hover bg-card border-border hover:border-primary/50 transition-all duration-300"
            >
              <CardContent className="p-6 flex items-center justify-center h-24">
                <div className="text-center">
                  <div className={`w-12 h-12 ${partner.color} rounded-lg mx-auto mb-2 flex items-center justify-center`}>
                    <span className="text-white font-bold text-xs">
                      {partner.name.charAt(0)}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {partner.name}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partnership benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl font-bold text-primary">50+</span>
            </div>
            <h3 className="text-xl font-bold text-foreground">Technology Partners</h3>
            <p className="text-muted-foreground">
              Strategic partnerships with leading technology vendors worldwide
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl font-bold text-secondary">250+</span>
            </div>
            <h3 className="text-xl font-bold text-foreground">Technologies</h3>
            <p className="text-muted-foreground">
              Comprehensive portfolio of cutting-edge technologies and solutions
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl font-bold text-primary">25+</span>
            </div>
            <h3 className="text-xl font-bold text-foreground">Years Experience</h3>
            <p className="text-muted-foreground">
              Decades of experience in technology partnerships and integration
            </p>
          </div>
        </div>

        {/* Partnership approach */}
        <div className="bg-card rounded-2xl p-8 lg:p-12 border border-border">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">
                Why Partner with Industry Leaders?
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our strategic partnerships enable us to deliver best-in-class solutions 
                that combine multiple technologies seamlessly. We work closely with our 
                partners to ensure our clients receive the most innovative and reliable 
                solutions available in the market.
              </p>
              <div className="space-y-4">
                {[
                  "Access to latest technologies and innovations",
                  "Certified expertise and training programs", 
                  "Priority support and technical resources",
                  "Competitive pricing and flexible licensing"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                <h4 className="text-xl font-bold text-foreground mb-3">
                  Certified Partnerships
                </h4>
                <p className="text-muted-foreground">
                  We maintain the highest levels of certification with our technology 
                  partners, ensuring our team has the expertise to implement and 
                  support complex enterprise solutions.
                </p>
              </div>
              
              <div className="bg-secondary/5 rounded-xl p-6 border border-secondary/20">
                <h4 className="text-xl font-bold text-foreground mb-3">
                  Innovation Focus
                </h4>
                <p className="text-muted-foreground">
                  Through our partnerships, we stay at the forefront of technological 
                  innovation, bringing the latest solutions and capabilities to our clients.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA section */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground tech-glow"
          >
            Explore Our Solutions
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Partners;
