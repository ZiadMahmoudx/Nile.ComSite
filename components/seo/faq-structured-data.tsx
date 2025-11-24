'use client'

import { useEffect } from 'react'

interface FAQStructuredDataProps {
  mainEntity: {
    name: string
    acceptedAnswer: string
  }[]
}

export default function FAQStructuredData({ mainEntity }: FAQStructuredDataProps) {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": mainEntity.map(item => ({
        "@type": "Question",
        "name": item.name,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.acceptedAnswer
        }
      }))
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.innerHTML = JSON.stringify(schema)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [mainEntity])

  return null
}