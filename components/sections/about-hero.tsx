'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Building } from 'lucide-react'

const AboutHero = () => {
  return (
    <section className="mxd-section mxd-section-inner-headline padding-headline-pre-block">
      <div className="mxd-container grid-container">

        <div className="mxd-block loading-wrap">
          <div className="container-fluid px-0">
            <div className="row gx-0">

              {/* Inner Headline Name */}
              <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                <div className="mxd-block__name name-inner-headline">
                  <p className="mxd-point-subtitle">
                    <span className="relative flex h-3 w-3 mr-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                    </span>
                    <span>About Us</span>
                  </p>
                </div>
              </div>

              {/* Inner Headline Content */}
              <div className="col-12 col-xl-10 mxd-grid-item no-margin">
                <div className="mxd-block__content">
                  <div className="mxd-block__inner-headline">
                    <h1 className="inner-headline__title text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                      Driven by ideas and <span className="text-primary">innovation</span>
                    </h1>
                    <p className="inner-headline__text t-large t-bright mt-6">
                      For over 25 years, we have been Egypt's trusted partner in digital transformation, delivering innovative IT solutions that drive business success.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default AboutHero
