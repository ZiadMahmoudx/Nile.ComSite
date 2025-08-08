'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
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
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Advanced threat protection and security solutions',
    color: 'from-red-500 to-pink-500'
  },
  {
    icon: Zap,
    title: 'Digital Transformation',
    description: 'Modernize your business with cutting-edge technology',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Globe,
    title: 'Network Infrastructure',
    description: 'Robust and reliable network solutions',
    color: 'from-green-500 to-emerald-500'
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
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const CurrentIcon = stats[currentStat].icon

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary/10 to-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-red-500/10 to-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 via-transparent to-red-500/5 rounded-full blur-3xl animate-spin" style={{ animationDuration: '20s' }}></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            {/* Badge */}
            <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              Leading IT Solutions Provider
            </Badge>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                <span className="text-gradient">Transform</span>
                <br />
                <span className="text-foreground">Your Business</span>
                <br />
                <span className="text-gradient">With Technology</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Empowering enterprises with cutting-edge IT solutions, cybersecurity, and digital transformation services for over 25 years.
              </p>
            </div>

            {/* Achievement List */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={achievement} className="flex items-center space-x-2" style={{ animationDelay: `${index * 0.2}s` }}>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-semibold text-muted-foreground">{achievement}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="btn-primary px-8 py-4 text-lg font-bold rounded-xl shadow-2xl hover:shadow-3xl group">
                <Link href="/contact">
                  <Rocket className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Get Started Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="btn-outline px-8 py-4 text-lg font-bold rounded-xl group">
                <Link href="/solutions">
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  View Solutions
                </Link>
              </Button>
            </div>

            {/* Rotating Stats */}
            <div className="bg-gradient-to-r from-primary/10 via-red-500/10 to-primary/10 rounded-2xl p-6 border border-primary/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-primary to-red-500 rounded-xl">
                    <CurrentIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-black text-gradient">{stats[currentStat].value}</div>
                    <div className="text-sm font-semibold text-muted-foreground">{stats[currentStat].label}</div>
                  </div>
                </div>
                <div className="flex space-x-1">
                  {stats.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentStat ? 'bg-primary' : 'bg-muted'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Service Cards */}
          <div className={`space-y-6 ${isVisible ? 'animate-slideInRight' : 'opacity-0'}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <Card 
                  key={service.title} 
                  className="card-hover card-glow border-border/50 bg-card/50 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-6 space-y-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} p-3 shadow-lg`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>
                    <Button asChild variant="ghost" size="sm" className="w-full justify-between group hover:bg-primary/10">
                      <Link href="/services">
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Trust Indicators */}
            <Card className="bg-gradient-to-r from-primary/5 via-red-500/5 to-primary/5 border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <Award className="w-6 h-6 text-primary" />
                  <span className="text-lg font-bold text-gradient">Trusted by Industry Leaders</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Join 500+ enterprises who trust NILE.COM for their critical IT infrastructure
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
