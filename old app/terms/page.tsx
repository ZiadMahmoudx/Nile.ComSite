import type { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Terms of Service - NILE.COM',
  description: 'Terms of service for NILE.COM website and services.',
}

export default function TermsPage() {
  return (
    <div className="container py-20">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">Terms of Service</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center text-muted-foreground">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
          </div>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Introduction</h2>
            <p>
              Welcome to NILE.COM. These Terms of Service govern your access to and use of our website 
              and services. By accessing or using our website and services, you agree to be bound by 
              these Terms and all applicable laws and regulations.
            </p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Use of Services</h2>
            <p>
              You agree to use our services only for lawful purposes and in accordance with these Terms. 
              You are responsible for maintaining the confidentiality of your account and password and 
              for restricting access to your computer or device.
            </p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Intellectual Property</h2>
            <p>
              Unless otherwise indicated, the website and all content, features, and functionality 
              are owned by NILE.COM and are protected by international copyright, trademark, patent, 
              trade secret, and other intellectual property or proprietary rights laws.
            </p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Disclaimer of Warranties</h2>
            <p>
              The website and services are provided on an "as is" and "as available" basis. 
              NILE.COM makes no warranties of any kind, whether express or implied, including, 
              but not limited to, implied warranties of merchantability, fitness for a particular 
              purpose, or non-infringement.
            </p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Limitation of Liability</h2>
            <p>
              In no event shall NILE.COM be liable for any indirect, incidental, special, 
              consequential, or punitive damages, including without limitation, loss of profits, 
              data, use, goodwill, or other intangible losses, resulting from your access to 
              or use of or inability to access or use the services.
            </p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Contact Us</h2>
            <p>
              If you have questions or comments about these Terms, you may email us at:{' '}
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