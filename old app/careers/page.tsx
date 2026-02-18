'use client'

import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Users, Award, Briefcase, MapPin, Heart, DollarSign, Calendar } from 'lucide-react'
import { ParticleNetwork } from '@/components/ui/particle-network'
import { ScrollAnimation } from '@/components/ui/scroll-animation'

const benefits = [
  { icon: DollarSign, title: 'Competitive Salary', description: 'Attractive compensation with bonuses' },
  { icon: Award, title: 'Professional Growth', description: 'Continuous learning opportunities' },
  { icon: Heart, title: 'Health & Wellness', description: 'Comprehensive health insurance' },
  { icon: Calendar, title: 'Work-Life Balance', description: 'Flexible working arrangements' }
]

const positions = [
  { title: 'Senior Cloud Solutions Architect', department: 'Cloud Services', location: 'Cairo', experience: '5+ years' },
  { title: 'Cybersecurity Specialist', department: 'Security', location: 'Cairo', experience: '3+ years' },
  { title: 'IT Project Manager', department: 'Project Delivery', location: 'Cairo', experience: '4+ years' },
  { title: 'DevOps Engineer', department: 'Infrastructure', location: 'Cairo', experience: '3+ years' }
]

export default function CareersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-background">
        <ParticleNetwork
          particleCount={60}
          particleColor="rgba(159, 34, 32, 0.5)"
          lineColor="rgba(159, 34, 32, 0.08)"
          maxDistance={120}
          speed={0.2}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center">
          <div className="space-y-8">
            <ScrollAnimation animation="fade-up">
              <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2">
                <Briefcase className="w-4 h-4 mr-2" />
                Join Our Team
              </Badge>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={0.1}>
              <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                <span className="text-foreground">Build Your</span>
                <br />
                <span className="text-gradient">Career</span>
              </h1>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={0.2}>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Be part of Egypt's leading IT solutions provider. Join a team of passionate professionals.
              </p>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="btn-primary px-8 py-4 font-bold rounded-xl">
                  <Link href="#openings">
                    View Open Positions
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={0.4}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                {[
                  { icon: Users, value: '100+', label: 'Tech Experts' },
                  { icon: Briefcase, value: '25+', label: 'Years' },
                  { icon: Award, value: '200+', label: 'Certifications' },
                  { icon: Heart, value: 'Great', label: 'Culture' },
                ].map((stat, i) => (
                  <div key={i} className="text-center p-4 rounded-2xl border-2 border-border bg-card">
                    <div className="w-10 h-10 mx-auto rounded-lg bg-gradient-to-br from-primary to-primary/70 p-2 shadow-lg mb-2">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black mb-4">Why Join NILE.COM?</h2>
            </div>
          </ScrollAnimation>
          <div className="grid md:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <ScrollAnimation key={i} animation="fade-up" delay={i * 0.1}>
                <Card className="text-center border-2 border-border hover:border-primary/50 transition-all">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-primary to-primary/70 p-2.5 shadow-lg mb-4">
                      <b.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold mb-2">{b.title}</h3>
                    <p className="text-sm text-muted-foreground">{b.description}</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black mb-4">Open Positions</h2>
            </div>
          </ScrollAnimation>
          <div className="grid gap-4">
            {positions.map((p, i) => (
              <ScrollAnimation key={i} animation="fade-up" delay={i * 0.1}>
                <Card className="group border-2 border-border hover:border-primary/50 transition-all">
                  <CardContent className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{p.title}</h3>
                      <p className="text-sm text-muted-foreground">{p.department} • {p.location} • {p.experience}</p>
                    </div>
                    <Button asChild variant="outline">
                      <Link href="/contact">Apply Now</Link>
                    </Button>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}