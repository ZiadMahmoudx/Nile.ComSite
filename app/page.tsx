import Hero from '@/components/sections/hero'
import Solutions from '@/components/sections/solutions'
import Services from '@/components/sections/services'
import Contact from '@/components/sections/contact'
import LocalBusinessStructuredData from '@/components/seo/local-business-structured-data'
import CompanyIntro from '@/components/sections/company-intro'

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

      <div className="relative z-10">
        <Hero />
        <CompanyIntro />
        <Solutions />
        <Services />
        <Contact />
      </div>
    </>
  )
}
