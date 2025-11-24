'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { SpotlightButton } from '@/components/ui/spotlight-button'
import { Badge } from '@/components/ui/badge'
import { Cloud, Shield, Server, Smartphone, Database, Network, ArrowRight, CheckCircle, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

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

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
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
        </motion.div>

        {/* Solutions Grid - Smaller Cards */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href={`/contact?subject=${encodeURIComponent(solution.title)}`}
                  className={`card-hover tech-glow transition-all duration-500 block ${
                    hoveredSolution === solution.id ? 'scale-105 shadow-2xl border-primary/30' : ''
                  }`}
                  onMouseEnter={() => setHoveredSolution(solution.id)}
                  onMouseLeave={() => setHoveredSolution(null)}
                  aria-label={`Learn more about ${solution.title}`}
                >
                  <Card
                    id={solution.id.toString()}
                    className="h-full"
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-3">
                        <div className={`p-2 rounded-md ${solution.bgColor} ${solution.color}`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <Badge variant="outline" className="text-xs py-1">
                          {solution.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg font-bold">{solution.title}</CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        {solution.description}
                      </p>

                      {/* Features List */}
                      <div className="space-y-1">
                        <h4 className="text-xs font-semibold text-muted-foreground">Key Features</h4>
                        <div className="space-y-1">
                          {solution.features.slice(0, 3).map((feature, featureIndex) => ( // Show only 3 features to keep card smaller
                            <div key={featureIndex} className="flex items-center space-x-1.5 text-xs">
                              <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                              <span className="text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full btn-outline group mt-3 text-sm"
                        asChild
                      >
                        <span>
                          Learn More
                          <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                        </span>
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          className="text-center bg-gradient-to-r from-primary/10 via-red-500/10 to-red-600/10 rounded-2xl p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gradient mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let our experts design a custom solution tailored to your specific needs and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-primary">
              <Link href="/contact">
                Get Free Consultation
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="btn-outline">
              <Link href="/services">
                View All Services
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}