'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Calendar, Users, Award, Target, Building } from 'lucide-react'
import { ParticleNetwork } from '@/components/ui/particle-network'
import { ScrollAnimation } from '@/components/ui/scroll-animation'

const AboutHero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Particle Background */}
      <ParticleNetwork
        particleCount={60}
        particleColor="rgba(159, 34, 32, 0.5)"
        lineColor="rgba(159, 34, 32, 0.08)"
        maxDistance={120}
        speed={0.2}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="text-center space-y-8">
          <ScrollAnimation animation="fade-up">
            <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2">
              <Building className="w-4 h-4 mr-2" />
              About Us
            </Badge>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={0.1}>
            <h1 className="text-5xl lg:text-7xl font-black leading-tight">
              <span className="text-foreground">About</span>
              <br />
              <span className="text-gradient">NILE.COM</span>
            </h1>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={0.2}>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              For over 25 years, we have been Egypt's trusted partner in digital transformation,
              delivering innovative IT solutions that drive business success.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="btn-primary px-8 py-4 font-bold rounded-xl">
                <Link href="/contact">
                  Work With Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="btn-outline px-8 py-4 font-bold rounded-xl">
                <Link href="/solutions">
                  Our Solutions
                </Link>
              </Button>
            </div>
          </ScrollAnimation>

          {/* Company highlights */}
          <ScrollAnimation animation="fade-up" delay={0.4}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
              {[
                { icon: Calendar, value: 'Since 1999', label: '25+ Years Experience' },
                { icon: Users, value: '1,750+', label: 'Satisfied Customers' },
                { icon: Award, value: 'Industry Leader', label: 'Premier Certifications' },
                { icon: Target, value: '2,500+', label: 'Projects Completed' },
              ].map((stat, index) => (
                <div key={index} className="text-center space-y-3 p-6 rounded-2xl border-2 border-border bg-card">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-primary to-primary/70 p-2.5 shadow-lg">
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-foreground">{stat.value}</h3>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}

export default AboutHero
