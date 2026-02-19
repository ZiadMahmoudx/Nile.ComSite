'use client'

import { useEffect } from 'react'

interface ServiceStructuredDataProps {
  serviceType: string
  provider: {
    name: string
    type: string
    url: string
  }
  areaServed: string | {
    "@type": string
    name: string
  }
  serviceTypeDetail: string
  description: string
}

export default function ServiceStructuredData({
  serviceType,
  provider,
  areaServed,
  serviceTypeDetail,
  description
}: ServiceStructuredDataProps) {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": serviceType,
      "provider": {
        "@type": provider.type,
        "name": provider.name,
        "url": provider.url
      },
      "areaServed": areaServed,
      "alternateName": serviceTypeDetail,
      "description": description
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.innerHTML = JSON.stringify(schema)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [serviceType, provider, areaServed, serviceTypeDetail, description])

  return null
}