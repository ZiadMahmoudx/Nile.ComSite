'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { AnimatedCounter } from '@/components/ui/animated-counter'
import { ArrowUpRight, ArrowDownRight, Play } from 'lucide-react'
import { motion } from 'framer-motion'

const stats = [
  { label: 'Happy clients who trust my work', value: '500+', id: 'stats-counter-1' },
  { label: 'Clients come back for a new projects', value: '99.9%', id: 'stats-counter-2' },
  { label: 'Years of professional experience', value: '25+', id: 'stats-counter-3' },
  { label: 'Successfully completed projects', value: '50+', id: 'stats-counter-4' },
]

export default function Hero() {
  const [currentStat, setCurrentStat] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* Hero Section Start */}
      <section className="mxd-section mxd-hero-section mxd-hero-fullheight relative">


        <div className="mxd-hero-01 relative z-10">
          <div className="mxd-hero-01__wrap">
            {/* top group */}
            <div className="mxd-hero-01__top">
              <div className="mxd-hero-01__title-wrap">
                {/* title images */}
                <div className="mxd-hero-01__images mxd-floating-img">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hero-01-image image-01 mxd-floating-img__item"
                  >
                    <div className="relative w-[300px] h-[300px] overflow-hidden rounded-full border-4 border-background shadow-2xl">
                      <Image
                        className="mxd-pulse object-cover"
                        src="/media/real/hero_business_1.jpg"
                        alt="Hero Image"
                        fill
                      />
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="hero-01-image image-02 mxd-floating-img__item"
                  >
                    <div className="relative w-[200px] h-[200px] overflow-hidden rounded-full border-4 border-background shadow-2xl">
                      <Image
                        className="mxd-move object-cover"
                        src="/media/real/office_interior.jpg"
                        alt="Hero Image"
                        fill
                      />
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="hero-01-image image-03 mxd-floating-img__item"
                  >
                    <div className="relative w-[150px] h-[150px] overflow-hidden rounded-full border-4 border-background shadow-2xl">
                      <Image
                        className="mxd-rotate object-cover"
                        src="/media/real/tech_workspace.jpg"
                        alt="Hero Image"
                        fill
                      />
                    </div>
                  </motion.div>
                </div>
                {/* title marquee */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mxd-hero-01__marquee"
                >
                  <div className="marquee marquee-right--gsap">
                    <div className="marquee__toright marquee-flex">
                      {/* single item */}
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="marquee__item item-regular text">
                          <p>Leading IT Solutions</p>
                          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="currentColor">
                            <path fill="currentColor" d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4C78.4,38.4,78.4,38.4,78.4,38.4z" />
                          </svg>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
                {/* title text */}
                <h1 className="hero-01-title">
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="hero-01-title__row"
                  >
                    <em className="hero-01-title__item">Transform</em>
                    <em className="hero-01-title__item title-item-transparent">Your</em>
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="hero-01-title__row"
                  >
                    <em className="hero-01-title__item title-item-image">
                      <div className="inline-block relative w-[1.5em] h-[0.8em] mx-2 align-middle overflow-hidden rounded-full">
                        <Image src="/media/real/team_collaboration.jpg" alt="Business" fill className="object-cover" />
                      </div>
                    </em>
                    <em className="hero-01-title__item">Business</em>
                  </motion.span>
                </h1>
              </div>
            </div>
            {/* bottom group */}
            <div className="mxd-hero-01__bottom">
              <div className="mxd-hero-01__data-wrap">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8 }}
                  className="mxd-hero-01__dash-line dash-line"
                ></motion.div>
                <div className="mxd-hero-01__data-btn">
                  <a href="#company-intro" className="btn-rotating btn-rotating-120-160">
                    {/* SVG rotating text */}
                    <svg version="1.1" id="scrollDown" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 160 160" className="btn-rotating__text animate-rotation" data-value="360">
                      <defs>
                        <path id="textPath" d="M149.7,80c0,38.5-31.2,69.7-69.7,69.7S10.3,118.5,10.3,80S41.5,10.3,80,10.3S149.7,41.5,149.7,80z"></path>
                      </defs>
                      <g>
                        <use xlinkHref="#textPath" fill="none"></use>
                        <text>
                          <textPath xlinkHref="#textPath">Scroll for More * Scroll for More * Scroll for More * </textPath>
                        </text>
                      </g>
                    </svg>
                    {/* image */}
                    <div className="btn-rotating__image absolute inset-0 flex items-center justify-center">
                      <ArrowDownRight className="w-8 h-8 text-primary" />
                    </div>
                  </a>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="mxd-hero-01__data-descr"
                >
                  <p className="t-bright">
                    Empowering enterprises with cutting-edge IT solutions, cybersecurity, and digital transformation services for over 25 years.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="mxd-hero-01__data-socials"
                >
                  <ul>
                    {stats.map((stat, i) => (
                      <li key={i} className={i === currentStat ? 'opacity-100' : 'opacity-50'}>
                        <span className="font-bold text-lg">{stat.value}</span> <span className="text-xs">{stat.label}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mxd-hero-01__video-wrap"
              >
                <video className="mxd-hero-01__video" preload="auto" autoPlay loop muted poster="/images/thumb.jpg">
                  <source type="video/mp4" src="/media/intro.mp4" />
                </video>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}