'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const partners = [
  {
    id: 1,
    name: 'Microsoft',
    logo: '/img/microsoft-logo-300x300.png',
  },
  {
    id: 2,
    name: 'Dell Technologies',
    logo: '/img/Dell-Emc-e1588863410145-367x367.png',
  },
  {
    id: 3,
    name: 'VMware',
    logo: '/img/Vmware-logo-300x300.png',
  },
  {
    id: 4,
    name: 'Fortinet',
    logo: '/img/Fortinet-300x300.png',
  },
  {
    id: 5,
    name: 'Broadcom',
    logo: '/img/Broadcom-367x367.png',
  },
  {
    id: 6,
    name: 'SecPod',
    logo: '/img/secpod-2-300x300.png',
  },
]

const vendors = [
  {
    id: 1,
    name: 'Mozilla',
    logo: '/img/brands/mozilla.svg',
  },
  {
    id: 2,
    name: 'Logitech',
    logo: '/img/brands/logitech.svg',
  },
  {
    id: 3,
    name: 'Ghost Gaming',
    logo: '/img/brands/ghostgaming.svg',
  },
  {
    id: 4,
    name: 'Gearbox',
    logo: '/img/brands/gearbox.svg',
  },
  {
    id: 5,
    name: 'Udemy',
    logo: '/img/brands/udemy.svg',
  },
  {
    id: 6,
    name: 'Envato',
    logo: '/img/brands/envato.svg',
  }
]

export default function PartnersGrid() {
  return (
    <>
      {/* --- Partners Section --- */}
      <div className="mxd-section padding-default bg-secondary/5">
        <div className="mxd-container grid-container">

          {/* Partners Header */}
          <div className="mxd-block mb-12">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-12 mxd-grid-item no-margin text-center">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 reveal-type anim-uni-in-up">Strategic Partners</h2>
                  <p className="max-w-2xl mx-auto text-muted-foreground anim-uni-in-up">
                    We collaborate with industry leaders to deliver world-class solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Partners Logos Grid */}
          <div className="mxd-block">
            <div className="container-fluid p-0">
              <div className="row g-0 justify-center">
                {partners.map((partner, index) => (
                  <motion.div
                    key={partner.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="col-6 col-md-4 col-lg-2 mxd-grid-item"
                  >
                    <div className="aspect-square flex items-center justify-center p-6 bg-white dark:bg-white/5 border border-border/50 radius-m hover:border-primary/30 transition-all duration-300 group">
                      <div className="relative w-full h-full grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100">
                        <Image
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          fill
                          className="object-contain"
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

      {/* --- Vendors Section --- */}
      <div className="mxd-section padding-default">
        <div className="mxd-container grid-container">

          {/* Vendors Header */}
          <div className="mxd-block mb-12">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-12 mxd-grid-item no-margin text-center">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 reveal-type anim-uni-in-up">Trusted Vendors</h2>
                  <p className="max-w-2xl mx-auto text-muted-foreground anim-uni-in-up">
                    Providing top-tier hardware and software components for your infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Vendors Logos Grid */}
          <div className="mxd-block">
            <div className="container-fluid p-0">
              <div className="row g-0 justify-center">
                {vendors.map((vendor, index) => (
                  <motion.div
                    key={vendor.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="col-6 col-md-4 col-lg-2 mxd-grid-item"
                  >
                    <div className="aspect-video flex items-center justify-center p-6 bg-secondary/5 border border-border/50 radius-m hover:border-primary/30 transition-all duration-300 group">
                      <div className="relative w-full h-full grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100">
                        <Image
                          src={vendor.logo}
                          alt={`${vendor.name} logo`}
                          fill
                          className="object-contain"
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
    </>
  )
}
