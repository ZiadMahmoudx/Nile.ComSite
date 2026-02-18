'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const solutions = [
  {
    title: 'Cloud Solutions',
    number: '/01',
    description: 'Comprehensive cloud migration, management, and optimization services',
    image1: '/img/cloud-1.png',
    image2: '/img/cloud-2.png',
    tags1: ['AWS & Azure Certified', 'Hybrid Cloud', 'Cost Optimization'],
    tags2: ['99.9% Uptime SLA', 'Security-First', '24/7 Monitoring'],
    link: '/solutions/cloud-migration',
    bgColor: 'bg-neutral-900 rounded-3xl',
    titleClass: 'text-white',
    textClass: 'text-white/80',
    numClass: 'text-white/40'
  },
  {
    title: 'Cybersecurity',
    number: '/02',
    description: 'Advanced threat protection and security compliance solutions',
    image1: '/img/security-1.png',
    image2: '/img/security-2.png',
    tags1: ['Zero Trust Architecture', 'SOC 2 Compliance', 'Threat Intelligence'],
    tags2: ['Incident Response', '24/7 SOC Monitoring', 'Penetration Testing'],
    link: '/solutions/cybersecurity',
    bgColor: 'bg-primary rounded-3xl',
    titleClass: 'text-primary-foreground',
    textClass: 'text-primary-foreground/90',
    numClass: 'text-primary-foreground/60'
  },
  {
    title: 'Infrastructure',
    number: '/03',
    description: 'Robust IT infrastructure design, implementation, and management',
    image1: '/img/800-400-1.png',
    image2: '/img/800-400-2.png',
    tags1: ['High Availability', 'Disaster Recovery', 'Performance Tuning'],
    tags2: ['Hybrid Cloud Setup', 'Load Balancing', 'Backup Solutions'],
    link: '/solutions/infrastructure',
    bgColor: 'bg-muted rounded-3xl',
    titleClass: 'text-foreground',
    textClass: 'text-muted-foreground',
    numClass: 'text-muted-foreground/60'
  },
  {
    title: 'Digital Transformation',
    number: '/04',
    description: 'Modernize your business processes with cutting-edge technology',
    image1: '/img/productivity-1.png',
    image2: '/img/productivity-2.png',
    tags1: ['Strategy', 'Workflows', 'Task Management'],
    tags2: ['Communication', 'Performance', 'Leadership'],
    link: '/solutions/digital-transformation',
    bgColor: 'bg-neutral-900 rounded-3xl',
    titleClass: 'text-white',
    textClass: 'text-white/80',
    numClass: 'text-white/40'
  },
  {
    title: 'Data Management',
    number: '/05',
    description: 'Comprehensive data strategy, analytics, and management solutions',
    image1: '/img/business-1.png',
    image2: '/img/business-2.png',
    tags1: ['Big Data Analytics', 'Data Warehousing', 'Real-time Processing'],
    tags2: ['ML Integration', 'Data Governance', 'BI Dashboards'],
    link: '/solutions/data-management',
    bgColor: 'bg-primary rounded-3xl',
    titleClass: 'text-primary-foreground',
    textClass: 'text-primary-foreground/90',
    numClass: 'text-primary-foreground/60'
  },
  {
    title: 'Managed Services',
    number: '/06',
    description: '24/7 IT support and management for your entire technology stack',
    image1: '/img/management-1.png',
    image2: '/img/management-2.png',
    tags1: ['Planning', 'Organizing', 'Staffing'],
    tags2: ['Leading', 'Controlling', 'Directing'],
    link: '/services',
    bgColor: 'bg-muted rounded-3xl',
    titleClass: 'text-foreground',
    textClass: 'text-muted-foreground',
    numClass: 'text-muted-foreground/60'
  }
]

export default function Solutions() {
  return (
    <div className="mxd-section padding-stacked-section">
      <div className="mxd-container grid-container">

        {/* Block - Section Title Start */}
        <div className="mxd-block">
          <div className="mxd-section-title pre-grid">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrtitle">
                    <h2 className="reveal-type anim-uni-in-up" style={{ fontSize: 'clamp(2.4rem, 4vw, 4rem)' }}>
                      Comprehensive<br />IT Solutions
                    </h2>
                  </div>
                </div>
                <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrdescr">
                    <p className="anim-uni-in-up">
                      From cloud migration to cybersecurity, we provide end-to-end technology
                      solutions that drive innovation and accelerate your business growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Block - Section Title End */}

        {/* Block - Services/Features Stacking Cards Start */}
        <div className="mxd-block mxd-grid-item no-margin">
          <div className="content__block">
            <div className="stack-wrapper mxd-hero-02-stack">
              <div className="stack-offset"></div>
              <div className="services-stack">
                {solutions.map((solution, index) => (
                  <div key={index} className="stack-item">
                    <div className={`mxd-services-stack__inner showcase-inner ${solution.bgColor}`}>
                      <div className="mxd-services-stack__container">
                        <div className="mxd-services-stack__title showcase-title">
                          <h3 className={`reveal-type anim-uni-in-up ${solution.titleClass}`}>{solution.title}</h3>
                          <span className={`mxd-services-stack__number anim-uni-in-up ${solution.numClass}`}>{solution.number}</span>
                        </div>
                        <div className="mxd-services-stack__info showcase-info">
                          <p className={`reveal-type anim-uni-in-up ${solution.textClass}`}>{solution.description}</p>
                        </div>
                        <div className="mxd-services-stack__works">
                          <Link className="mxd-services-stack__work" href={solution.link}>
                            <div className="mxd-services-stack__preview relative w-full h-full overflow-hidden">
                              <Image src={solution.image1} alt="Preview" fill className="object-cover" />
                            </div>
                            <div className="mxd-services-stack__tags tags-absolute">
                              {solution.tags1.map((tag, i) => (
                                <span key={i} className="tag tag-default tag-permanent">{tag}</span>
                              ))}
                            </div>
                            <div className="mxd-preview-hover">
                              <i className="mxd-preview-hover__icon icon-small flex items-center justify-center">
                                <ArrowRight className="w-4 h-4 text-white" />
                              </i>
                            </div>
                          </Link>
                          <Link className="mxd-services-stack__work" href={solution.link}>
                            <div className="mxd-services-stack__preview relative w-full h-full overflow-hidden">
                              <Image src={solution.image2} alt="Preview" fill className="object-cover" />
                            </div>
                            <div className="mxd-services-stack__tags tags-absolute">
                              {solution.tags2.map((tag, i) => (
                                <span key={i} className="tag tag-default tag-permanent">{tag}</span>
                              ))}
                            </div>
                            <div className="mxd-preview-hover">
                              <i className="mxd-preview-hover__icon icon-small flex items-center justify-center">
                                <ArrowRight className="w-4 h-4 text-white" />
                              </i>
                            </div>
                          </Link>
                        </div>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Block - Services/Features Stacking Cards End */}

      </div>
    </div>
  )
}
