'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const partners = [
  { name: 'Microsoft', logo: '/img/microsoft-logo-300x300.png' },
  { name: 'Dell EMC', logo: '/img/Dell-Emc-e1588863410145-367x367.png' },
  { name: 'Fortinet', logo: '/img/Fortinet-300x300.png' },
  { name: 'Broadcom', logo: '/img/Broadcom-367x367.png' },
  { name: 'VMware', logo: '/img/Vmware-logo-300x300.png' },
  { name: 'SecPod', logo: '/img/secpod-2-300x300.png' },
  { name: 'Logitech', logo: '/img/brands/logitech.svg' },
  { name: 'Mozilla', logo: '/img/brands/mozilla.svg' },
]

export default function Partners() {
  return (
    <div className="mxd-section overflow-hidden padding-default">
      <div className="mxd-container grid-container">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight reveal-type anim-uni-in-up">Trusted Partners & Vendors</h2>
            <p className="text-lg opacity-80 mt-4 reveal-type anim-uni-in-up">Collaborating with industry leaders to deliver world-class infrastructure and solutions.</p>
          </div>
          <div className="mt-6 md:mt-0 anim-uni-in-up">
            <Link className="inline-flex items-center justify-center border-2 border-foreground/10 hover:border-foreground/30 text-foreground transition-all rounded-full px-6 py-3 md:px-8 md:py-4 w-full sm:w-auto group/btn" href="/partners">
              <span className="font-bold text-sm md:text-base tracking-wide">Show All Our Partners</span>
              <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 ml-2 md:ml-3 shrink-0 transform transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
            </Link>
          </div>
        </div>

        <div className="mxd-block">
          <div className="container-fluid px-0">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="anim-uni-in-up"
                >
                  <div className="bg-white dark:bg-white/5 rounded-3xl p-8 flex items-center justify-center shadow-sm border border-neutral-100 dark:border-white/10 hover:shadow-md hover:border-neutral-200 dark:hover:border-white/20 transition-all duration-300 h-[180px] md:h-[220px] group">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        className="object-contain p-2 md:p-6 grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 dark:opacity-50 group-hover:opacity-100 dark:group-hover:opacity-100 scale-95 group-hover:scale-100 dark:invert dark:group-hover:invert-0"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
