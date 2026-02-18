'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Cloud, Shield, Server, Zap, Globe, Database, ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const solutions = [
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Comprehensive cloud migration, management, and optimization services',
    features: ['AWS & Azure Migration', 'Hybrid Cloud Setup', 'Cloud Security', 'Cost Optimization'],
    color: 'from-blue-500 to-cyan-500',
    badge: 'Most Popular'
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Advanced threat protection and security compliance solutions',
    features: ['Threat Detection', 'Security Audits', 'Compliance Management', '24/7 Monitoring'],
    color: 'from-red-500 to-pink-500',
    badge: 'Enterprise'
  },
  {
    icon: Server,
    title: 'Infrastructure',
    description: 'Robust IT infrastructure design, implementation, and management',
    features: ['Network Design', 'Server Management', 'Disaster Recovery', 'Performance Monitoring'],
    color: 'from-green-500 to-emerald-500',
    badge: 'Reliable'
  },
  {
    icon: Zap,
    title: 'Digital Transformation',
    description: 'Modernize your business processes with cutting-edge technology',
    features: ['Process Automation', 'Digital Strategy', 'Legacy Modernization', 'Change Management'],
    color: 'from-yellow-500 to-orange-500',
    badge: 'Innovation'
  },
  {
    icon: Database,
    title: 'Data Management',
    description: 'Comprehensive data strategy, analytics, and management solutions',
    features: ['Data Analytics', 'Database Optimization', 'Data Migration', 'Business Intelligence'],
    color: 'from-purple-500 to-indigo-500',
    badge: 'Analytics'
  },
  {
    icon: Globe,
    title: 'Managed Services',
    description: '24/7 IT support and management for your entire technology stack',
    features: ['24/7 Support', 'Proactive Monitoring', 'Maintenance', 'Help Desk'],
    color: 'from-teal-500 to-blue-500',
    badge: 'Support'
  }
]

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2">
            <Zap className="w-4 h-4 mr-2" />
            Our Solutions
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-black">
            <span className="text-foreground">Comprehensive</span>
            <br />
            <span className="text-gradient">IT Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From cloud migration to cybersecurity, we provide end-to-end IT solutions 
            that drive business growth and operational excellence.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution) => (
            <Link 
              key={solution.title} 
              href="/solutions"
              className="card-hover card-glow border-border/50 bg-card/50 backdrop-blur-sm block relative overflow-hidden"
              aria-label={`Learn more about ${solution.title}`}
            >
              <Card className="h-full">
                {solution.badge && (
                  <Badge className="absolute top-4 right-4 bg-primary/20 text-primary border-primary/30 text-xs">
                    {solution.badge}
                  </Badge>
                )}
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${solution.color} p-4 shadow-lg mb-4`}>
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">{solution.title}</CardTitle>
                  <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {solution.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="ghost" className="w-full justify-between group hover:bg-primary/10 mt-4">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-primary/10 via-red-500/10 to-primary/10 border-primary/20">
          <CardContent className="p-12 text-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-black text-gradient">Ready to Get Started?</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Let our experts help you choose the right solutions for your business needs. 
                Get a free consultation and custom proposal today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="btn-primary px-8 py-4 font-bold rounded-xl">
                  <Link href="/contact">Get Free Consultation</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="btn-outline px-8 py-4 font-bold rounded-xl">
                  <Link href="/solutions">View All Solutions</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
