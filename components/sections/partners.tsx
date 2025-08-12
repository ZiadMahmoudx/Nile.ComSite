'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Award, Users, ArrowRight, Star, CheckCircle, TrendingUp } from 'lucide-react'
import Link from 'next/link'

const partners = [
  {
    name: 'Microsoft',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    tier: 'Gold Partner',
    expertise: 95,
    projects: 150,
    certifications: ['Azure Expert', 'Office 365', 'Security'],
    color: 'from-blue-500 to-blue-600'
  },
  {
    name: 'Amazon AWS',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
    tier: 'Advanced Partner',
    expertise: 92,
    projects: 120,
    certifications: ['Solutions Architect', 'DevOps', 'Security'],
    color: 'from-orange-500 to-orange-600'
  },
  {
    name: 'VMware',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Vmware.svg',
    tier: 'Premier Partner',
    expertise: 88,
    projects: 100,
    certifications: ['vSphere', 'NSX', 'vSAN'],
    color: 'from-gray-500 to-gray-600'
  },
  {
    name: 'Dell Technologies',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg',
    tier: 'Titanium Partner',
    expertise: 90,
    projects: 80,
    certifications: ['Server Expert', 'Storage', 'Networking'],
    color: 'from-blue-600 to-blue-700'
  },
  {
    name: 'Fortinet',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Fortinet_logo.svg',
    tier: 'Expert Partner',
    expertise: 85,
    projects: 75,
    certifications: ['NSE 7', 'Security Fabric', 'SASE'],
    color: 'from-red-500 to-red-600'
  },
  {
    name: 'Oracle',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg',
    tier: 'Platinum Partner',
    expertise: 87,
    projects: 60,
    certifications: ['Database', 'Cloud', 'Applications'],
    color: 'from-red-600 to-red-700'
  }
]

const stats = [
  { label: 'Technology Partners', value: '25+', icon: Users },
  { label: 'Certifications', value: '100+', icon: Award },
  { label: 'Success Rate', value: '99.9%', icon: TrendingUp },
]

export default function Partners() {
  return (
    <section id="partners" className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2">
            <Award className="w-4 h-4 mr-2" />
            Our Partners
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-black">
            <span className="text-foreground">Strategic</span>
            <br />
            <span className="text-gradient">Technology Partners</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We partner with industry leaders to deliver cutting-edge solutions and 
            maintain the highest standards of service excellence.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat) => (
            <Card key={stat.label} className="text-center border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r from-primary to-red-500 p-4 shadow-lg">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-black text-gradient">{stat.value}</div>
                <div className="text-sm font-semibold text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {partners.map((partner) => (
            <Link 
              key={partner.name} 
              href="/partners"
              className="card-hover card-glow border-border/50 bg-card/50 backdrop-blur-sm block"
            >
              <Card className="h-full">
                <CardContent className="p-6 space-y-6">
                  {/* Partner Logo */}
                  <div className="text-center">
                    <img 
                      src={partner.logo || "/placeholder.svg"} 
                      alt={`${partner.name} Logo`}
                      className="h-16 mx-auto object-contain"
                    />
                  </div>

                  {/* Partner Info */}
                  <div className="text-center space-y-2">
                    <h3 className="text-xl font-bold text-foreground">{partner.name}</h3>
                    <Badge className={`bg-gradient-to-r ${partner.color} text-white border-0`}>
                      <Star className="w-3 h-3 mr-1" />
                      {partner.tier}
                    </Badge>
                  </div>

                  {/* Expertise Level */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Expertise Level</span>
                      <span className="font-semibold text-foreground">{partner.expertise}%</span>
                    </div>
                    <Progress value={partner.expertise} className="h-2" />
                  </div>

                  {/* Projects Completed */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Projects Completed</span>
                    <span className="font-bold text-primary">{partner.projects}+</span>
                  </div>

                  {/* Certifications */}
                  <div className="space-y-2">
                    <span className="text-sm font-semibold text-foreground">Key Certifications</span>
                    <div className="flex flex-wrap gap-1">
                      {partner.certifications.map((cert) => (
                        <Badge key={cert} variant="outline" className="text-xs border-primary/30 text-primary">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button variant="ghost" className="w-full justify-between group hover:bg-primary/10">
                    View Partnership
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Benefits Section */}
        <Card className="bg-gradient-to-r from-primary/10 via-red-500/10 to-primary/10 border-primary/20 mb-16">
          <CardContent className="p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-black text-gradient">Partnership Benefits</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our strategic partnerships enable us to deliver world-class solutions 
                  with the latest technologies and industry best practices.
                </p>
                <div className="space-y-4">
                  {[
                    'Access to latest technologies and innovations',
                    'Certified expertise and professional training',
                    'Priority support and technical resources',
                    'Competitive pricing and licensing benefits',
                    'Joint go-to-market opportunities'
                  ].map((benefit, index) => (
                    <div key={benefit} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-r from-primary to-red-500 shadow-2xl mb-6">
                  <Award className="w-16 h-16 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-2">25+ Partners</h4>
                <p className="text-muted-foreground">Industry-leading technology partnerships</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-primary/10 via-red-500/10 to-primary/10 border-primary/20">
          <CardContent className="p-12 text-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-black text-gradient">Ready to Leverage Our Partnerships?</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Benefit from our strategic partnerships and get access to the best technology 
                solutions at competitive prices with expert implementation and support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="btn-primary px-8 py-4 font-bold rounded-xl">
                  <Link href="/contact">Explore Partnerships</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="btn-outline px-8 py-4 font-bold rounded-xl">
                  <Link href="/partners">View All Partners</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
