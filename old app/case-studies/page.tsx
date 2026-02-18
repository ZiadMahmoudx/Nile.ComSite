'use client'

import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, BookOpen } from 'lucide-react'
import { ParticleNetwork } from '@/components/ui/particle-network'
import { ScrollAnimation } from '@/components/ui/scroll-animation'

const caseStudies = [
  {
    id: 'bank-digital-transformation',
    title: 'Digital Transformation for EgyptBank',
    client: 'EgyptBank',
    industry: 'Financial Services',
    challenge: 'Modernizing legacy systems while maintaining 24/7 availability',
    solution: 'Implemented hybrid cloud infrastructure with zero downtime migration',
    results: '40% cost reduction, 60% performance improvement',
    tags: ['Cloud Migration', 'Financial Services']
  },
  {
    id: 'healthcare-cloud-migration',
    title: 'Cybersecurity Overhaul for HealthCare Egypt',
    client: 'HealthCare Egypt',
    industry: 'Healthcare',
    challenge: 'Achieving HIPAA compliance and protecting patient data',
    solution: 'Deployed zero-trust architecture with advanced threat protection',
    results: '100% compliance achieved, 99.99% uptime',
    tags: ['Cybersecurity', 'Healthcare']
  },
  {
    id: 'retail-security-overhaul',
    title: 'Enterprise Infrastructure for RetailCorp',
    client: 'RetailCorp',
    industry: 'Retail',
    challenge: 'Scaling infrastructure to support e-commerce growth',
    solution: 'Built scalable cloud-native architecture with auto-scaling',
    results: '300% traffic handling increase, 50% faster loads',
    tags: ['Infrastructure', 'Retail']
  },
  {
    id: 'telecom-network-upgrade',
    title: 'Network Modernization for Telecom Egypt',
    client: 'Telecom Egypt',
    industry: 'Telecommunications',
    challenge: 'Upgrading network infrastructure for 5G readiness',
    solution: 'Deployed next-generation SD-WAN and 5G infrastructure',
    results: '10x network capacity, 40% latency reduction',
    tags: ['Networking', 'Telecommunications']
  }
]

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-background">
        <ParticleNetwork
          particleCount={60}
          particleColor="rgba(159, 34, 32, 0.5)"
          lineColor="rgba(159, 34, 32, 0.08)"
          maxDistance={120}
          speed={0.2}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center">
          <ScrollAnimation animation="fade-up">
            <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 mb-6">
              <BookOpen className="w-4 h-4 mr-2" />
              Success Stories
            </Badge>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={0.1}>
            <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
              <span className="text-foreground">Client</span>
              <br />
              <span className="text-gradient">Case Studies</span>
            </h1>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={0.2}>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore how we've helped organizations transform their IT infrastructure.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid gap-8">
            {caseStudies.map((study, index) => (
              <ScrollAnimation key={index} animation="fade-up" delay={index * 0.1}>
                <Card className="group border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                  <CardHeader>
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                          {study.title}
                        </CardTitle>
                        <CardDescription className="mt-2">
                          <span className="font-semibold">{study.client}</span> • {study.industry}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Challenge</h3>
                        <p className="text-sm text-muted-foreground">{study.challenge}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Solution</h3>
                        <p className="text-sm text-muted-foreground">{study.solution}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Results</h3>
                        <p className="text-sm text-muted-foreground">{study.results}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-6">
                      {study.tags.map((tag, i) => (
                        <Badge key={i} variant="secondary">{tag}</Badge>
                      ))}
                    </div>

                    <Button asChild variant="outline" className="mt-6 group">
                      <Link href={`/case-studies/${study.id}`}>
                        View Full Case Study
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation animation="fade-up" delay={0.3}>
            <div className="text-center mt-12">
              <Card className="border-2 border-primary/20 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
                <CardContent className="p-12 text-center">
                  <h3 className="text-2xl font-black text-gradient mb-4">Have a project in mind?</h3>
                  <p className="text-muted-foreground mb-6">Let us help you achieve similar success.</p>
                  <Button asChild size="lg" className="btn-primary px-8 py-4 font-bold rounded-xl">
                    <Link href="/contact">Get Started Today</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  )
}