'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const SolutionsHero = () => {
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
                      <span>Solutions</span>
                    </p>
                  </div>
                </div>
                <div className="col-12 col-xl-10 mxd-grid-item no-margin">
                  <div className="mxd-block__content">
                    <div className="mxd-block__inner-headline">
                      <h1 className="inner-headline__title headline-img-before headline-img-04">
                        IT Solutions for <span className="text-primary">Modern Enterprises</span>
                      </h1>
                      <div className="inner-headline__descr t-large t-bright mt-6 max-w-2xl">
                        <p>
                          From cloud infrastructure to cybersecurity, we deliver end-to-end technology solutions
                          that drive business growth and enhance security.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section - Inner Page Headline End */}
    </>
  )
}

export default SolutionsHero
