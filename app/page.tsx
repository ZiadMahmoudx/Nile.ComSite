import Hero from '@/components/sections/hero'
// import About from '@/components/sections/about'
import Solutions from '@/components/sections/solutions'
import Services from '@/components/sections/services'
// import Partners from '@/components/sections/partners'
// import Testimonials from '@/components/sections/testimonials'
import Contact from '@/components/sections/contact'
import LocalBusinessStructuredData from '@/components/seo/local-business-structured-data'
import { ScrollAnimation } from '@/components/ui/scroll-animation'
import CompanyIntro from '@/components/sections/company-intro'
import { ParticleNetwork } from '@/components/ui/particle-network'

export default function HomePage() {
  return (
    <>
      <LocalBusinessStructuredData
        name="NILE.COM"
        type="Corporation"
        url="https://nile.com"
        description="Leading IT solutions provider with 25+ years of experience. Specializing in cloud services, cybersecurity, infrastructure, and digital transformation for enterprises."
        address={{
          streetAddress: "Cairo",
          addressLocality: "Cairo",
          postalCode: "12345",
          addressCountry: "EG"
        }}
        contactPoint={{
          telephone: "+20227353333",
          contactType: "customer service"
        }}
        sameAs={[
          "https://www.linkedin.com/company/nile-com",
          "https://www.facebook.com/nilecom",
          "https://www.twitter.com/nilecom"
        ]}
      />

      {/* Background Particles - Removed to move back to Hero per user request */}
      {/* <div className="fixed inset-0 z-20 pointer-events-none">
        <ParticleNetwork particleCount={100} particleColor="rgba(159, 34, 32, 0.6)" lineColor="rgba(159, 34, 32, 0.2)" />
      </div> */}

      <div className="relative z-10">
        <Hero />

        <CompanyIntro />

        {/* <ScrollAnimation animation="fade-up" delay={0.2} viewport={{ once: true, margin: "-100px" }}>
          <About />
        </ScrollAnimation> */}

        <ScrollAnimation animation="fade-up" delay={0.2} viewport={{ once: true, margin: "-100px" }}>
          <Solutions />
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={0.2} viewport={{ once: true, margin: "-100px" }}>
          <Services />
        </ScrollAnimation>

        {/* <ScrollAnimation animation="fade-up" delay={0.2} viewport={{ once: true, margin: "-100px" }}>
          <Partners />
        </ScrollAnimation> */}

        {/* <ScrollAnimation animation="fade-up" delay={0.2} viewport={{ once: true, margin: "-100px" }}>
          <Testimonials />
        </ScrollAnimation> */}

        <ScrollAnimation animation="fade-up" delay={0.2} viewport={{ once: true, margin: "-100px" }}>
          <Contact />
        </ScrollAnimation>
      </div>
    </>
  )
}
