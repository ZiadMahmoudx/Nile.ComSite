'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, Users, Award, Globe } from 'lucide-react'
import Link from 'next/link'

const PartnersHero = () => {
  return (
    <section className="relative py-20 hero-gradient overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-primary/20 to-red-500/20 rounded-full blur-xl float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-full blur-xl float-delayed"></div>

      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <Badge variant="outline" className="border-primary/30 text-primary bg-gradient-to-r from-primary/10 to-red-500/10 px-6 py-3 text-lg font-semibold">
            <Users className="w-5 h-5 mr-2" />
            Strategic Technology Partnerships
          </Badge>

          <h1 className="text-4xl md:text-7xl font-bold leading-tight">
            Powered by Industry-Leading 
            <span className="text-gradient block mt-2">
              Technology Partners
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Our strategic partnerships with global technology leaders enable us to deliver world-class solutions. 
            With 200+ certifications across major platforms, we bring you the latest innovations and expert support.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-primary">50+</div>
              <div className="text-muted-foreground">Technology Partners</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-primary">200+</div>
              <div className="text-muted-foreground">Certifications</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-primary">25+</div>
              <div className="text-muted-foreground">Years Partnership</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Button asChild size="lg" className="btn-primary px-10 py-4 rounded-xl text-lg font-bold relative z-20">
              <Link href="/contact">
                Partner With Us
                <ArrowRight className="ml-3 w-6 h-6" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="btn-outline px-10 py-4 rounded-xl text-lg font-bold relative z-20">
              <Link href="/solutions">
                <Globe className="mr-3 w-6 h-6" />
                View Solutions
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PartnersHero
