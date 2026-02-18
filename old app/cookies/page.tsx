import type { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Cookie Policy - NILE.COM',
  description: 'Cookie policy for NILE.COM website and services.',
}

export default function CookiesPage() {
  return (
    <div className="container py-20">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">Cookie Policy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center text-muted-foreground">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
          </div>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">What Are Cookies</h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you 
              visit a website. They are widely used to make websites work more efficiently, as well as 
              to provide information to the owners of the site.
            </p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">How We Use Cookies</h2>
            <p>
              We use cookies to enhance your experience on our website, analyze how our website is used, 
              and to provide personalized content and advertisements. The cookies we use may be categorized 
              as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Essential Cookies:</strong> Necessary for the website to function properly</li>
              <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website</li>
              <li><strong>Functional Cookies:</strong> Enable enhanced functionality and personalization</li>
              <li><strong>Targeting Cookies:</strong> Used to deliver relevant advertisements to you</li>
            </ul>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Managing Cookies</h2>
            <p>
              You can control and/or delete cookies as you wish. You can delete all cookies that are 
              already on your computer and you can set most browsers to prevent them from being placed. 
              However, if you do this, you may have to manually adjust some preferences every time you 
              visit a site and some services and functionalities may not work.
            </p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Changes to This Cookie Policy</h2>
            <p>
              We may update our Cookie Policy from time to time. We will notify you of any changes 
              by posting the new Cookie Policy on this page and updating the "Last updated" date.
            </p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Contact Us</h2>
            <p>
              If you have questions or comments about this Cookie Policy, you may email us at:{' '}
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