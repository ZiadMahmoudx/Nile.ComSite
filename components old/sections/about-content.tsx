import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Heart, Shield, Lightbulb, Users, Target, ArrowRight, Calendar, Award, Zap, Globe } from 'lucide-react'

const AboutContent = () => {
  const coreValues = [
    {
      icon: Heart,
      title: "Customer First",
      description: "We prioritize our clients' success above all else, building long-term partnerships based on trust and mutual growth."
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "We deliver consistent, dependable solutions that our clients can count on, backed by proven methodologies and expertise."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative approaches to solve complex business challenges."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with our clients and partners to achieve shared objectives and create lasting value."
    }
  ]

  const timeline = [
    {
      year: "1999",
      title: "Company Founded",
      description: "NILE.COM established as Egypt's premier IT solutions provider"
    },
    {
      year: "2005",
      title: "Enterprise Focus",
      description: "Expanded services to serve large enterprise clients across Egypt"
    },
    {
      year: "2010",
      title: "Cloud Pioneer",
      description: "Early adoption of cloud technologies and virtualization solutions"
    },
    {
      year: "2015",
      title: "Digital Transformation",
      description: "Launched comprehensive digital transformation consulting services"
    },
    {
      year: "2020",
      title: "Remote Solutions",
      description: "Accelerated remote work and collaboration solutions during global changes"
    },
    {
      year: "2024",
      title: "AI Integration",
      description: "Leading the integration of AI and automation in business processes"
    }
  ]

  const competitiveEdge = [
    {
      icon: Target,
      title: "Deep Local Expertise",
      description: "25+ years of experience in the Egyptian market with deep understanding of local business needs and regulatory requirements."
    },
    {
      icon: Award,
      title: "Premier Certifications",
      description: "Highest-level certifications from major technology vendors, ensuring access to latest innovations and best practices."
    },
    {
      icon: Zap,
      title: "Rapid Implementation",
      description: "Proven methodologies and experienced teams enable faster project delivery without compromising quality."
    },
    {
      icon: Globe,
      title: "Global Standards",
      description: "International best practices combined with local market knowledge for optimal solution delivery."
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 space-y-20">
        {/* Company Story */}
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Our Story</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Founded in 1999, NILE.COM began with a simple mission: to help Egyptian businesses harness the power of technology 
              for growth and success. Over the past 25 years, we have evolved from a small IT services company into Egypt's 
              leading provider of comprehensive technology solutions.
            </p>
          </div>
          
          <div className="bg-card rounded-2xl p-8 border border-border">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Today, we serve over 1,750 satisfied customers across various industries, from small businesses to large enterprises. 
              Our team of certified professionals has successfully completed more than 2,500 projects, establishing NILE.COM as 
              a trusted partner in digital transformation. We continue to innovate and adapt, ensuring our clients stay ahead 
              in an ever-evolving technological landscape.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape our relationships with clients, partners, and team members.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                  <CardHeader className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Company Timeline */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Key milestones that have shaped NILE.COM into the industry leader we are today.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20 rounded-full"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-primary">{item.year}</div>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Competitive Edge */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Our Competitive Edge</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              What sets us apart in the competitive IT services landscape and makes us the preferred choice for businesses across Egypt.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {competitiveEdge.map((edge, index) => {
              const IconComponent = edge.icon
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                  <CardHeader className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-xl">{edge.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{edge.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-card rounded-2xl p-8 border border-border">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold">Ready to Transform Your Business?</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join over 1,750 satisfied customers who trust NILE.COM for their technology needs. 
                Let's discuss how we can help accelerate your digital transformation journey.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8">
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
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <Link href="/contact">
                  Start Your Project
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

export default AboutContent
