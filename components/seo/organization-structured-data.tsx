'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    dataLayer: any[]
  }
}

interface OrganizationStructuredDataProps {
  name: string
  url: string
  logo?: string
  description: string
  address: {
    streetAddress: string
    addressLocality: string
    addressRegion?: string
    postalCode: string
    addressCountry: string
  }
  contactPoint: {
    telephone: string
    contactType: string
    areaServed?: string
    availableLanguage?: string
  }[]
  sameAs?: string[]
}

export default function OrganizationStructuredData({
  name,
  url,
  logo,
  description,
  address,
  contactPoint,
  sameAs = []
}: OrganizationStructuredDataProps) {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": name,
      "url": url,
      "logo": logo,
      "description": description,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": address.streetAddress,
        "addressLocality": address.addressLocality,
        "addressRegion": address.addressRegion,
        "postalCode": address.postalCode,
        "addressCountry": address.addressCountry
      },
      "contactPoint": contactPoint.map(contact => ({
        "@type": "ContactPoint",
        "telephone": contact.telephone,
        "contactType": contact.contactType,
        "areaServed": contact.areaServed || "EG",
        "availableLanguage": contact.availableLanguage || "English"
      })),
      "sameAs": sameAs
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.innerHTML = JSON.stringify(schema)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [name, url, logo, description, address, contactPoint, sameAs])

  return null
}