'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Settings, Users, Headphones, Wrench, BookOpen, Rocket, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const services: any[] = [
  {
    icon: Settings,
    headline: (
      <>
        <span className="text-black">Transform</span> <span className="text-neutral-500">Your</span>
        <br />
        <span className="text-primary text-[4rem] md:text-[6rem] lg:text-[7rem] leading-[0.8] uppercase tracking-tighter">BUSINESS</span>
      </>
    ),
    title: '',
    tags: [],
    description: 'Empowering enterprises with cutting-edge IT solutions, cybersecurity, and digital transformation services for over 25 years.',
    image: '/img/1200x1200_service-image-01.webp',
    layoutClass: 'col-12 col-xl-8',
    itemClass: 'justify-between radius-l padding-4 border border-neutral-200',
    itemStyle: { backgroundColor: '#ffffff' },
    titleClass: 'text-black',
    titleStyle: { color: '#000000' },
    imageClass: 'image-right',
    textClass: 'text-neutral-700',
    anim: 'anim-uni-scale-in-right',
    buttons: [
      { text: 'Get Started', link: '/contact', style: '!bg-black !text-white hover:!bg-neutral-800 border-none' },
      { text: 'Our Solutions', link: '/solutions', style: 'btn-outline !text-black !border-black hover:!bg-black/10' }
    ]
  },
  {
    icon: Users,
    title: 'IT Consulting',
    tags: ['Strategy', 'Architecture', 'Roadmap'],
    description: 'Strategic technology consulting to align your IT with business goals and drive digital growth.',
    image: '/img/1200x1200_service-image-02.webp',
    layoutClass: 'col-12 col-xl-4',
    itemClass: 'justify-end bg-primary radius-l padding-4',
    titleClass: 'text-primary-foreground',
    imageClass: 'image-top-right',
    textClass: 'text-primary-foreground/90',
    tagClass: 'tag-outline-opposite',
    anim: 'anim-uni-scale-in-left'
  },
  {
    icon: Headphones,
    title: 'Technical Support',
    tags: ['24/7 Help Desk', 'Remote Support', 'On-site'],
    description: 'Expert technical support and help desk services available whenever you need them.',
    image: '/img/1200x1200_service-image-03.webp',
    layoutClass: 'col-12 col-xl-4',
    itemClass: 'bg-neutral-900 radius-l padding-4',
    titleClass: 'text-white',
    imageClass: 'image-bottom',
    textClass: 'text-white/90',
    tagClass: 'tag-outline-opposite',
    anim: 'anim-uni-scale-in-right'
  },
  {
    icon: Wrench,
    title: 'Implementation',
    tags: ['Deployment', 'Configuration', 'Testing'],
    description: 'Professional implementation services for seamless hardware and software deployment with minimal disruption.',
    image: '/img/1200x1200_service-image-04.webp',
    layoutClass: 'col-12 col-xl-4',
    itemClass: 'bg-primary radius-l padding-4',
    titleClass: 'text-primary-foreground',
    imageClass: 'image-bottom image-bottom-2',
    textClass: 'text-primary-foreground/90',
    tagClass: 'tag-outline-opposite',
    anim: 'anim-uni-scale-in'
  },
  {
    icon: BookOpen,
    title: 'Training & Education',
    tags: ['Workshops', 'Certification Prep', 'Documentation'],
    description: 'Comprehensive training programs to empower your team with the latest technology skills.',
    image: '/img/1200x1200_service-image-03.webp',
    layoutClass: 'col-12 col-xl-4',
    itemClass: 'justify-end radius-l padding-4',
    itemStyle: { backgroundColor: 'var(--base-tint)' },
    titleClass: '',
    titleStyle: { color: 'var(--t-bright)' },
    imageClass: 'image-top',
    anim: 'anim-uni-scale-in-left'
  }
]

export default function Services() {
  return (
    <div className="mxd-section overflow-hidden padding-pre-title pt-32 md:pt-48">
      <div className="mxd-container grid-container">

        {/* Block - Services Cards #02 Start */}
        <div className="mxd-block">
          <div className="mxd-services-cards-s">
            <div className="container-fluid px-0">
              <div className="row gx-0">
                {services.map((service, index) => (
                  <div key={index} className={`${service.layoutClass} mxd-services-cards-s__item mxd-grid-item ${service.anim}`}>
                    <div className={`mxd-services-cards-s__inner relative ${service.itemClass}`} style={service.itemStyle || {}}>

                      {/* Badge / Slogan */}
                      {service.badge && (
                        <div className="absolute top-8 left-8 md:left-12 z-20">
                          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            <span className="text-xs font-bold tracking-widest text-white uppercase">{service.badge}</span>
                          </div>
                        </div>
                      )}

                      <div className="mxd-services-cards-s__title z-10 relative mt-12 md:mt-16">
                        {service.headline ? (
                          <h2 className={`anim-uni-in-up ${service.titleClass} font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-4`} style={service.titleStyle || {}}>
                            {typeof service.headline === 'string' ? service.headline.split('\n').map((line: string, i: number) => (
                              <span key={i} className="block">{line}</span>
                            )) : service.headline}
                          </h2>
                        ) : (
                          <h3 className={`reveal-type anim-uni-in-up ${service.titleClass}`} style={service.titleStyle || {}}>{service.title}</h3>
                        )}
                      </div>
                      <div className={`mxd-services-cards-s__info z-10 relative ${service.layoutClass.includes('col-xl-8') ? 'width-50' : ''}`}>
                        <div className="mxd-services-cards-s__tags">
                          {service.tags && service.tags.map((tag: string, i: number) => (
                            <span key={i} className={`tag tag-default ${service.tagClass || 'tag-outline'} anim-uni-in-up`}>{tag}</span>
                          ))}
                        </div>
                        <p className={`reveal-type anim-uni-in-up ${service.textClass || ''}`}>{service.description}</p>

                        {/* Custom Buttons */}
                        {service.buttons && (
                          <div className="flex flex-wrap gap-4 mt-8 anim-uni-in-up">
                            {service.buttons.map((btn: any, i: number) => (
                              <Link key={i} href={btn.link} className={`btn btn-anim btn-small ${btn.style}`}>
                                <span className="btn-caption font-bold">{btn.text}</span>
                                <ArrowUpRight className="w-5 h-5 ml-2" />
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className={`mxd-services-cards-s__image ${service.imageClass} z-0 opacity-50 md:opacity-100`}>
                        {/* Using img tag directly to respect template CSS absolute positioning */}
                        <img src={service.image} alt={service.title || 'Service Image'} className="object-cover" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Block - Services Cards #02 End */}

      </div>
    </div>
  )
}
