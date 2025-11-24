'use client'

import { useEffect } from 'react'

interface LocalBusinessStructuredDataProps {
  name: string
  type: string
  url: string
  description: string
  address: {
    streetAddress: string
    addressLocality: string
    addressRegion?: string
    postalCode: string
    addressCountry: string
  }
  geo?: {
    latitude: number
    longitude: number
  }
  contactPoint: {
    telephone: string
    contactType: string
  }
  openingHours?: string[]
  sameAs?: string[]
}

export default function LocalBusinessStructuredData({
  name,
  type = "LocalBusiness",
  url,
  description,
  address,
  geo,
  contactPoint,
  openingHours = [],
  sameAs = []
}: LocalBusinessStructuredDataProps) {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": type,
      "name": name,
      "image": `${url}/og-image.png`,
      "url": url,
      "telephone": contactPoint.telephone,
      "description": description,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": address.streetAddress,
        "addressLocality": address.addressLocality,
        "addressRegion": address.addressRegion,
        "postalCode": address.postalCode,
        "addressCountry": address.addressCountry
      },
      ...(geo && {
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": geo.latitude,
          "longitude": geo.longitude
        }
      }),
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": contactPoint.telephone,
        "contactType": contactPoint.contactType,
        "areaServed": "EG",
        "availableLanguage": "English"
      },
      ...(openingHours.length > 0 && {
        "openingHoursSpecification": openingHours.map(hours => ({
          "@type": "OpeningHoursSpecification",
          "opens": hours.split(" - ")[0],
          "closes": hours.split(" - ")[1],
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        }))
      }),
      "sameAs": sameAs
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.innerHTML = JSON.stringify(schema)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [name, type, url, description, address, geo, contactPoint, openingHours, sameAs])

  return null
}