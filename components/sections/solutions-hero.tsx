'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, Zap, Target, Rocket } from 'lucide-react'
import Link from 'next/link'

const SolutionsHero = () => {
  return (
    <section className="relative py-20 hero-gradient overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-primary/20 to-red-500/20 rounded-full blur-xl float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-full blur-xl float-delayed"></div>

      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <Badge variant="outline" className="border-primary/30 text-primary bg-gradient-to-r from-primary/10 to-red-500/10 px-6 py-3 text-lg font-semibold">
            <Rocket className="w-5 h-5 mr-2" />
            Enterprise Solutions Portfolio
          </Badge>

          <h1 className="text-4xl md:text-7xl font-bold leading-tight">
            Comprehensive IT Solutions for 
            <span className="text-gradient block mt-2">
              Modern Enterprises
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            From cloud infrastructure to cybersecurity, we deliver end-to-end technology solutions 
            that drive business growth, enhance security, and optimize operational efficiency.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8 relative z-10">
            <Button size="lg" className="btn-primary px-10 py-4 rounded-xl text-lg font-bold" onClick={() => window.location.href = '/contact'}>
              Explore Solutions
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
            <Button variant="outline" size="lg" className="btn-outline px-10 py-4 rounded-xl text-lg font-bold" onClick={() => window.location.href = '/contact'}>
              <Target className="mr-3 w-6 h-6" />
              Get Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SolutionsHero
