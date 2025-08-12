import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Case Studies - NILE.COM',
  description: 'Explore our successful IT solutions implementations and client success stories.',
}

const caseStudies = [
  {
    title: 'Digital Transformation for EgyptBank',
    client: 'EgyptBank',
    industry: 'Financial Services',
    challenge: 'Modernizing legacy systems while maintaining 24/7 availability',
    solution: 'Implemented hybrid cloud infrastructure with zero downtime migration',
    results: '40% cost reduction, 60% performance improvement',
    tags: ['Cloud Migration', 'Financial Services', 'Legacy Modernization']
  },
  {
    title: 'Cybersecurity Overhaul for HealthCare Egypt',
    client: 'HealthCare Egypt',
    industry: 'Healthcare',
    challenge: 'Achieving HIPAA compliance and protecting patient data',
    solution: 'Deployed zero-trust architecture with advanced threat protection',
    results: '100% compliance achieved, 99.99% uptime maintained',
    tags: ['Cybersecurity', 'Healthcare', 'Compliance']
  },
  {
    title: 'Enterprise Infrastructure for RetailCorp',
    client: 'RetailCorp',
    industry: 'Retail',
    challenge: 'Scaling infrastructure to support e-commerce growth',
    solution: 'Built scalable cloud-native architecture with auto-scaling',
    results: '300% increase in traffic handling, 50% faster page load times',
    tags: ['Infrastructure', 'Retail', 'Cloud-Native']
  }
]

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-20 left-20 w-64 h-64 border border-primary/30 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-secondary/30 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-foreground">Client</span>
            <br />
            <span className="text-gradient">Success Stories</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore how we've helped organizations transform their IT infrastructure and achieve business success.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
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
                      <p className="text-muted-foreground">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Solution</h3>
                      <p className="text-muted-foreground">{study.solution}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Results</h3>
                      <p className="text-muted-foreground">{study.results}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-6">
                    {study.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Button asChild variant="outline" className="mt-6 group">
                    <Link href="/contact">
                      View Full Case Study
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Card className="bg-gradient-to-r from-primary/10 via-red-500/10 to-primary/10 border-primary/20">
              <CardContent className="p-12 text-center">
                <div className="space-y-6">
                  <h3 className="text-3xl font-black text-gradient">Have a project in mind?</h3>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Let us help you achieve similar success with our proven IT solutions and expert team.
                  </p>
                  <Button asChild size="lg" className="btn-primary px-8 py-4 font-bold rounded-xl">
                    <Link href="/contact">Get Started Today</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}