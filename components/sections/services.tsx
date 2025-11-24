'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SpotlightButton } from '@/components/ui/spotlight-button'
import { GlassmorphismCard } from '@/components/ui/glassmorphism-card'
import { Settings, Users, Headphones, Wrench, BookOpen, Rocket, ArrowRight, Clock, Shield, Award } from 'lucide-react'
import Link from 'next/link'
import { TiltCard } from '@/components/ui/tilt-card'

interface Service {
  icon: React.ElementType
  title: string
  description: string
  features: string[]
  color: string
}

const services: Service[] = [
  {
    icon: Settings,
    title: 'Managed IT Services',
    description: 'Complete IT infrastructure management and support',
    features: ['24/7 Monitoring', 'Proactive Maintenance', 'Security Management', 'Performance Optimization'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Users,
    title: 'IT Consulting',
    description: 'Strategic technology consulting and planning services',
    features: ['Technology Strategy', 'Digital Roadmap', 'Architecture Design', 'Best Practices'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Headphones,
    title: 'Technical Support',
    description: 'Expert technical support and help desk services',
    features: ['24/7 Help Desk', 'Remote Support', 'On-site Service', 'Issue Resolution'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Wrench,
    title: 'Implementation',
    description: 'Professional implementation and deployment services',
    features: ['System Deployment', 'Configuration', 'Testing', 'Go-live Support'],
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: BookOpen,
    title: 'Training & Education',
    description: 'Comprehensive training programs for your team',
    features: ['Technical Training', 'Certification Prep', 'Workshops', 'Documentation'],
    color: 'from-teal-500 to-blue-500'
  },
  {
    icon: Rocket,
    title: 'Project Management',
    description: 'End-to-end project management and delivery',
    features: ['Project Planning', 'Resource Management', 'Risk Assessment', 'Quality Assurance'],
    color: 'from-indigo-500 to-purple-500'
  }
]

const benefits = [
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Round-the-clock support and monitoring'
  },
  {
    icon: Shield,
    title: 'Guaranteed SLA',
    description: '99.9% uptime guarantee with SLA backing'
  },
  {
    icon: Award,
    title: 'Certified Experts',
    description: 'Team of certified and experienced professionals'
  }
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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

        {/* Services Grid - Smaller Cards with 3D Tilt Effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => {
            // Make the first service card (Managed IT Services) slightly larger but not oversized
            const isFeatured = index === 0;
            const sizeClass = isFeatured ? "md:col-span-2" : ""; // Only span 2 columns, not rows

            return (
              <TiltCard
                key={service.title}
                className="block"
                rotateXMax={8}
                rotateYMax={8}
                scale={1.03}
              >
                <Link
                  key={service.title}
                  href="/services"
                  className={`card-hover card-glow border-border/50 bg-card/50 backdrop-blur-sm block ${sizeClass}`}
                  aria-label={`Learn more about ${service.title}`}
                >
                  <Card className="h-full">
                    <CardHeader className="pb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} p-3 shadow-lg mb-3`}>
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-lg font-bold text-foreground">{service.title}</CardTitle>
                      <p className="text-sm text-muted-foreground leading-relaxed min-h-[3rem]">{service.description}</p>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="space-y-1">
                        {service.features.slice(0, 3).map((feature) => ( // Show only 3 features to keep card smaller
                          <div key={feature} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                            <span className="text-xs text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button variant="ghost" size="sm" className="w-full justify-between group hover:bg-primary/10 mt-2">
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </TiltCard>
            );
          })}
        </div>

        {/* Benefits Section with Glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <GlassmorphismCard key={benefit.title} intensity="sm" blur="md">
              <Card className="text-center bg-transparent border-0 shadow-none">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-r from-primary to-red-500 p-3 shadow-lg">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground min-h-[3rem]">{benefit.description}</p>
                </CardContent>
              </Card>
            </GlassmorphismCard>
          ))}
        </div>

        {/* CTA Section with Glassmorphism */}
        <GlassmorphismCard intensity="sm" blur="lg">
          <Card className="bg-transparent border-0 shadow-none">
            <CardContent className="p-8 sm:p-12 text-center">
              <div className="space-y-6">
                <h3 className="text-2xl sm:text-3xl font-black text-gradient">Need Professional IT Services?</h3>
                <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                  Our team of certified experts is ready to help you optimize your IT infrastructure
                  and support your business goals with professional services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <SpotlightButton size="lg" className="px-6 sm:px-8 py-3 sm:py-4 font-bold rounded-xl">
                      Request Service Quote
                    </SpotlightButton>
                  </Link>
                  <Button asChild variant="outline" size="lg" className="btn-outline px-6 sm:px-8 py-3 sm:py-4 font-bold rounded-xl">
                    <Link href="/services">View All Services</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </GlassmorphismCard>
      </div>
    </section>
  )
}
