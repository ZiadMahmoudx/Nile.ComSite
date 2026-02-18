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
    title: 'Managed IT Services',
    tags: ['24/7 Monitoring', 'Proactive Maintenance', 'Security', 'Performance'],
    description: 'Complete IT infrastructure management and support with 24/7 monitoring, proactive security, and performance optimization.',
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
