'use client'

import Link from 'next/link'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const caseStudies = [
  {
    id: 'bank-digital-transformation',
    title: 'Digital Transformation for EgyptBank',
    client: 'EgyptBank',
    industry: 'Financial Services',
    challenge: 'Modernizing legacy systems while maintaining 24/7 availability',
    solution: 'Implemented hybrid cloud infrastructure with zero downtime migration',
    results: '40% cost reduction, 60% performance improvement',
    tags: ['Cloud Migration', 'Financial Services'],
  },
  {
    id: 'healthcare-cloud-migration',
    title: 'Cybersecurity Overhaul for HealthCare Egypt',
    client: 'HealthCare Egypt',
    industry: 'Healthcare',
    challenge: 'Achieving HIPAA compliance and protecting patient data',
    solution: 'Deployed zero-trust architecture with advanced threat protection',
    results: '100% compliance achieved, 99.99% uptime',
    tags: ['Cybersecurity', 'Healthcare'],
  },
  {
    id: 'retail-security-overhaul',
    title: 'Enterprise Infrastructure for RetailCorp',
    client: 'RetailCorp',
    industry: 'Retail',
    challenge: 'Scaling infrastructure to support e-commerce growth',
    solution: 'Built scalable cloud-native architecture with auto-scaling',
    results: '300% traffic handling increase, 50% faster loads',
    tags: ['Infrastructure', 'Retail'],
  },
  {
    id: 'telecom-network-upgrade',
    title: 'Network Modernization for Telecom Egypt',
    client: 'Telecom Egypt',
    industry: 'Telecommunications',
    challenge: 'Upgrading network infrastructure for 5G readiness',
    solution: 'Deployed next-generation SD-WAN and 5G infrastructure',
    results: '10x network capacity, 40% latency reduction',
    tags: ['Networking', 'Telecommunications'],
  }
]

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="mxd-section mxd-section-inner-headline padding-s-headline-pre-grid">
        <div className="mxd-container grid-container">
          <div className="mxd-block loading-wrap">
            <div className="container-fluid px-0">
              <div className="row gx-0">
                <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                  <div className="mxd-block__name name-inner-headline">
                    <p className="mxd-point-subtitle">
                      <span className="relative flex h-3 w-3 mr-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                      </span>
                      <span>Case Studies</span>
                    </p>
                  </div>
                </div>
                <div className="col-12 col-xl-10 mxd-grid-item no-margin">
                  <div className="mxd-block__content">
                    <div className="mxd-block__inner-headline">
                      <h1 className="inner-headline__title">
                        Client <span className="text-primary">Success Stories</span>
                      </h1>
                      <p className="inner-headline__text t-large t-bright mt-6">
                        Explore how we've helped organizations transform their IT infrastructure and achieve measurable results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies List */}
      <div className="mxd-section padding-default">
        <div className="mxd-container grid-container">
          <div className="mxd-block">
            <div className="mxd-services-list grid-top">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="mxd-services-list__item group"
                >
                  <div className="mxd-services-list__border anim-uni-in-up"></div>
                  <div className="mxd-services-list__inner">
                    <div className="container-fluid px-0">
                      <div className="row gx-0">
                        {/* Title & Client */}
                        <div className="col-12 col-xl-5 mxd-grid-item no-margin">
                          <div className="mxd-services-list__title anim-uni-in-up">
                            <div className="mxd-services-list__icon">
                              <ArrowUpRight className="w-5 h-5" />
                            </div>
                            <div>
                              <p className="group-hover:text-primary transition-colors">{study.title}</p>
                              <span className="text-sm text-muted-foreground block mt-1 font-normal">
                                {study.client} &bull; {study.industry}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Challenge / Solution / Results */}
                        <div className="col-12 col-xl-5 mxd-grid-item no-margin">
                          <div className="mxd-services-list__descr anim-uni-in-up">
                            <div className="space-y-3">
                              <div>
                                <span className="text-xs font-bold uppercase tracking-wider text-primary">Challenge</span>
                                <p className="t-small mt-1">{study.challenge}</p>
                              </div>
                              <div>
                                <span className="text-xs font-bold uppercase tracking-wider text-primary">Results</span>
                                <p className="t-small mt-1">{study.results}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Tags & CTA */}
                        <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                          <div className="mxd-services-list__tagslist anim-uni-in-up">
                            <div className="flex flex-wrap gap-2 mb-4">
                              {study.tags.map((tag, i) => (
                                <span key={i} className="tag tag-default tag-permanent text-xs bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10">
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <Link href={`/case-studies/${study.id}`} className="btn btn-anim btn-default btn-outline btn-s slide-right-up">
                              <span className="btn-caption">View</span>
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mxd-services-list__border anim-uni-in-up"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mxd-block">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-12 col-xl-2 mxd-grid-item no-margin"></div>
                <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                  <div className="mxd-block__content text-center">
                    <div className="mxd-block__inner-headline">
                      <h2 className="inner-headline__title anim-uni-in-up">
                        Have a project<br />in mind?
                      </h2>
                      <p className="inner-headline__text t-large t-bright mt-6 anim-uni-in-up">
                        Let us help you achieve similar success with a tailored IT solution.
                      </p>
                      <div className="flex justify-center mt-10 anim-uni-in-up">
                        <Link className="btn btn-anim btn-default btn-opposite slide-right-up" href="/contact">
                          <span className="btn-caption">Get Started Today</span>
                          <ArrowUpRight className="w-5 h-5 ml-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
