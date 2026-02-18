'use client'

import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Mail, Phone, ArrowRight } from 'lucide-react'
import { ParticleNetwork } from '@/components/ui/particle-network'
import { ScrollAnimation } from '@/components/ui/scroll-animation'

const ContactHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Particle Background */}
      <ParticleNetwork
        particleCount={60}
        particleColor="rgba(159, 34, 32, 0.5)"
        lineColor="rgba(159, 34, 32, 0.08)"
        maxDistance={120}
        speed={0.2}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <ScrollAnimation animation="fade-up">
            <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2">
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Badge>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={0.1}>
            <h1 className="text-5xl lg:text-7xl font-black leading-tight">
              <span className="text-foreground">Contact</span>
              <br />
              <span className="text-gradient">Our Team</span>
            </h1>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={0.2}>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your business with technology? Our team of experts is here to help.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-primary px-8 py-4 font-bold rounded-xl">
                <Link href="tel:+20227353333">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us Now
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="btn-outline px-8 py-4 font-bold rounded-xl">
                <Link href="mailto:info@nilecom.com.eg">
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </Link>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}

export default ContactHero
