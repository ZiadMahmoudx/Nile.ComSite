'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Settings, Users, Headphones, Wrench, BookOpen, Rocket, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const services = [
  {
    icon: Settings,
    title: 'AI-powered solutions',
    tags: ['UI/UX', 'Web design', 'Packaging', 'Motion', '3D models'],
    description: 'Intelligent automation, predictive analytics, and machine learning-driven applications.',
    image: '/img/1200x1200_service-image-01.webp',
    layoutClass: 'col-12 col-xl-8',
    itemClass: 'justify-between radius-l padding-4',
    itemStyle: { backgroundColor: 'var(--base-tint)' },
    titleClass: '',
    titleStyle: { color: 'var(--t-bright)' },
    imageClass: 'image-right',
    anim: 'anim-uni-scale-in-right'
  },
  {
    icon: Users,
    title: 'Fintech',
    tags: ['Frontend', 'Interactions', 'Backend'],
    description: 'Innovative financial solutions, from digital banking to payment processing.',
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
    title: 'Blockchain',
    tags: ['Strategy', 'Social media', 'SEO'],
    description: 'Secure and transparent decentralized applications, including smart contracts.',
    image: '/img/1200x1200_service-image-03.webp',
    layoutClass: 'col-12 col-xl-4',
    itemClass: 'bg-[#ff7e85] radius-l padding-4',
    titleClass: 'text-white',
    imageClass: 'image-bottom',
    textClass: 'text-white/90',
    tagClass: 'tag-outline-opposite',
    anim: 'anim-uni-scale-in-right'
  },
  {
    icon: Wrench,
    title: 'Cybersecurity',
    tags: ['Brand strategy', 'Protection', 'Guidelines'],
    description: 'Advanced threat detection, encryption solutions, and secure data protection.',
    image: '/img/1200x1200_service-image-04.webp',
    layoutClass: 'col-12 col-xl-4',
    itemClass: 'bg-neutral-900 radius-l padding-4',
    titleClass: 'text-white',
    imageClass: 'image-bottom image-bottom-2',
    textClass: 'text-white/90',
    tagClass: 'tag-outline-opposite',
    anim: 'anim-uni-scale-in'
  },
  {
    icon: BookOpen,
    title: 'Gaming',
    tags: ['E-Commerce', 'Maintenance', 'Support'],
    description: 'Immersive experiences, multiplayer platforms, and game engine development.',
    image: '/img/1200x1200_service-image-05.webp',
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
                    <div className={`mxd-services-cards-s__inner ${service.itemClass}`} style={service.itemStyle || {}}>
                      <div className="mxd-services-cards-s__title">
                        <h3 className={`anim-uni-in-up ${service.titleClass}`} style={service.titleStyle || {}}>{service.title}</h3>
                      </div>
                      <div className={`mxd-services-cards-s__info ${service.layoutClass.includes('col-xl-8') ? 'width-50' : ''}`}>
                        <div className="mxd-services-cards-s__tags">
                          {service.tags.map((tag, i) => (
                            <span key={i} className={`tag tag-default ${service.tagClass || 'tag-outline'} anim-uni-in-up`}>{tag}</span>
                          ))}
                        </div>
                        <p className={`anim-uni-in-up ${service.textClass || ''}`}>{service.description}</p>
                      </div>
                      <div className={`mxd-services-cards-s__image ${service.imageClass}`}>
                        {/* Using img tag directly to respect template CSS absolute positioning */}
                        <img src={service.image} alt={service.title} className="object-cover" />
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
