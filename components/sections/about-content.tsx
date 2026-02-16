'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, ArrowRight, CheckCircle2, Trophy, Users, Globe2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { AnimatedCaption } from '@/components/ui/animated-caption'

const milestones = [
  { year: '2024', title: 'AI Integration', desc: 'Leading with AI & Automation', icon: CheckCircle2 },
  { year: '2020', title: 'Remote Solutions', desc: 'Accelerated Remote Work', icon: Globe2 },
  { year: '2015', title: 'Digital Transformation', desc: 'Consulting Services Launch', icon: Trophy },
  { year: '2010', title: 'Cloud Pioneer', desc: 'Early Cloud Adoption', icon: CheckCircle2 },
  { year: '2005', title: 'Enterprise Focus', desc: 'Expanded to Enterprise', icon: Users },
  { year: '1999', title: 'Company Founded', desc: 'Established in Egypt', icon: CheckCircle2 }
]

const stats = [
  { label: 'Years of Experience', value: '25+' },
  { label: 'Happy Clients', value: '1750+' },
  { label: 'Projects Completed', value: '2500+' },
  { label: 'Team Members', value: '150+' }
]

export default function AboutContent() {
  return (
    <>
      {/* Hero Section (Copied style from TeamContent) */}
      <section className="mxd-section mxd-section-inner-headline padding-s-headline-pre-grid">
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
                      <span>About Us</span>
                    </p>
                  </div>
                </div>
                <div className="col-12 col-xl-10 mxd-grid-item no-margin">
                  <div className="mxd-block__content">
                    <div className="mxd-block__inner-headline">
                      <h1 className="inner-headline__title">
                        Driven by Ideas & <span className="text-primary">Innovation</span>
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

      {/* Main Content - About Story (Styled like Team Grid but for content) */}
      <section className="mxd-section padding-default">
        <div className="mxd-container grid-container">
          <div className="mxd-block">
            <div className="container-fluid px-0">
              <div className="row g-0">
                {/* Image Side */}
                <div className="col-12 col-xl-6 mxd-grid-item no-margin order-2 order-xl-1">
                  <div className="relative h-full min-h-[400px] w-full overflow-hidden rounded-2xl">
                    <Image
                      src="/media/real/hero_business_1.jpg"
                      alt="About Nile.com"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Text Side */}
                <div className="col-12 col-xl-6 mxd-grid-item no-margin order-1 order-xl-2">
                  <div className="p-8 lg:p-12 h-full flex flex-col justify-center">
                    <h3 className="text-3xl font-bold mb-6">Our Journey</h3>
                    <p className="t-large t-bright mb-6">
                      Founded in 1999, NILE.COM began with a simple mission: to help Egyptian businesses harness the power of technology for growth and success.
                    </p>
                    <p className="text-muted-foreground mb-8">
                      Over the past 25 years, we have evolved from a small IT services company into Egypt's leading provider of comprehensive technology solutions. Today, we serve over 1,750 satisfied customers across various industries, from small businesses to large enterprises.
                    </p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-6">
                      {stats.map((stat, idx) => (
                        <div key={idx} className="border-l-2 border-primary/30 pl-4">
                          <p className="text-3xl font-black text-primary">{stat.value}</p>
                          <p className="text-sm text-muted-foreground">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values / Milestones Section (Styled like Values in TeamContent) */}
      <section className="mxd-section padding-default" style={{ borderTop: '1px solid var(--st-bright)' }}>
        <div className="mxd-container grid-container">
          <div className="mxd-block">
            <div className="mxd-section-title pre-grid">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                    <div className="mxd-section-title__hrtitle">
                      <h2 className="reveal-type anim-uni-in-up" style={{ fontSize: 'clamp(2.4rem, 4vw, 4rem)' }}>
                        Milestones &<br />History
                      </h2>
                    </div>
                  </div>
                  <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                    <div className="mxd-section-title__hrdescr">
                      <p className="anim-uni-in-up">
                        A legacy of innovation and continuous growth since 1999.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mxd-block">
            <div className="mxd-awards-list hover-reveal">
              {milestones.map((item, idx) => (
                <div key={idx} className="mxd-awards-list__item">
                  <div className="mxd-awards-list__border anim-uni-in-up"></div>
                  <div className="mxd-awards-list__inner">
                    <div className="container-fluid px-0">
                      <div className="row gx-0 align-items-center">
                        <div className="col-4 col-xl-2 mxd-grid-item no-margin">
                          <div className="mxd-awards-list__date anim-uni-in-up">
                            <p className="font-black" style={{ fontSize: '1.5rem', color: 'var(--accent)' }}>{item.year}</p>
                          </div>
                        </div>
                        <div className="col-8 col-xl-5 mxd-grid-item no-margin">
                          <div className="mxd-awards-list__title anim-uni-in-up">
                            <div className="mxd-awards-list__icon !transform-none">
                              <item.icon className="w-5 h-5" />
                            </div>
                            <p className="!transform-none" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.4rem)' }}>{item.title}</p>
                          </div>
                        </div>
                        <div className="col-12 col-xl-5 mxd-grid-item no-margin">
                          <div className="mxd-awards-list__tagslist">
                            <ul>
                              <li className="anim-uni-in-up"><p className="t-small">{item.desc}</p></li>
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

          {/* CTA */}
          <div className="mxd-block">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-12 col-xl-2 mxd-grid-item no-margin"></div>
                <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                  <div className="mxd-block__content text-center">
                    <div className="mxd-block__inner-headline">
                      <p className="anim-uni-in-up" style={{ fontSize: 'clamp(2.4rem, 4vw, 4rem)', fontWeight: 'var(--fw-medium)', fontFamily: 'var(--_font-accent)', color: 'var(--t-bright)', lineHeight: '1.1' }}>
                        Ready to Start?
                      </p>
                      <p className="t-large t-bright mt-6 anim-uni-in-up">
                        Let's discuss how we can help transform your business.
                      </p>
                      <div className="flex justify-center mt-10 anim-uni-in-up">
                        <Link className="btn btn-anim btn-default btn-opposite slide-right-up" href="/contact">
                          <AnimatedCaption text="Get in Touch" />
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
