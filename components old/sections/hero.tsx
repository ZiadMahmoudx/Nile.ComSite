'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ParticleNetwork } from '@/components/ui/particle-network'
import { Button } from '@/components/ui/button'
import { SpotlightButton } from '@/components/ui/spotlight-button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ScrollAnimation } from '@/components/ui/scroll-animation'
import { AnimatedCounter } from '@/components/ui/animated-counter'
import { ArrowRight, Shield, Cloud, Zap, Globe, Users, Award, TrendingUp, CheckCircle, Play, Sparkles, Rocket } from 'lucide-react'

const stats = [
  { label: 'Enterprise Clients', value: '500+', icon: Users },
  { label: 'Years of Excellence', value: '25+', icon: Award },
  { label: 'Success Rate', value: '99.9%', icon: TrendingUp },
  { label: 'Global Reach', value: '50+', icon: Globe },
]

const services = [
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services',
    color: 'bg-blue-500',
    shadow: 'shadow-blue-500/30'
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Advanced threat protection and security solutions',
    color: 'bg-red-500',
    shadow: 'shadow-red-500/30'
  },
  {
    icon: Zap,
    title: 'Digital Transformation',
    description: 'Modernize your business with cutting-edge technology',
    color: 'bg-amber-500',
    shadow: 'shadow-amber-500/30'
  },
  {
    icon: Rocket,
    title: 'IT Consulting',
    description: 'Strategic guidance for technology decisions',
    color: 'bg-green-500',
    shadow: 'shadow-green-500/30'
  }
]

const achievements = [
  'ISO 27001 Certified',
  'Microsoft Gold Partner',
  'AWS Advanced Partner',
  '24/7 Expert Support'
]

export default function Hero() {
  const [currentStat, setCurrentStat] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const CurrentIcon = stats[currentStat].icon

  return (
    <section className="relative min-h-[80vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Background Particles - Restored to Hero only with improved visibility */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <ParticleNetwork particleCount={100} particleColor="rgba(159, 34, 32, 0.6)" lineColor="rgba(159, 34, 32, 0.2)" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <ScrollAnimation animation="fade-up" delay={0.1}>
              <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 mb-4">
                <Sparkles className="w-4 h-4 mr-2" />
                Leading IT Solutions Provider
              </Badge>
            </ScrollAnimation>

            <div className="space-y-2">
              <ScrollAnimation animation="fade-up" delay={0.2}>
                <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight">
                  <span className="text-gradient">Transform</span>{' '}
                  <span className="text-foreground">Your</span>
                  <br />
                  <span className="text-foreground">Business</span>
                </h1>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-up" delay={0.4}>
                <h2 className="text-4xl lg:text-6xl font-black text-gradient leading-tight tracking-tight">
                  With Future-Ready
                  <br />
                  Technology
                </h2>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-up" delay={0.5}>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-xl mt-6">
                  Empowering enterprises with cutting-edge IT solutions, cybersecurity, and digital transformation services for over 25 years.
                </p>
              </ScrollAnimation>
            </div>

            {/* Achievement List */}
            <ScrollAnimation animation="fade-up" delay={0.6}>
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement) => (
                  <div key={achievement} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm font-semibold text-muted-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </ScrollAnimation>

            {/* CTA Buttons */}
            <ScrollAnimation animation="fade-up" delay={0.8} className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <SpotlightButton size="lg" className="px-8 py-4 text-lg font-bold rounded-xl shadow-2xl hover:shadow-3xl group w-full sm:w-auto">
                  <Rocket className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Get Started Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </SpotlightButton>
              </Link>
              <Button asChild variant="outline" size="lg" className="btn-outline px-8 py-4 text-lg font-bold rounded-xl group w-full sm:w-auto">
                <Link href="/solutions">
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  View Solutions
                </Link>
              </Button>
            </ScrollAnimation>

            {/* Rotating Stats - Solid Card */}
            <ScrollAnimation animation="scale-up" delay={1.0}>
              <Card className="border-2 border-border hover:border-primary/50 transition-colors duration-300 bg-card shadow-xl hover:shadow-2xl">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-br from-primary to-red-600 rounded-xl shadow-lg">
                        <CurrentIcon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-3xl font-black text-gradient">
                          <AnimatedCounter
                            value={stats[currentStat].value}
                            suffix={stats[currentStat].value.includes('%') ? '%' : '+'}
                          />
                        </div>
                        <div className="text-sm font-semibold text-muted-foreground">{stats[currentStat].label}</div>
                      </div>
                    </div>
                    <div className="flex space-x-1">
                      {stats.map((_, index) => (
                        <div
                          key={index}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentStat ? 'bg-primary w-4' : 'bg-muted'}`}
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>

          {/* Right Content - Service Cards (Solid, High-Contrast) */}
          <div className="space-y-6 lg:mt-0 mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <ScrollAnimation key={service.title} animation="fade-up" delay={1.2 + (index * 0.1)}>
                  <Link href="/services" className="block group">
                    <Card className={`h-full border-2 border-border bg-card hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-xl ${service.shadow}`}>
                      <CardContent className="p-6 space-y-4">
                        <div className={`w-12 h-12 rounded-xl ${service.color} p-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </ScrollAnimation>
              ))}
            </div>

            {/* Trust Indicators - Solid Card */}
            <ScrollAnimation animation="fade-up" delay={1.5}>
              <Card className="border-2 border-border bg-card shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <Award className="w-6 h-6 text-primary" />
                    <span className="text-lg font-bold text-gradient">Trusted by Industry Leaders</span>
                  </div>
                  <div className="flex justify-center -space-x-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs font-bold text-muted-foreground">
                        {i}
                      </div>
                    ))}
                    <div className="w-10 h-10 rounded-full bg-primary text-white border-2 border-background flex items-center justify-center text-xs font-bold">
                      +500
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  )
}