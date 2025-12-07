'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Users, Award, Target, Lightbulb, Settings, Shield, ArrowRight, Linkedin, Mail } from 'lucide-react'
import { ScrollAnimation } from '@/components/ui/scroll-animation'
import { ParticleNetwork } from '@/components/ui/particle-network'
import { AnimatedCounter } from '@/components/ui/animated-counter'

const teamMembers = [
  {
    name: 'Karim Soliman',
    role: 'CEO & Technology Strategist',
    bio: 'Expert in Banking Payments and Cloud IT Infrastructure.',
    expertise: ['Digital Strategy', 'Banking Payments', 'Cloud Infrastructure'],
    image: 'CEO.png',
  },
  {
    name: 'Dr. Marwan Shalaby',
    role: 'Chief Financial Officer',
    bio: 'CFO and Board Member with extensive corporate finance experience.',
    expertise: ['Corporate Finance', 'Strategic Planning', 'Governance'],
    image: '/Dr. Marwan Shalaby Chief Financial  Board Member.png',
  },
  {
    name: 'Khaled Helmy',
    role: 'SDM Messaging & Collaboration',
    bio: 'Senior Director specializing in communication systems.',
    expertise: ['Messaging Systems', 'Collaboration Tech', 'Communication'],
    image: '/Khaled Helmy  SDM messaging and collaboration at Nile.Com.png',
  },
  {
    name: 'Marwan Helmy',
    role: 'Technology Solutions Lead',
    bio: 'Expert in IT infrastructure and technology solutions.',
    expertise: ['IT Infrastructure', 'Solutions', 'Architecture'],
    image: '/placeholder-user.jpg',
  },
  {
    name: 'Ahmed Hassan',
    role: 'Senior Solutions Architect',
    bio: 'Deep expertise in enterprise integration and digital transformation.',
    expertise: ['Solution Architecture', 'Enterprise Integration', 'Cloud'],
    image: '/placeholder-user.jpg',
  },
  {
    name: 'Yasmin Khalil',
    role: 'Cybersecurity Specialist',
    bio: 'Extensive experience in threat intelligence and incident response.',
    expertise: ['Cybersecurity', 'Threat Intel', 'Incident Response'],
    image: '/placeholder-user.jpg',
  }
]

const teamStats = [
  { value: 100, suffix: '+', label: 'Tech Experts', icon: Users },
  { value: 200, suffix: '+', label: 'Certifications', icon: Award },
  { value: 2500, suffix: '+', label: 'Projects', icon: Target },
  { value: 25, suffix: '+', label: 'Years', icon: Lightbulb },
]

const values = [
  { icon: Lightbulb, title: 'Innovation', desc: 'Cutting-edge technologies for complex challenges' },
  { icon: Users, title: 'Collaboration', desc: 'Teamwork for extraordinary results' },
  { icon: Award, title: 'Excellence', desc: 'Highest standards in everything we do' },
  { icon: Shield, title: 'Integrity', desc: 'Honesty, transparency, ethical practices' },
  { icon: Settings, title: 'Learning', desc: 'Continuous growth and development' },
  { icon: Target, title: 'Customer Focus', desc: 'Your success is our success' },
]

export default function TeamPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-background">
        <ParticleNetwork
          particleCount={50}
          particleColor="rgba(159, 34, 32, 0.5)"
          lineColor="rgba(159, 34, 32, 0.08)"
          maxDistance={100}
          speed={0.2}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
          <div className="text-center space-y-8">
            <ScrollAnimation animation="fade-up">
              <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2">
                <Users className="w-4 h-4 mr-2" />
                Our Team
              </Badge>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={0.1}>
              <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                <span className="text-foreground">Meet Our</span>
                <br />
                <span className="text-gradient">Leadership Team</span>
              </h1>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={0.2}>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Decades of experience in IT solutions, digital transformation, and customer success.
              </p>
            </ScrollAnimation>

            {/* Team Stats */}
            <ScrollAnimation animation="fade-up" delay={0.3}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
                {teamStats.map((stat, index) => {
                  const IconComponent = stat.icon
                  return (
                    <div
                      key={index}
                      className="text-center space-y-3 p-6 rounded-2xl border-2 border-border bg-card"
                    >
                      <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-primary to-primary/70 p-2.5 shadow-lg">
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <div className="text-3xl font-black text-gradient">
                        <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                      </div>
                      <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                    </div>
                  )
                })}
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-16">
              <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 mb-4">
                <Award className="w-4 h-4 mr-2" />
                Leadership
              </Badge>
              <h2 className="text-4xl font-black mb-4">
                <span className="text-gradient">Executive</span>
                <span className="text-foreground"> Team</span>
              </h2>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <ScrollAnimation key={index} animation="fade-up" delay={index * 0.1}>
                <Card className="group h-full border-2 border-border hover:border-primary/50 bg-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
                  <CardContent className="p-6 space-y-4">
                    {/* Photo */}
                    <div className="relative mx-auto w-32 h-32">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full group-hover:scale-110 transition-transform duration-300" />
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={128}
                        height={128}
                        className="rounded-full border-4 border-primary/30 group-hover:border-primary/50 transition-colors relative z-10 object-cover"
                      />
                    </div>

                    {/* Info */}
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-sm text-primary font-medium">{member.role}</p>
                      <p className="text-sm text-muted-foreground mt-2">{member.bio}</p>
                    </div>

                    {/* Expertise */}
                    <div className="flex flex-wrap justify-center gap-2">
                      {member.expertise.map((skill, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    {/* Social */}
                    <div className="flex justify-center gap-3 pt-2">
                      <button className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-white transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-white transition-colors">
                        <Mail className="w-4 h-4" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-16">
              <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 mb-4">
                <Shield className="w-4 h-4 mr-2" />
                Our Values
              </Badge>
              <h2 className="text-4xl font-black mb-4">
                <span className="text-foreground">Culture & </span>
                <span className="text-gradient">Values</span>
              </h2>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <ScrollAnimation key={index} animation="fade-up" delay={index * 0.1}>
                <Card className="group border-2 border-border hover:border-primary/50 bg-card transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-primary to-primary/70 p-3 shadow-lg group-hover:scale-110 transition-transform">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.desc}</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>

          {/* CTA */}
          <ScrollAnimation animation="fade-up" delay={0.4}>
            <div className="text-center mt-16">
              <Card className="border-2 border-primary/20 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 inline-block">
                <CardContent className="p-8 sm:p-12">
                  <h3 className="text-2xl font-black text-gradient mb-4">Join Our Team</h3>
                  <p className="text-muted-foreground mb-6 max-w-lg">
                    We're always looking for talented individuals to join our growing team.
                  </p>
                  <Button asChild size="lg" className="btn-primary px-8 py-4 font-bold rounded-xl">
                    <Link href="/careers">
                      View Open Positions
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
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