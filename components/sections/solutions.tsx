'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const solutions = [
  {
    title: 'Data Center',
    number: '/01',
    description: 'Starting with metal, getting your datacenter set up and ready to host your services and applications...',
    image1: '/img/800-400-1.png',
    image2: '/img/800-400-2.png',
    tags1: ['Secured', 'Optimized', 'Flexible'],
    tags2: ['Power', 'Cooling', 'Redundancy'],
    bgColor: 'bg-neutral-900 rounded-3xl',
    titleClass: 'text-white',
    textClass: 'text-white/80',
    numClass: 'text-white/40'
  },
  {
    title: 'Management',
    number: '/02',
    description: 'Business growth has fueled the need for optimally managed IT that would increase efficiency...',
    image1: '/img/management-1.png',
    image2: '/img/management-2.png',
    tags1: ['Planning', 'Organizing', 'Staffing'],
    tags2: ['Leading', 'Controlling', 'Directing'],
    bgColor: 'bg-primary rounded-3xl',
    titleClass: 'text-primary-foreground',
    textClass: 'text-primary-foreground/90',
    numClass: 'text-primary-foreground/60'
  },
  {
    title: 'Productivity',
    number: '/03',
    description: 'Get things done more efficiently, in less time, this is how we define productivity...',
    image1: '/img/productivity-1.png',
    image2: '/img/productivity-2.png',
    tags1: ['Strategy', 'Workflows', 'Task Management'],
    tags2: ['Communication', 'Performance', 'Leadership'],
    bgColor: 'bg-muted rounded-3xl',
    titleClass: 'text-foreground',
    textClass: 'text-muted-foreground',
    numClass: 'text-muted-foreground/60'
  },
  {
    title: 'Cloud Computing',
    number: '/04',
    description: 'There are many reasons why an enterprise might want to adopt cloud computing...',
    image1: '/img/cloud-1.png',
    image2: '/img/cloud-2.png',
    tags1: ['On-Demand Self-Service', 'Broad Network Access'],
    tags2: ['Rapid Elasticity', 'Measured Service'],
    bgColor: 'bg-neutral-900 rounded-3xl',
    titleClass: 'text-white',
    textClass: 'text-white/80',
    numClass: 'text-white/40'
  },
  {
    title: 'Business Continuity',
    number: '/05',
    description: 'Today, access to information is the key to survival in the fast evolving business world...',
    image1: '/img/business-1.png',
    image2: '/img/business-2.png',
    tags1: ['Risk Assessment', 'Strategy Development', 'Recovery'],
    tags2: ['Communication Plan', 'Continuous Improvement'],
    bgColor: 'bg-primary rounded-3xl',
    titleClass: 'text-primary-foreground',
    textClass: 'text-primary-foreground/90',
    numClass: 'text-primary-foreground/60'
  },
  {
    title: 'Cyber Security',
    number: '/06',
    description: 'The security of your data, systems and networks should imperatively keep pace with your business initiatives...',
    image1: '/img/security-1.png',
    image2: '/img/security-2.png',
    tags1: ['Confidentiality', 'Integrity', 'Availability'],
    tags2: ['Authentication', 'Software Security'],
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
                          <h3 className={solution.titleClass}>{solution.title}</h3>
                          <span className={`mxd-services-stack__number ${solution.numClass}`}>{solution.number}</span>
                        </div>
                        <div className="mxd-services-stack__info showcase-info">
                          <p className={solution.textClass}>{solution.description}</p>
                        </div>
                        <div className="mxd-services-stack__works">
                          <Link className="mxd-services-stack__work" href="#">
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
                          <Link className="mxd-services-stack__work" href="#">
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
