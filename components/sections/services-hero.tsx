import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Settings, Users, Headphones, Lightbulb } from 'lucide-react'

const ServicesHero = () => {
  return (
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
              <span className="text-foreground">Professional IT</span>
              <br />
              <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert consulting, implementation, and managed services to optimize your IT infrastructure 
              and accelerate your digital transformation journey.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground tech-glow relative z-10"
            >
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground relative z-10"
            >
              <Link href="/solutions">
                View Solutions
              </Link>
            </Button>
          </div>

          {/* Service highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Lightbulb className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold">Consulting</h3>
              <p className="text-sm text-muted-foreground">Strategic IT Planning</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Settings className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold">Implementation</h3>
              <p className="text-sm text-muted-foreground">Expert Deployment</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold">Managed Services</h3>
              <p className="text-sm text-muted-foreground">Ongoing Management</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Headphones className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold">Support</h3>
              <p className="text-sm text-muted-foreground">24/7 Assistance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesHero
