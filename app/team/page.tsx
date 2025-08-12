import type { Metadata } from 'next'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Users, Award, Target, Lightbulb, Settings, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Team - NILE.COM',
  description: 'Meet the leadership team and experts at NILE.COM who drive innovation and excellence in IT solutions and services.',
}

const teamMembers = [
  {
    name: 'Ahmed Hassan',
    role: 'CEO & Founder',
    bio: '25+ years of experience in IT solutions and digital transformation. Led NILE.COM to become Egypt\'s premier IT services provider.',
    expertise: ['Digital Strategy', 'Enterprise Architecture', 'Innovation'],
    image: '/placeholder-user.jpg',
    certifications: ['MBA', 'AWS Certified Solutions Architect', 'Microsoft Azure Expert']
  },
  {
    name: 'Sarah Mahmoud',
    role: 'CTO',
    bio: 'Technology visionary with expertise in cloud computing and cybersecurity. Spearheads our innovation initiatives and technical excellence.',
    expertise: ['Cloud Architecture', 'Cybersecurity', 'DevOps'],
    image: '/placeholder-user.jpg',
    certifications: ['CISSP', 'AWS Solutions Architect', 'Google Cloud Professional']
  },
  {
    name: 'Mohamed Ali',
    role: 'Director of Operations',
    bio: 'Operations expert with a track record of delivering complex IT projects on time and within budget. Ensures seamless service delivery.',
    expertise: ['Project Management', 'Service Delivery', 'Process Optimization'],
    image: '/placeholder-user.jpg',
    certifications: ['PMP', 'ITIL Expert', 'Scrum Master']
  },
  {
    name: 'Yasmin Khalil',
    role: 'Head of Solutions Engineering',
    bio: 'Solutions architect with deep expertise in enterprise integration and digital transformation. Designs innovative solutions for complex challenges.',
    expertise: ['Solution Architecture', 'Integration', 'Digital Transformation'],
    image: '/placeholder-user.jpg',
    certifications: ['TOGAF', 'Azure Solutions Architect', 'AWS Advanced Networking']
  },
  {
    name: 'Karim Said',
    role: 'Security Practice Lead',
    bio: 'Cybersecurity specialist with extensive experience in threat intelligence and incident response. Protects our clients\' digital assets.',
    expertise: ['Cybersecurity', 'Threat Intelligence', 'Compliance'],
    image: '/placeholder-user.jpg',
    certifications: ['CISSP', 'CEH', 'CISM', 'ISO 27001 Lead Auditor']
  },
  {
    name: 'Nadia Farouk',
    role: 'Customer Success Director',
    bio: 'Customer-focused leader dedicated to ensuring client satisfaction and long-term partnerships. Drives value realization for our clients.',
    expertise: ['Customer Success', 'Account Management', 'Business Development'],
    image: '/placeholder-user.jpg',
    certifications: ['CSM', 'Salesforce Administrator', 'Customer Experience Professional']
  }
]

const teamStats = [
  { icon: Users, value: '100+', label: 'Tech Experts' },
  { icon: Award, value: '200+', label: 'Certifications' },
  { icon: Target, value: '2,500+', label: 'Projects Completed' },
  { icon: Lightbulb, value: '25+', label: 'Years Experience' }
]

export default function TeamPage() {
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
                <span className="text-foreground">Meet Our</span>
                <br />
                <span className="text-gradient">Leadership Team</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our team of experts brings together decades of experience in IT solutions, 
                digital transformation, and customer success to deliver exceptional results.
              </p>
            </div>

            {/* Team Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
              {teamStats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <div key={index} className="text-center space-y-3">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-gradient">{stat.value}</h3>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our leadership team brings together decades of experience in technology, 
              business strategy, and customer success to drive innovation and excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                <CardHeader className="space-y-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-red-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={120}
                      height={120}
                      className="mx-auto rounded-full border-4 border-primary/20 group-hover:border-primary/40 transition-colors duration-300 relative"
                    />
                  </div>
                  <div className="text-center">
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <CardDescription className="text-base">
                      {member.role}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-center">{member.bio}</p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Areas of Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Certifications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.certifications.map((cert, certIndex) => (
                        <Badge key={certIndex} variant="outline" className="text-xs bg-primary/5 border-primary/20">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Culture & Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We foster an environment of innovation, collaboration, and continuous learning 
              that empowers our team to deliver exceptional results for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r from-primary to-red-500 p-4 shadow-lg">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Innovation</h3>
                <p className="text-muted-foreground">
                  We embrace cutting-edge technologies and methodologies to solve complex challenges 
                  and create value for our clients.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r from-primary to-red-500 p-4 shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Collaboration</h3>
                <p className="text-muted-foreground">
                  We believe in the power of teamwork and cross-functional collaboration 
                  to achieve extraordinary results.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r from-primary to-red-500 p-4 shadow-lg">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for the highest standards in everything we do, 
                  from technical solutions to customer service.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r from-primary to-red-500 p-4 shadow-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Integrity</h3>
                <p className="text-muted-foreground">
                  We conduct business with honesty, transparency, and ethical practices, 
                  building trust with our clients and partners.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r from-primary to-red-500 p-4 shadow-lg">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Continuous Learning</h3>
                <p className="text-muted-foreground">
                  We invest in our team's growth through training, certifications, 
                  and knowledge sharing to stay at the forefront of technology.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r from-primary to-red-500 p-4 shadow-lg">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Customer Success</h3>
                <p className="text-muted-foreground">
                  Our success is measured by our clients' success. 
                  We're committed to delivering solutions that drive real business value.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}