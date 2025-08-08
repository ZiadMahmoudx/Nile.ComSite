'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Users, Award, Globe, TrendingUp, ArrowRight, CheckCircle, Target, Eye, Heart } from 'lucide-react'
import Link from 'next/link'

const stats = [
  { label: 'Years of Experience', value: '25+', icon: Award },
  { label: 'Enterprise Clients', value: '500+', icon: Users },
  { label: 'Countries Served', value: '15+', icon: Globe },
  { label: 'Success Rate', value: '99.9%', icon: TrendingUp },
]

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for excellence in every project, delivering solutions that exceed expectations and drive business success.'
  },
  {
    icon: Eye,
    title: 'Innovation',
    description: 'We embrace cutting-edge technologies and innovative approaches to solve complex business challenges.'
  },
  {
    icon: Heart,
    title: 'Partnership',
    description: 'We build long-term partnerships with our clients, understanding their unique needs and growing together.'
  },
  {
    icon: CheckCircle,
    title: 'Reliability',
    description: 'Our clients trust us to deliver consistent, reliable solutions with 24/7 support and guaranteed uptime.'
  }
]

const milestones = [
  { year: '1999', event: 'Founded NILE.COM with a vision to transform businesses through technology' },
  { year: '2005', event: 'Achieved Microsoft Gold Partner status and expanded service offerings' },
  { year: '2010', event: 'Launched cloud services division and became AWS Advanced Partner' },
  { year: '2015', event: 'Reached 250+ enterprise clients and opened regional offices' },
  { year: '2020', event: 'Achieved 99.9% uptime SLA and launched cybersecurity division' },
  { year: '2024', event: 'Serving 500+ clients across 15 countries with 100+ certified experts' }
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2">
            <Users className="w-4 h-4 mr-2" />
            About NILE.COM
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-black">
            <span className="text-gradient">25+ Years</span>
            <br />
            <span className="text-foreground">of IT Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Since 1999, NILE.COM has been at the forefront of technology innovation, 
            helping businesses transform and thrive in the digital age.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
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

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-black text-gradient">Our Story</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in 1999, NILE.COM began with a simple yet powerful vision: to help businesses 
                harness the transformative power of technology. What started as a small IT consulting 
                firm has grown into a leading technology solutions provider serving enterprises across 
                the Middle East and beyond.
              </p>
              <p>
                Over the past 25 years, we've witnessed and participated in the digital revolution, 
                helping our clients navigate through technological changes, from the early days of 
                enterprise networking to today's cloud-first, AI-powered business environments.
              </p>
              <p>
                Today, NILE.COM stands as a trusted partner to over 500 enterprise clients, with a 
                team of 100+ certified experts and strategic partnerships with industry leaders like 
                Microsoft, AWS, VMware, and many others.
              </p>
            </div>
            <Button asChild size="lg" className="btn-primary px-8 py-4 font-bold rounded-xl">
              <Link href="/contact">
                Partner With Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-black text-gradient">Our Mission</h3>
            <Card className="bg-gradient-to-r from-primary/10 via-red-500/10 to-primary/10 border-primary/20">
              <CardContent className="p-8 space-y-4">
                <p className="text-lg text-foreground font-semibold">
                  "To empower businesses with innovative technology solutions that drive growth, 
                  enhance efficiency, and create competitive advantages in the digital economy."
                </p>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Award className="w-4 h-4 text-primary" />
                  <span>Committed to Excellence Since 1999</span>
                </div>
              </CardContent>
            </Card>

            <h3 className="text-3xl font-black text-gradient">Our Vision</h3>
            <Card className="bg-gradient-to-r from-primary/10 via-red-500/10 to-primary/10 border-primary/20">
              <CardContent className="p-8 space-y-4">
                <p className="text-lg text-foreground font-semibold">
                  "To be the most trusted technology partner in the region, known for our expertise, 
                  innovation, and unwavering commitment to client success."
                </p>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Globe className="w-4 h-4 text-primary" />
                  <span>Expanding Across 15+ Countries</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-black text-gradient mb-4">Our Core Values</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and shape our relationships with clients, 
              partners, and team members.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={value.title} className="card-hover border-border/50 bg-card/50 backdrop-blur-sm text-center">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r from-primary to-red-500 p-4 shadow-lg">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground">{value.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-black text-gradient mb-4">Our Journey</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key milestones that have shaped NILE.COM into the technology leader we are today.
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-red-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-sm">{milestone.year}</span>
                  </div>
                </div>
                <Card className="flex-1 border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <p className="text-foreground leading-relaxed">{milestone.event}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-primary/10 via-red-500/10 to-primary/10 border-primary/20">
          <CardContent className="p-12 text-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-black text-gradient">Ready to Start Your Journey?</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join the 500+ enterprises who trust NILE.COM for their technology needs. 
                Let's discuss how we can help transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="btn-primary px-8 py-4 font-bold rounded-xl">
                  <Link href="/contact">Get Started Today</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="btn-outline px-8 py-4 font-bold rounded-xl">
                  <Link href="/solutions">Explore Solutions</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
