'use client'

import React from 'react'

const PartnersHero = () => {
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
                      <span>Partners</span>
                    </p>
                  </div>
                </div>
                <div className="col-12 col-xl-10 mxd-grid-item no-margin">
                  <div className="mxd-block__content">
                    <div className="mxd-block__inner-headline">
                      <h1 className="inner-headline__title headline-img-before headline-img-04">
                        Strategic <span className="text-primary">Technology Alliances</span>
                      </h1>
                      <div className="inner-headline__descr t-large t-bright mt-6 max-w-2xl">
                        <p>
                          We collaborate with global technology leaders to deliver best-in-class solutions
                          that empower your business and drive innovation.
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

export default PartnersHero
