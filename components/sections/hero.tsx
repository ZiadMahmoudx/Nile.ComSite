'use client'

import React from 'react'
import Link from 'next/link'
import { AnimatedCounter } from '@/components/ui/animated-counter'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { AnimatedCaption } from '@/components/ui/animated-caption'

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
          <div className="mxd-hero-01__wrap container mx-auto px-4 flex flex-col h-full py-6 md:py-20 lg:py-32">
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
                  className="flex justify-center mb-2 md:mb-8"
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 dark:bg-white/5 backdrop-blur-sm border border-black/5 dark:border-white/10 transition-colors hover:bg-black/10 dark:hover:bg-white/10">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">Leading IT Solutions</span>
                  </div>
                </motion.div>
                {/* title text */}
                <h1 className="hero-01-title relative z-20 mb-2 md:mb-16 flex flex-col items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap items-center justify-center gap-[2vw] leading-none"
                  >
                    <span className="text-[9vw] lg:text-[6.5vw] font-bold tracking-tighter text-foreground">Transform</span>
                    <span className="text-[9vw] lg:text-[6.5vw] font-bold tracking-tighter text-muted-foreground">Your</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="leading-none mt-[-0.5vw]"
                  >
                    <span className="text-[12vw] lg:text-[9vw] font-black tracking-tighter text-foreground uppercase">Business</span>
                  </motion.div>
                </h1>
              </div>
            </div>
            {/* Bottom Group: Simplified to avoid template layout bugs */}
            <div className="mt-auto pt-2 md:pt-16">
              <div className="flex flex-col lg:flex-row items-end justify-between gap-12">

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-col justify-center"
                >
                  <p className="t-bright text-lg leading-relaxed max-w-xl mb-4 md:mb-8">
                    Empowering enterprises with cutting-edge IT solutions, cybersecurity, and digital transformation services for over 25 years.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link href="/contact" className="btn btn-anim btn-default btn-opposite slide-right-up">
                      <AnimatedCaption text="Get Started" />
                      <ArrowUpRight className="w-5 h-5 ml-2" />
                    </Link>
                    <Link href="/solutions" className="btn btn-anim btn-default btn-outline slide-right-up">
                      <AnimatedCaption text="Our Solutions" />
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
              className="w-full mt-6 pt-4 md:mt-24 md:pt-12 border-t border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/5 backdrop-blur-xl rounded-3xl px-4 md:px-8 pb-4 md:pb-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-12">
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