'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const AboutContent = () => {
  return (
    <>
      {/* Section - Culture & Values Start */}
      <div className="mxd-section padding-grid-pre-mtext">
        <div className="mxd-container grid-container">
          <div className="mxd-block">
            <div className="mxd-values">
              <div className="container-fluid p-0">
                <div className="row g-0 d-flex">

                  {/* Lists Column (Core Values) */}
                  <div className="col-12 col-xl-2 mxd-values__item order-2 order-xl-1 mxd-grid-item no-margin">
                    <div className="mxd-values__lists fullheight-xl">
                      <div className="container-fluid p-0 fullheight-xl">
                        <div className="row g-0 fullheight-xl d-xl-flex flex-xl-column justify-content-xl-between">
                          <div className="col-12 col-sm-6 col-xl-12 mxd-values__lists-item">
                            <ul>
                              <li><p className="t-small anim-uni-in-up">Customer First</p></li>
                              <li><p className="t-small anim-uni-in-up">Reliability</p></li>
                              <li><p className="t-small anim-uni-in-up">Innovation</p></li>
                              <li><p className="t-small anim-uni-in-up">Collaboration</p></li>
                            </ul>
                          </div>
                          <div className="col-12 col-sm-6 col-xl-12 mxd-values__lists-item">
                            <ul>
                              <li><p className="t-small anim-uni-in-up">Expertise</p></li>
                              <li><p className="t-small anim-uni-in-up">Integrity</p></li>
                              <li><p className="t-small anim-uni-in-up">Excellence</p></li>
                              <li><p className="t-small anim-uni-in-up">Agility</p></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Images Column */}
                  <div className="col-12 col-xl-4 mxd-values__item order-1 order-xl-2 mxd-grid-item no-margin">
                    <div className="mxd-values__image image-large-desktop" style={{ backgroundImage: 'url(/media/real/hero_business_1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                  </div>

                  {/* Description Column (Story) */}
                  <div className="col-12 col-xl-6 mxd-values__item order-3 order-xl-3 mobile-reverse mxd-grid-item no-margin">
                    <div className="mxd-values__image image-small-desktop" style={{ backgroundImage: 'url(/media/real/tech_workspace.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                    <div className="mxd-values__descr has-top-list anim-uni-in-up">
                      <p className="t-bright t-large">
                        Founded in 1999, NILE.COM began with a simple mission: to help Egyptian businesses harness the power of technology for growth and success.
                        Over the past 25 years, we have evolved from a small IT services company into Egypt's leading provider of comprehensive technology solutions.
                      </p>
                      <div className="mt-8">
                        <p className="t-small text-muted-foreground">
                          Today, we serve over 1,750 satisfied customers across various industries, from small businesses to large enterprises.
                          Our team of certified professionals has successfully completed more than 2,500 projects.
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
      {/* Section - Culture & Values End */}

      {/* Section - Marquee Text (Competitive Edge) */}
      <div className="mxd-section padding-mtext">
        <div className="mxd-container fullwidth-container">
          <div className="mxd-block">
            <div className="marquee marquee-right--gsap muted-extra">
              <div className="marquee__toright">
                {['Local Expertise', 'Premier Certifications', 'Rapid Implementation', 'Global Standards'].map((text, idx) => (
                  <div key={idx} className="marquee__item one-line item-regular text">
                    <p className="marquee__text">{text}</p>
                    <div className="marquee__image">
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="currentColor">
                        <circle cx="40" cy="40" r="40" />
                      </svg>
                    </div>
                  </div>
                ))}
                {['Local Expertise', 'Premier Certifications', 'Rapid Implementation', 'Global Standards'].map((text, idx) => (
                  <div key={`dup-${idx}`} className="marquee__item one-line item-regular text">
                    <p className="marquee__text">{text}</p>
                    <div className="marquee__image">
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="currentColor">
                        <circle cx="40" cy="40" r="40" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section - Parallax Divider */}
      <div className="mxd-section padding-pre-title">
        <div className="mxd-container">
          <div className="mxd-divider">
            <div className="mxd-divider__image" style={{ backgroundImage: 'url(/media/real/office_interior.jpg)', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center', height: '60vh' }}></div>
          </div>
        </div>
      </div>

      {/* Section - Timeline (Awards Style) */}
      <div className="mxd-section overflow-hidden padding-pre-grid mobile-grid-s">
        <div className="mxd-container grid-container">

          <div className="mxd-block">
            <div className="mxd-section-title">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                    <div className="mxd-section-title__hrtitle">
                      <h2 className="reveal-type">Our Journey &<br />Milestones</h2>
                    </div>
                  </div>
                  <div className="col-12 col-xl-3 mxd-grid-item no-margin"></div>
                  <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                    <div className="mxd-section-title__hrcontrols pre-title anim-uni-in-up">
                      <Link className="btn btn-anim btn-default btn-outline slide-right-up" href="/contact">
                        <span className="btn-caption">Start Project</span>
                        <ArrowUpRight className="w-5 h-5 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mxd-block">
            <div className="mxd-awards-list hover-reveal">
              {[
                { year: '2024', title: 'AI Integration', desc: 'Leading with AI & Automation', image: '/media/real/automation.jpg' },
                { year: '2020', title: 'Remote Solutions', desc: 'Accelerated Remote Work', image: '/media/real/tech_workspace.jpg' },
                { year: '2015', title: 'Digital Transformation', desc: 'Consulting Services Launch', image: '/media/real/digital_transformation.jpg' },
                { year: '2010', title: 'Cloud Pioneer', desc: 'Early Cloud Adoption', image: '/media/real/cloud_migration.jpg' },
                { year: '2005', title: 'Enterprise Focus', desc: 'Expanded to Enterprise', image: '/media/real/consulting.jpg' },
                { year: '1999', title: 'Company Founded', desc: 'Established in Egypt', image: '/media/real/office_interior.jpg' }
              ].map((item, idx) => (
                <div key={idx} className="mxd-awards-list__item hover-reveal__item cursor-pointer">
                  <div className="mxd-awards-list__border anim-uni-in-up"></div>
                  <div className="hover-reveal__content overflow-visible hover-reveal-260x260">
                    <img className="hover-reveal__image" src={item.image} alt={item.title} />
                  </div>
                  <div className="mxd-awards-list__inner">
                    <div className="container-fluid px-0">
                      <div className="row gx-0 align-items-center">
                        <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                          <div className="mxd-awards-list__date anim-uni-in-up">
                            <p className="text-4xl font-black text-primary/20 group-hover:text-primary transition-colors duration-500">{item.year}</p>
                          </div>
                        </div>
                        <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                          <div className="mxd-awards-list__title anim-uni-in-up">
                            <div className="mxd-awards-list__icon">
                              <ArrowUpRight className="w-6 h-6" />
                            </div>
                            <p className="text-2xl font-bold">{item.title}</p>
                          </div>
                        </div>
                        <div className="col-12 col-xl-4 mxd-grid-item no-margin">
                          <div className="mxd-awards-list__tagslist text-right">
                            <ul>
                              <li className="anim-uni-in-up">
                                <span className="tag tag-default tag-permanent bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10">{item.desc}</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mxd-awards-list__border anim-uni-in-up"></div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default AboutContent
