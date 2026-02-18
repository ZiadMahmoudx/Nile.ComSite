'use client'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { SpotlightButton } from '@/components/ui/spotlight-button'
import { Settings, Users, Headphones, Wrench, BookOpen, Rocket, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { ScrollAnimation } from '@/components/ui/scroll-animation'

interface Service {
  icon: React.ElementType
  title: string
  description: string
  features: string[]
  featured?: boolean
}

const services: Service[] = [
  {
    icon: Settings,
    title: 'Managed IT Services',
    description: 'Complete IT infrastructure management and support with 24/7 monitoring and proactive security.',
    features: ['24/7 Monitoring', 'Proactive Maintenance', 'Security Management', 'Performance Optimization'],
    featured: true,
  },
  {
    icon: Users,
    title: 'IT Consulting',
    description: 'Strategic technology consulting to align your IT with business goals and drive digital growth.',
    features: ['Technology Strategy', 'Digital Roadmap', 'Architecture Design', 'Best Practices'],
  },
  {
    icon: Headphones,
    title: 'Technical Support',
    description: 'Expert technical support and help desk services available whenever you need them.',
    features: ['24/7 Help Desk', 'Remote Support', 'On-site Service', 'Issue Resolution'],
  },
  {
    icon: Wrench,
    title: 'Implementation',
    description: 'Professional implementation services for seamless hardware and software deployment.',
    features: ['System Deployment', 'Configuration', 'Testing', 'Go-live Support'],
    featured: true,
  },
  {
    icon: BookOpen,
    title: 'Training & Education',
    description: 'Comprehensive training programs to empower your team with the latest tech skills.',
    features: ['Technical Training', 'Certification Prep', 'Workshops', 'Documentation'],
  },
  {
    icon: Rocket,
    title: 'Project Management',
    description: 'End-to-end project management ensuring on-time and on-budget delivery.',
    features: ['Project Planning', 'Resource Management', 'Risk Assessment', 'Quality Assurance'],
  }
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2">
              <Settings className="w-4 h-4 mr-2" />
              Our Services
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-black">
              <span className="text-gradient">Professional</span>
              <br />
              <span className="text-foreground">IT Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive IT services designed to support your business operations,
              enhance productivity, and ensure optimal technology performance.
            </p>
          </div>
        </ScrollAnimation>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <ScrollAnimation
              key={service.title}
              animation="fade-up"
              delay={index * 0.1}
              className={service.featured ? 'md:col-span-2 lg:col-span-1' : ''}
            >
              <Link href="/services" className="block group h-full">
                <Card className="h-full border-2 border-border hover:border-primary/50 bg-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <CardContent className="p-6 space-y-4">
                    {/* Icon Header */}
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/70 p-3.5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Title & Description */}
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {service.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-2 pt-2">
                      {service.features.slice(0, 3).map((feature) => (
                        <div key={feature} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-xs text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Learn More */}
                    <div className="pt-4 border-t border-border/50">
                      <span className="inline-flex items-center text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </ScrollAnimation>
          ))}
        </div>

        {/* CTA Section */}
        <ScrollAnimation animation="fade-up" delay={0.2}>
          <Card className="border-2 border-primary/20 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
            <CardContent className="p-8 sm:p-12 text-center">
              <div className="space-y-6">
                <h3 className="text-2xl sm:text-3xl font-black text-gradient">Need Custom Solutions?</h3>
                <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                  Our team of certified experts is ready to help you optimize your IT infrastructure.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <SpotlightButton size="lg" className="px-6 sm:px-8 py-3 sm:py-4 font-bold rounded-xl">
                      Request Service Quote
                    </SpotlightButton>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </ScrollAnimation>
      </div>
    </section>
  )
}
