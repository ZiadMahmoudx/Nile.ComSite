'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Cloud, Shield, Server, Smartphone, Database, Network, ArrowRight, CheckCircle, Zap } from 'lucide-react'

const solutions = [
  {
    id: 1,
    icon: Cloud,
    title: 'Cloud Migration',
    description: 'Seamless transition to cloud infrastructure with minimal downtime and maximum efficiency.',
    features: ['AWS & Azure Certified', '99.9% Uptime SLA', '24/7 Monitoring', 'Cost Optimization'],
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    category: 'Cloud Services'
  },
  {
    id: 2,
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Advanced threat protection and security solutions to safeguard your digital assets.',
    features: ['Zero Trust Architecture', 'SOC 2 Compliance', 'Threat Intelligence', 'Incident Response'],
    color: 'text-red-500',
    bgColor: 'bg-red-500/10',
    category: 'Security'
  },
  {
    id: 3,
    icon: Server,
    title: 'Infrastructure',
    description: 'Robust IT infrastructure solutions designed for scalability and performance.',
    features: ['Hybrid Cloud Setup', 'Load Balancing', 'Disaster Recovery', 'Performance Tuning'],
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
    category: 'Infrastructure'
  },
  {
    id: 4,
    icon: Smartphone,
    title: 'Digital Transformation',
    description: 'Modernize your business processes with cutting-edge digital solutions.',
    features: ['Process Automation', 'API Integration', 'Mobile Solutions', 'Analytics Dashboard'],
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    category: 'Transformation'
  },
  {
    id: 5,
    icon: Database,
    title: 'Data Management',
    description: 'Comprehensive data solutions for storage, analytics, and business intelligence.',
    features: ['Big Data Analytics', 'Data Warehousing', 'Real-time Processing', 'ML Integration'],
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    category: 'Data & Analytics'
  },
  {
    id: 6,
    icon: Network,
    title: 'Network Solutions',
    description: 'High-performance networking solutions for seamless connectivity and communication.',
    features: ['SD-WAN Implementation', 'Network Security', '5G Integration', 'IoT Connectivity'],
    color: 'text-teal-500',
    bgColor: 'bg-teal-500/10',
    category: 'Networking'
  }
]

export default function SolutionsGrid() {
  const [hoveredSolution, setHoveredSolution] = useState<number | null>(null)
  const router = useRouter()

  const handleLearnMore = (id: number) => {
    // Scroll to the solution card
    const element = document.getElementById(id.toString())
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      // Highlight the card
      setHoveredSolution(id)
      // Remove highlight after 2 seconds
      setTimeout(() => {
        setHoveredSolution(null)
      }, 2000)
    }
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <Badge variant="outline" className="mb-4 bg-primary/10 border-primary/30 text-primary">
            <Zap className="h-3 w-3 mr-1" />
            Our Solutions
          </Badge>
          <h2 className="text-4xl font-bold text-gradient mb-4">
            Comprehensive IT Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From cloud migration to cybersecurity, we provide end-to-end technology solutions 
            that drive innovation and accelerate your business growth.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <Card 
                key={solution.id}
                id={solution.id.toString()}
                className={`card-hover tech-glow transition-all duration-500 ${
                  hoveredSolution === solution.id ? 'scale-105 shadow-2xl border-primary/30' : ''
                }`}
                onMouseEnter={() => setHoveredSolution(solution.id)}
                onMouseLeave={() => setHoveredSolution(null)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg ${solution.bgColor} ${solution.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {solution.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold">{solution.title}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">
                    {solution.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-muted-foreground">Key Features</h4>
                    <div className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    onClick={() => handleLearnMore(solution.id)}
                    variant="outline" 
                    className="w-full btn-outline group mt-6"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/10 via-red-500/10 to-red-600/10 rounded-2xl p-12 animate-fadeInUp">
          <h3 className="text-3xl font-bold text-gradient mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let our experts design a custom solution tailored to your specific needs and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => router.push('/contact')} size="lg" className="btn-primary">
              Get Free Consultation
            </Button>
            <Button onClick={() => router.push('/services')} variant="outline" size="lg" className="btn-outline">
              View All Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
