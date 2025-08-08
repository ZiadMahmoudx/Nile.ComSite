'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Settings, Users, Headphones, Wrench, BookOpen, Rocket, ArrowRight, Clock, Shield, Award } from 'lucide-react'
import Link from 'next/link'

const services = [
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

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={service.title} className="card-hover card-glow border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} p-4 shadow-lg mb-4`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">{service.title}</CardTitle>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button asChild variant="ghost" className="w-full justify-between group hover:bg-primary/10 mt-4">
                  <Link href="/services">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={benefit.title} className="text-center border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r from-primary to-red-500 p-4 shadow-lg">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-primary/10 via-red-500/10 to-primary/10 border-primary/20">
          <CardContent className="p-12 text-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-black text-gradient">Need Professional IT Services?</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our team of certified experts is ready to help you optimize your IT infrastructure 
                and support your business goals with professional services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="btn-primary px-8 py-4 font-bold rounded-xl">
                  <Link href="/contact">Request Service Quote</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="btn-outline px-8 py-4 font-bold rounded-xl">
                  <Link href="/services">View All Services</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
