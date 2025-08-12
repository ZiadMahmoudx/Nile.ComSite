'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Clock, MessageSquare, ArrowRight, AlertCircle } from 'lucide-react'
import Link from 'next/link'

const contactMethods = [
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Speak directly with our experts',
    contact: '+20 2 2735 3333',
    action: 'Call Now',
    href: 'tel:+20227353333'
  },
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Send us your requirements',
    contact: 'info@nilecom.com.eg',
    action: 'Send Email',
    href: 'mailto:info@nilecom.com.eg'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    description: 'Meet us at our office',
    contact: 'Maadi, Cairo, Egypt',
    action: 'Get Directions',
    href: 'https://maps.app.goo.gl/tTUNyWFzGazyTgHe6'
  },
  {
    icon: Clock,
    title: 'Business Hours',
    description: 'We are available',
    contact: 'Sun - Thu: 9AM - 6PM',
    action: 'Schedule Meeting',
    href: '/contact'
  }
]

export default function ContactInfo() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2">
            <MessageSquare className="w-4 h-4 mr-2" />
            Contact Information
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-black">
            <span className="text-gradient">Get In Touch</span>
            <br />
            <span className="text-foreground">With Our Experts</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with technology? Our team of experts is here 
            to help you find the perfect solution for your needs.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <Card key={method.title} className="card-hover border-border/50 bg-card/50 backdrop-blur-sm text-center">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r from-primary to-red-500 p-4 shadow-lg">
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{method.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                  <p className="text-primary font-semibold">{method.contact}</p>
                </div>
                <Button asChild variant="ghost" className="w-full group hover:bg-primary/10">
                  <Link href={method.href}>
                    {method.action}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-primary/10 via-red-500/10 to-primary/10 border-primary/20">
          <CardContent className="p-12 text-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-black text-gradient">Ready to Start Your Project?</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Let's discuss your technology needs and create a custom solution that drives 
                your business forward. Our experts are ready to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="btn-primary px-8 py-4 font-bold rounded-xl">
                  <Link href="/contact">Get Free Consultation</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="btn-outline px-8 py-4 font-bold rounded-xl">
                  <Link href="tel:+20227353333">Call Now</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Developer Note - Only visible in development */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-8 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
            <div className="flex items-start space-x-2">
              <AlertCircle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-yellow-500">Development Note</h4>
                <p className="text-sm text-yellow-500/90 mt-1">
                  To enable the contact form, configure your email settings in <code className="bg-yellow-500/20 px-1 rounded">.env.local</code>. 
                  For testing, you can use a service like <a href="https://ethereal.email" target="_blank" rel="noopener noreferrer" className="underline">Ethereal Email</a>.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}