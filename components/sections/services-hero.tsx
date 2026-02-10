'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const ServicesHero = () => {
  return (
    <>
      {/* Section - Inner Page Headline Start */}
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
                      <span>Services</span>
                    </p>
                  </div>
                </div>
                <div className="col-12 col-xl-10 mxd-grid-item no-margin">
                  <div className="mxd-block__content">
                    <div className="mxd-block__inner-headline">
                      <h1 className="inner-headline__title headline-img-before headline-img-04">
                        New standards in <span className="text-primary">digital excellence</span>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section - Inner Page Headline End */}

      {/* Section - Inner Page Statistics Start */}
      <div className="mxd-section mxd-section-inner-stats overflow-hidden">
        <div className="mxd-container grid-container">
          <div className="mxd-block">
            <div className="container-fluid px-0">
              <div className="row gx-0">
                <div className="col-12 col-xl-2 mxd-grid-item no-margin"></div>
                <div className="col-12 col-xl-10">
                  <div className="mxd-block__content">
                    <div className="mxd-block__inner-stats">
                      <div className="mxd-stats-cards">
                        <div className="container-fluid px-0">
                          <div className="row gx-0">
                            {/* item 1 */}
                            <div className="col-12 col-xl-7 mxd-stats-cards__item mxd-grid-item">
                              <div className="mxd-stats-cards__inner bg-secondary/10 radius-m padding-4 h-full relative overflow-hidden group">
                                <div className="mxd-counter relative z-10">
                                  <p className="mxd-counter__number mxd-stats-number text-8xl font-bold mb-4">25+</p>
                                  <p className="mxd-counter__descr t-large t-bright">Years of professional experience in delivering IT solutions</p>
                                </div>
                                <div className="mxd-stats-cards__btngroup mt-8 relative z-10">
                                  <Link className="btn btn-anim btn-default btn-outline slide-right-up" href="/contact">
                                    <span className="btn-caption">Start New Project</span>
                                    <ArrowUpRight className="w-5 h-5 ml-2" />
                                  </Link>
                                </div>
                                {/* Abstract BG or Image */}
                                <div className="absolute right-0 bottom-0 opacity-10 group-hover:opacity-20 transition-opacity">
                                  {/* Placeholder for illustration */}
                                  <div className="w-64 h-64 bg-primary rounded-full blur-3xl"></div>
                                </div>
                              </div>
                            </div>
                            {/* item 2 */}
                            <div className="col-12 col-xl-5 mxd-stats-cards__item mxd-grid-item">
                              <div className="mxd-stats-cards__inner bg-secondary/10 radius-m padding-4 h-full relative overflow-hidden group">
                                <div className="mxd-counter relative z-10">
                                  <p className="mxd-counter__number mxd-stats-number text-8xl font-bold mb-4">2.5k</p>
                                  <p className="mxd-counter__descr t-large t-bright">Successfully<br />completed projects</p>
                                </div>
                                <div className="mxd-stats-cards__btngroup mt-8 relative z-10">
                                  <Link className="btn btn-anim btn-default btn-outline slide-right-up" href="/solutions">
                                    <span className="btn-caption">Our Solutions</span>
                                    <ArrowUpRight className="w-5 h-5 ml-2" />
                                  </Link>
                                </div>
                                <div className="absolute right-0 bottom-0 opacity-10 group-hover:opacity-20 transition-opacity">
                                  <div className="w-48 h-48 bg-blue-500 rounded-full blur-3xl"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section - Inner Page Statistics End */}
    </>
  )
}

export default ServicesHero
