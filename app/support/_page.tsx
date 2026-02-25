import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { 
  Headphones, 
  Mail, 
  Phone, 
  MessageSquare, 
  Clock, 
  Shield, 
  FileText, 
  Zap 
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Support - NILE.COM',
  description: 'Get technical support and assistance for NILE.COM services.',
}

const supportOptions = [
  {
    icon: Headphones,
    title: '24/7 Technical Support',
    description: 'Round-the-clock assistance for critical issues',
    response: '15-minute response time'
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Comprehensive support via email',
    response: '2-hour response time'
  },
  {
    icon: MessageSquare,
    title: 'Live Chat',
    description: 'Instant help through our live chat system',
    response: 'Immediate response'
  },
  {
    icon: Phone,
    title: 'Phone Support',
    description: 'Direct access to our support specialists',
    response: '5-minute response time'
  }
]

export default function SupportPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-20 left-20 w-64 h-64 border border-primary/30 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-secondary/30 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-foreground">Technical</span>
            <br />
            <span className="text-gradient">Support</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our dedicated support team is here to help you with any technical issues or questions about our services.
          </p>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How Can We Help?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the support option that best fits your needs and urgency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportOptions.map((option, index) => {
              const IconComponent = option.icon
              return (
                <Card key={index} className="text-center border-border/50 bg-card/50 backdrop-blur-sm group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r from-primary to-red-500 p-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{option.title}</h3>
                    <p className="text-muted-foreground">{option.description}</p>
                    <div className="pt-2">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                        <Clock className="w-4 h-4 mr-1" />
                        {option.response}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Submit a Support Request</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Fill out the form and our support team will get back to you as soon as possible.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Security First</h3>
                    <p className="text-muted-foreground">
                      All support communications are encrypted and secure.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Fast Response</h3>
                    <p className="text-muted-foreground">
                      We guarantee a response within 2 hours for all support requests.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Detailed Documentation</h3>
                    <p className="text-muted-foreground">
                      Access our comprehensive knowledge base and documentation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Support Request Form</CardTitle>
                <CardDescription>
                  Please provide as much detail as possible about your issue.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input id="subject" placeholder="Brief description of your issue" />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                      Service
                    </label>
                    <select 
                      id="service" 
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select a service</option>
                      <option value="cloud">Cloud Services</option>
                      <option value="security">Cybersecurity</option>
                      <option value="infrastructure">Infrastructure</option>
                      <option value="managed">Managed Services</option>
                      <option value="consulting">Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="priority" className="block text-sm font-medium text-foreground mb-2">
                      Priority
                    </label>
                    <select 
                      id="priority" 
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                      <option value="critical">Critical</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Description
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Please describe your issue in detail..." 
                      rows={5}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full btn-primary">
                    Submit Support Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Support */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-red-500/10 to-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Emergency Support</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            For critical issues requiring immediate attention, contact our 24/7 emergency support line.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button asChild size="lg" className="btn-primary px-8 py-4 font-bold rounded-xl">
              <Link href="tel:+20227353333">
                Call Emergency Support
              </Link>
            </Button>
            <div className="text-center">
              <p className="font-semibold text-foreground">24/7 Emergency Line</p>
              <p className="text-2xl font-bold text-gradient">+20 2 2735 3333</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}