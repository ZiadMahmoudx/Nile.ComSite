import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar, Users, Award, Target } from 'lucide-react'

const AboutHero = () => {
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
              <span className="text-foreground">About</span>
              <br />
              <span className="text-gradient">NILE.COM</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              For over 25 years, we have been Egypt's trusted partner in digital transformation, 
              delivering innovative IT solutions that drive business success.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground tech-glow"
            >
              <Link href="/contact">
                Work With Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Link href="/solutions">
                Our Solutions
              </Link>
            </Button>
          </div>

          {/* Company highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold">Since 1999</h3>
              <p className="text-sm text-muted-foreground">25+ Years Experience</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold">1,750+</h3>
              <p className="text-sm text-muted-foreground">Satisfied Customers</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold">Industry Leader</h3>
              <p className="text-sm text-muted-foreground">Premier Certifications</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold">2,500+</h3>
              <p className="text-sm text-muted-foreground">Projects Completed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero
