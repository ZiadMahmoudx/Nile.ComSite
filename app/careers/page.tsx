import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Users, Award, Briefcase, Calendar, MapPin, DollarSign, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Careers - NILE.COM',
  description: 'Join our team of experts at NILE.COM. Explore career opportunities in IT consulting, cloud services, cybersecurity, and digital transformation.',
}

const benefits = [
  {
    icon: DollarSign,
    title: 'Competitive Salary',
    description: 'Attractive compensation packages with performance bonuses'
  },
  {
    icon: Award,
    title: 'Professional Growth',
    description: 'Continuous learning and certification opportunities'
  },
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance and wellness programs'
  },
  {
    icon: Calendar,
    title: 'Work-Life Balance',
    description: 'Flexible working arrangements and generous time off'
  }
]

const positions = [
  {
    title: 'Senior Cloud Solutions Architect',
    department: 'Cloud Services',
    location: 'Maadi, Cairo, Egypt',
    type: 'Full-time',
    experience: '5+ years',
    description: 'Design and implement enterprise cloud solutions for our clients using Azure, AWS, and Google Cloud platforms.'
  },
  {
    title: 'Cybersecurity Specialist',
    department: 'Security',
    location: 'Maadi, Cairo, Egypt',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Protect our clients\' digital assets through advanced threat detection, incident response, and security architecture.'
  },
  {
    title: 'IT Project Manager',
    department: 'Project Delivery',
    location: 'Maadi, Cairo, Egypt',
    type: 'Full-time',
    experience: '4+ years',
    description: 'Lead cross-functional teams in delivering complex IT projects on time and within budget.'
  },
  {
    title: 'DevOps Engineer',
    department: 'Infrastructure',
    location: 'Maadi, Cairo, Egypt',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Implement and maintain CI/CD pipelines, containerization, and automated infrastructure solutions.'
  }
]

export default function CareersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center justify-center hero-gradient relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-20 left-20 w-64 h-64 border border-primary/30 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-secondary/30 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-primary/20 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Join Our</span>
                <br />
                <span className="text-gradient">Expert Team</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Be part of Egypt's leading IT solutions provider. Join a team of passionate professionals 
                who are shaping the future of technology in the region.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground tech-glow relative z-10"
              >
                <Link href="#openings">
                  View Open Positions
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground relative z-10"
              >
                <Link href="/contact">
                  Contact HR Team
                </Link>
              </Button>
            </div>

            {/* Company highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold">100+</h3>
                <p className="text-sm text-muted-foreground">Tech Experts</p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold">25+</h3>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold">200+</h3>
                <p className="text-sm text-muted-foreground">Certifications</p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold">Great</h3>
                <p className="text-sm text-muted-foreground">Work Culture</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Join NILE.COM?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer more than just a job - we provide a career-defining experience with opportunities 
              to work on cutting-edge projects with industry leaders.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <Card key={index} className="text-center border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r from-primary to-red-500 p-4 shadow-lg">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're always looking for talented professionals to join our growing team. 
              Check out our current openings below.
            </p>
          </div>

          <div className="grid gap-6">
            {positions.map((position, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                <CardHeader className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl">{position.title}</CardTitle>
                      <CardDescription className="text-base">
                        {position.department}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="text-sm">
                      {position.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">{position.description}</p>
                  
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{position.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Briefcase className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{position.experience}</span>
                    </div>
                  </div>
                  
                  <Button asChild variant="outline" className="w-full sm:w-auto group hover:bg-primary/10">
                    <Link href="/contact">
                      Apply for this Position
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
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
                  <h3 className="text-3xl font-black text-gradient">Don't see the right position?</h3>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    We're always interested in hearing from talented professionals. 
                    Send your resume to our HR team and we'll get in touch when opportunities arise.
                  </p>
                  <Button asChild size="lg" className="btn-primary px-8 py-4 font-bold rounded-xl">
                    <Link href="/contact">Submit Your Resume</Link>
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