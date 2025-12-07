'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Settings, Users, Headphones, Lightbulb, Zap, Shield, CheckCircle } from 'lucide-react'
import { ScrollAnimation } from '@/components/ui/scroll-animation'
import { ParticleNetwork } from '@/components/ui/particle-network'

const highlights = [
  { icon: Lightbulb, title: 'Consulting', desc: 'Strategic IT Planning' },
  { icon: Settings, title: 'Implementation', desc: 'Expert Deployment' },
  { icon: Users, title: 'Managed Services', desc: '24/7 Management' },
  { icon: Headphones, title: 'Support', desc: 'Always Available' },
]

const ServicesHero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Particle Background */}
      <ParticleNetwork
        particleCount={60}
        particleColor="rgba(159, 34, 32, 0.5)"
        lineColor="rgba(159, 34, 32, 0.08)"
        maxDistance={100}
        speed={0.2}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">
        <div className="text-center space-y-8">
          <ScrollAnimation animation="fade-up">
            <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 mb-4">
              <Zap className="w-4 h-4 mr-2" />
              Enterprise IT Services
            </Badge>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={0.1}>
            <h1 className="text-5xl lg:text-7xl font-black leading-tight">
              <span className="text-foreground">Professional IT</span>
              <br />
              <span className="text-gradient">Services</span>
            </h1>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={0.2}>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Expert consulting, implementation, and managed services to optimize your IT infrastructure
              and accelerate your digital transformation journey.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="btn-primary px-8 py-4 font-bold rounded-xl"
              >
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="btn-outline px-8 py-4 font-bold rounded-xl"
              >
                <Link href="/solutions">
                  View Solutions
                </Link>
              </Button>
            </div>
          </ScrollAnimation>

          {/* Service Highlights */}
          <ScrollAnimation animation="fade-up" delay={0.4}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
              {highlights.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <div
                    key={index}
                    className="group text-center space-y-3 p-6 rounded-2xl border-2 border-border bg-card hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-primary to-primary/70 p-3 shadow-lg group-hover:scale-110 transition-transform">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                )
              })}
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}

export default ServicesHero
