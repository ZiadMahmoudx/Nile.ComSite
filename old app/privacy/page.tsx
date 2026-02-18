import type { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Privacy Policy - NILE.COM',
  description: 'Privacy policy for NILE.COM website and services.',
}

export default function PrivacyPage() {
  return (
    <div className="container py-20">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">Privacy Policy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center text-muted-foreground">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
          </div>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Introduction</h2>
            <p>
              At NILE.COM, we are committed to protecting your personal information and your right to privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
              when you visit our website and use our services.
            </p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Information We Collect</h2>
            <p>
              We collect personal information that you voluntarily provide to us when you register on the 
              website, express an interest in obtaining information about us or our products and services, 
              participate in activities on the website, or otherwise contact us.
            </p>
            <p>
              The personal information we collect may include your name, email address, phone number, 
              job title, company name, and any other information you choose to provide.
            </p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">How We Use Your Information</h2>
            <p>We use personal information collected via our website for a variety of business purposes, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To facilitate account creation and logon process</li>
              <li>To send you marketing and promotional communications</li>
              <li>To send administrative information to you</li>
              <li>To protect our Services</li>
              <li>To enforce our terms, conditions and policies</li>
              <li>To respond to legal requests and prevent harm</li>
            </ul>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Contact Us</h2>
            <p>
              If you have questions or comments about this notice, you may email us at:{' '}
              <a href="mailto:info@nilecom.com.eg" className="text-primary hover:underline">
                info@nilecom.com.eg
              </a>
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  )
}