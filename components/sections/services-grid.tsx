import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Settings, Lightbulb, Users, Headphones, Zap, ArrowRight, CheckCircle, Clock, Target, Shield } from 'lucide-react'

const ServicesGrid = () => {
  const services = [
    {
      icon: Zap,
      title: "Automation Services",
      description: "Streamline operations with intelligent automation solutions",
      features: [
        "Process automation and optimization",
        "Robotic process automation (RPA)",
        "Workflow design and implementation",
        "Integration with existing systems",
        "Performance monitoring and analytics"
      ],
      included: "Strategy, implementation, training, and ongoing support"
    },
    {
      icon: Lightbulb,
      title: "IT Consulting",
      description: "Strategic guidance for your digital transformation journey",
      features: [
        "IT strategy and roadmap development",
        "Technology assessment and planning",
        "Digital transformation consulting",
        "Architecture design and review",
        "Vendor selection and management"
      ],
      included: "Assessment, strategy document, implementation roadmap"
    },
    {
      icon: Settings,
      title: "Implementation Services",
      description: "Expert deployment and configuration of IT solutions",
      features: [
        "Solution design and architecture",
        "System deployment and configuration",
        "Data migration and integration",
        "Testing and quality assurance",
        "Go-live support and optimization"
      ],
      included: "Project management, deployment, testing, documentation"
    },
    {
      icon: Users,
      title: "Managed Services",
      description: "Comprehensive IT operations and infrastructure management",
      features: [
        "24/7 monitoring and management",
        "Proactive maintenance and updates",
        "Security management and compliance",
        "Performance optimization",
        "Capacity planning and scaling"
      ],
      included: "Monitoring, maintenance, reporting, and escalation support"
    },
    {
      icon: Headphones,
      title: "Support Services",
      description: "Reliable technical support and helpdesk services",
      features: [
        "24/7 technical support helpdesk",
        "Incident management and resolution",
        "Remote and on-site support",
        "User training and documentation",
        "Service level agreement (SLA) management"
      ],
      included: "Multi-channel support, ticketing system, knowledge base"
    }
  ]

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Assessment",
      description: "We analyze your current infrastructure and business requirements"
    },
    {
      number: "02", 
      title: "Strategy & Planning",
      description: "Develop a comprehensive plan tailored to your specific needs"
    },
    {
      number: "03",
      title: "Implementation & Deployment", 
      description: "Execute the plan with minimal disruption to your operations"
    },
    {
      number: "04",
      title: "Support & Optimization",
      description: "Provide ongoing support and continuous improvement"
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold">Our Service Offerings</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From strategic consulting to hands-on implementation and ongoing support, 
            we provide comprehensive services to meet all your IT needs.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                <CardHeader className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Features list */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Service Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What's included */}
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <h5 className="font-medium text-foreground mb-2">What's Included:</h5>
                    <p className="text-sm text-muted-foreground">{service.included}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Our Process */}
        <div className="bg-card rounded-2xl p-8 border border-border mb-16">
          <div className="text-center space-y-4 mb-12">
            <h3 className="text-3xl font-bold">Our Service Process</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We follow a proven methodology to ensure successful project delivery and optimal results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-primary">{step.number}</span>
                </div>
                <h4 className="font-semibold text-lg">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Service Benefits */}
        <div className="bg-card rounded-2xl p-8 border border-border">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold">Why Choose Our Services?</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience the difference of working with Egypt's leading IT services provider.
              </p>
            </div>

            {/* Benefits grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold">Faster Time to Value</h4>
                <p className="text-sm text-muted-foreground">
                  Accelerate your projects with our proven methodologies and experienced team
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold">Guaranteed Results</h4>
                <p className="text-sm text-muted-foreground">
                  We stand behind our work with clear SLAs and performance guarantees
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold">Risk Mitigation</h4>
                <p className="text-sm text-muted-foreground">
                  Minimize project risks with our comprehensive planning and testing approach
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <Link href="/contact">
                  Request a Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/solutions">
                  Explore Solutions
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesGrid
