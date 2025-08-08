'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Star, Award, Shield, Zap } from 'lucide-react'

const partners = [
  {
    id: 1,
    name: 'Microsoft Azure',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    tier: 'Gold Partner',
    certifications: ['Azure Expert', 'Security Specialist'],
    expertise: 95,
    projects: 150,
    description: 'Advanced cloud solutions and enterprise services',
    color: 'bg-blue-500'
  },
  {
    id: 2,
    name: 'Amazon Web Services',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
    tier: 'Advanced Partner',
    certifications: ['Solutions Architect', 'DevOps Engineer'],
    expertise: 92,
    projects: 200,
    description: 'Comprehensive cloud infrastructure and migration',
    color: 'bg-orange-500'
  },
  {
    id: 3,
    name: 'VMware',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Vmware.svg',
    tier: 'Principal Partner',
    certifications: ['vSphere Expert', 'NSX Specialist'],
    expertise: 88,
    projects: 120,
    description: 'Virtualization and hybrid cloud solutions',
    color: 'bg-gray-600'
  },
  {
    id: 4,
    name: 'Dell Technologies',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg',
    tier: 'Titanium Partner',
    certifications: ['Infrastructure Specialist', 'Storage Expert'],
    expertise: 90,
    projects: 180,
    description: 'Enterprise hardware and infrastructure solutions',
    color: 'bg-blue-600'
  },
  {
    id: 5,
    name: 'Fortinet',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Fortinet_logo.svg',
    tier: 'Expert Partner',
    certifications: ['Security Fabric', 'NSE Certified'],
    expertise: 94,
    projects: 90,
    description: 'Next-generation cybersecurity solutions',
    color: 'bg-red-600'
  },
  {
    id: 6,
    name: 'Oracle',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg',
    tier: 'Platinum Partner',
    certifications: ['Database Expert', 'Cloud Architect'],
    expertise: 87,
    projects: 110,
    description: 'Enterprise database and cloud applications',
    color: 'bg-red-500'
  }
]

const getTierIcon = (tier: string) => {
  if (tier.includes('Gold') || tier.includes('Platinum') || tier.includes('Titanium')) {
    return <Award className="h-4 w-4 text-yellow-500" />
  }
  if (tier.includes('Expert') || tier.includes('Principal')) {
    return <Star className="h-4 w-4 text-purple-500" />
  }
  return <Shield className="h-4 w-4 text-blue-500" />
}

export default function PartnersGrid() {
  const [hoveredPartner, setHoveredPartner] = useState<number | null>(null)

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <Badge variant="outline" className="mb-4 bg-primary/10 border-primary/30 text-primary">
            <Zap className="h-3 w-3 mr-1" />
            Technology Partners
          </Badge>
          <h2 className="text-4xl font-bold text-gradient mb-4">
            Certified Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We maintain the highest level partnerships with industry leaders, ensuring our clients 
            receive cutting-edge solutions backed by world-class expertise and support.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <Card 
              key={partner.id}
              className={`card-hover card-glow transition-all duration-500 ${
                hoveredPartner === partner.id ? 'scale-105 shadow-2xl' : ''
              }`}
              onMouseEnter={() => setHoveredPartner(partner.id)}
              onMouseLeave={() => setHoveredPartner(null)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="relative mb-4 group">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={`${partner.name} logo`}
                    width={200}
                    height={80}
                    className="mx-auto transition-transform duration-300 group-hover:scale-110 object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-red-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardTitle className="text-xl font-bold">{partner.name}</CardTitle>
                <div className="flex items-center justify-center space-x-2 mt-2">
                  {getTierIcon(partner.tier)}
                  <Badge variant="secondary" className="text-xs">
                    {partner.tier}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-sm text-muted-foreground text-center">
                  {partner.description}
                </p>

                {/* Expertise Level */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Expertise Level</span>
                    <span className="font-semibold text-primary">{partner.expertise}%</span>
                  </div>
                  <Progress 
                    value={partner.expertise} 
                    className="h-2"
                  />
                </div>

                {/* Certifications */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-muted-foreground">Certifications</h4>
                  <div className="flex flex-wrap gap-1">
                    {partner.certifications.map((cert, certIndex) => (
                      <Badge 
                        key={certIndex} 
                        variant="outline" 
                        className="text-xs bg-primary/5 border-primary/20"
                      >
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Projects Completed */}
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <span className="text-sm text-muted-foreground">Projects Completed</span>
                  <span className="font-bold text-primary text-lg">{partner.projects}+</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center animate-fadeInUp">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-gradient">6</div>
            <div className="text-sm text-muted-foreground">Premier Partners</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-gradient">850+</div>
            <div className="text-sm text-muted-foreground">Total Projects</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-gradient">15+</div>
            <div className="text-sm text-muted-foreground">Certifications</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-gradient">100%</div>
            <div className="text-sm text-muted-foreground">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  )
}
