'use client'

import React from 'react'
import Link from 'next/link'
import { AnimatedCounter } from '@/components/ui/animated-counter'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

const stats = [
  { label: 'Satisfied Enterprise Clients', value: 1750, suffix: '+', id: 'stats-counter-1' },
  { label: 'Uptime SLA Guarantee', value: 99.9, suffix: '%', decimals: 1, id: 'stats-counter-2' },
  { label: 'Years of Technical Excellence', value: 25, suffix: '+', id: 'stats-counter-3' },
  { label: 'Successful IT Projects', value: 2500, suffix: '+', id: 'stats-counter-4' },
]

export default function Hero() {
  // Carousel logic removed to show all stats at once for professional look

  return (
    <>
      {/* Hero Section Start */}
      <section className="mxd-section mxd-hero-section relative overflow-hidden flex flex-col min-h-screen">
        <div className="mxd-hero-01 relative z-10 flex-grow flex flex-col">
          <div className="mxd-hero-01__wrap container mx-auto px-4 flex flex-col h-full py-20 lg:py-32">
            {/* top group */}
            <div className="mxd-hero-01__top">
              <div className="mxd-hero-01__title-wrap">
                {/* Floating images removed per request */}
                {/* title marquee */}
                {/* Animated Marquee Restored */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mxd-hero-01__marquee mb-12"
                >
                  <div className="marquee marquee-right--gsap">
                    <div className="marquee__toright marquee-flex">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="marquee__item item-regular text flex items-center gap-4">
                          <p className="uppercase tracking-[0.3em] font-bold text-sm opacity-50">Leading IT Solutions</p>
                          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="currentColor" className="w-8 h-8 opacity-20">
                            <path fill="currentColor" d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4C78.4,38.4,78.4,38.4,78.4,38.4z" />
                          </svg>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
                {/* title text */}
                <h1 className="hero-01-title relative z-20 mb-16">
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="hero-01-title__row flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-center"
                  >
                    <span className="hero-01-title__item text-[12vw] sm:text-[8vw] lg:text-[6.5vw] font-black tracking-tight leading-none">Transform</span>
                    <span className="hero-01-title__item text-primary px-8 py-3 border-2 border-primary/10 rounded-full bg-primary/5 text-[5vw] sm:text-[3vw] lg:text-[2.5vw] font-bold">Your</span>
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="hero-01-title__row flex justify-center items-center text-center mt-6"
                  >
                    <span className="hero-01-title__item text-[12vw] sm:text-[8vw] lg:text-[7.5vw] font-black tracking-tighter leading-none italic uppercase">Business</span>
                  </motion.span>
                </h1>
              </div>
            </div>
            {/* Bottom Group: Simplified to avoid template layout bugs */}
            <div className="mt-auto pt-16">
              <div className="flex flex-col lg:flex-row items-end justify-between gap-12">

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-col justify-center"
                >
                  <p className="t-bright text-lg leading-relaxed max-w-xl mb-8">
                    Empowering enterprises with cutting-edge IT solutions, cybersecurity, and digital transformation services for over 25 years.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link href="/contact" className="btn btn-anim btn-default btn-opposite slide-right-up">
                      <span className="btn-caption">Get Started</span>
                      <ArrowUpRight className="w-5 h-5 ml-2" />
                    </Link>
                    <Link href="/solutions" className="btn btn-anim btn-default btn-outline slide-right-up">
                      <span className="btn-caption">Our Solutions</span>
                      <ArrowUpRight className="w-5 h-5 ml-2" />
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Metrics Banner - Positioned at the very bottom of the section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="w-full mt-24 pt-12 border-t border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/5 backdrop-blur-xl rounded-3xl px-8 pb-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                {stats.map((stat, i) => (
                  <div key={i} className="flex flex-col items-center lg:items-start gap-1 group">
                    <div className="flex items-baseline gap-1">
                      <AnimatedCounter
                        value={stat.value}
                        suffix={stat.suffix}
                        decimals={stat.decimals}
                        className="font-black text-4xl text-primary drop-shadow-sm transition-transform group-hover:scale-105 duration-300"
                      />
                    </div>
                    <span className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground font-bold group-hover:text-primary transition-colors cursor-default">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Global Video Background or Floating Item (Optional/Backgrounded) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          className="absolute right-[-10%] bottom-[-5%] w-[60%] h-[60%] z-0 pointer-events-none grayscale opacity-20"
        >
          <video className="w-full h-full object-cover rounded-full overflow-hidden" preload="auto" autoPlay loop muted>
            <source type="video/mp4" src="/media/intro.mp4" />
          </video>
        </motion.div>
      </section>
    </>
  )
}