'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Settings, Lightbulb, Users, Headphones, Zap, ArrowRight, CheckCircle, Clock, Target, Shield } from 'lucide-react'
import { ScrollAnimation } from '@/components/ui/scroll-animation'

const services = [
  {
    icon: Zap,
    title: "Automation Services",
    description: "Streamline operations with intelligent automation solutions",
    features: ["Process automation", "RPA implementation", "Workflow optimization", "System integration"],
    color: "from-primary to-primary/70"
  },
  {
    icon: Lightbulb,
    title: "IT Consulting",
    description: "Strategic guidance for your digital transformation journey",
    features: ["IT strategy", "Technology assessment", "Architecture design", "Vendor management"],
    color: "from-primary to-primary/70"
  },
  {
    icon: Settings,
    title: "Implementation Services",
    description: "Expert deployment and configuration of IT solutions",
    features: ["Solution design", "System deployment", "Data migration", "Go-live support"],
    color: "from-primary to-primary/70"
  },
  {
    icon: Users,
    title: "Managed Services",
    description: "Comprehensive IT operations and infrastructure management",
    features: ["24/7 monitoring", "Proactive maintenance", "Security management", "Performance tuning"],
    color: "from-primary to-primary/70"
  },
  {
    icon: Headphones,
    title: "Support Services",
    description: "Reliable technical support and helpdesk services",
    features: ["24/7 helpdesk", "Remote support", "On-site service", "SLA management"],
    color: "from-primary to-primary/70"
  },
  {
    icon: Shield,
    title: "Security Services",
    description: "Protect your business with enterprise-grade security",
    features: ["Threat detection", "Compliance audits", "Incident response", "Security training"],
    color: "from-primary to-primary/70"
  }
]

const processSteps = [
  { number: "01", title: "Discovery", description: "Analyze your infrastructure and requirements" },
  { number: "02", title: "Strategy", description: "Develop a comprehensive tailored plan" },
  { number: "03", title: "Implement", description: "Execute with minimal disruption" },
  { number: "04", title: "Optimize", description: "Continuous improvement and support" }
]

const ServicesGrid = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <ScrollAnimation animation="fade-up">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2">
              <Settings className="w-4 h-4 mr-2" />
              What We Offer
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-black">
              <span className="text-gradient">Our Service</span>
              <span className="text-foreground"> Offerings</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive services to meet all your IT needs.
            </p>
          </div>
        </ScrollAnimation>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <ScrollAnimation key={index} animation="fade-up" delay={index * 0.1}>
                <Card className="h-full group border-2 border-border hover:border-primary/50 bg-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <CardContent className="p-6 space-y-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} p-3 shadow-lg group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t border-border/50">
                      <Link
                        href="/contact"
                        className="inline-flex items-center text-sm font-semibold text-primary group-hover:gap-2 transition-all"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            )
          })}
        </div>

        {/* Process Section */}
        <ScrollAnimation animation="fade-up">
          <Card className="border-2 border-primary/20 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 mb-24">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-black text-gradient mb-4">Our Process</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  A proven methodology to ensure successful project delivery.
                </p>
              </div>
              <div className="grid md:grid-cols-4 gap-8">
                {processSteps.map((step, index) => (
                  <div key={index} className="text-center space-y-4 relative">
                    <div className="w-16 h-16 mx-auto bg-primary text-white rounded-full flex items-center justify-center font-black text-xl shadow-lg">
                      {step.number}
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-primary/20" />
                    )}
                    <h4 className="font-bold text-lg">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </ScrollAnimation>

        {/* Benefits & CTA */}
        <ScrollAnimation animation="fade-up">
          <Card className="border-2 border-border">
            <CardContent className="p-8 md:p-12">
              <div className="text-center space-y-8">
                <h3 className="text-3xl font-black">
                  <span className="text-foreground">Why Choose </span>
                  <span className="text-gradient">Our Services?</span>
                </h3>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { icon: Clock, title: "Faster Results", desc: "Accelerate with proven methodologies" },
                    { icon: Target, title: "Guaranteed Quality", desc: "Clear SLAs and performance guarantees" },
                    { icon: Shield, title: "Risk Mitigation", desc: "Comprehensive planning and testing" }
                  ].map((benefit, index) => (
                    <div key={index} className="text-center space-y-3">
                      <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-primary to-primary/70 p-3 shadow-lg">
                        <benefit.icon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-bold">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button size="lg" className="btn-primary px-8 py-4 font-bold rounded-xl" asChild>
                    <Link href="/contact">
                      Request Consultation
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="btn-outline px-8 py-4 font-bold rounded-xl" asChild>
                    <Link href="/solutions">
                      Explore Solutions
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </ScrollAnimation>
      </div>
    </section>
  )
}

export default ServicesGrid
