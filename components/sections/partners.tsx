'use client'

import React from 'react'
import Image from 'next/image'

const partners = [
  { name: 'Microsoft', logo: '/img/microsoft-logo-300x300.png' },
  { name: 'Dell EMC', logo: '/img/Dell-Emc-e1588863410145-367x367.png' },
  { name: 'Fortinet', logo: '/img/Fortinet-300x300.png' },
  { name: 'Broadcom', logo: '/img/Broadcom-367x367.png' },
  { name: 'VMware', logo: '/img/Vmware-logo-300x300.png' },
  { name: 'SecPod', logo: '/img/secpod-2-300x300.png' },
  { name: 'Angular', logo: '/img/brands/angular.svg' },
  { name: 'Ghost', logo: '/img/brands/ghostgaming.svg' },
]

export default function Partners() {
  return (
    <div className="mxd-section overflow-hidden">
      <div className="mxd-container grid-container">
        <div className="mxd-block">
          <div className="container-fluid px-0">
            <div className="row gx-0">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="col-6 col-md-3 mxd-grid-item anim-uni-in-up"
                >
                  <div className="rounded-[2rem] p-8 flex items-center justify-center hover:shadow-lg transition-shadow duration-300" style={{ minHeight: '220px', backgroundColor: 'var(--base-tint)' }}>
                    <div className="relative w-full" style={{ height: '120px' }}>
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        className="object-contain p-4 grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
