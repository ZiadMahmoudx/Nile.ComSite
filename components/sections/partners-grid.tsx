'use client'

import Image from 'next/image'
import { Star, Award, Shield, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

const partners = [
  {
    id: 1,
    name: 'Microsoft Azure',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    tier: 'Gold Partner',
    certifications: ['Azure Expert', 'Security Specialist'],
    expertise: 95,
    projects: 150,
    description: 'Advanced cloud solutions and enterprise services',
  },
  {
    id: 2,
    name: 'Amazon Web Services',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
    tier: 'Advanced Partner',
    certifications: ['Solutions Architect', 'DevOps Engineer'],
    expertise: 92,
    projects: 200,
    description: 'Comprehensive cloud infrastructure and migration',
  },
  {
    id: 3,
    name: 'VMware',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Vmware.svg',
    tier: 'Principal Partner',
    certifications: ['vSphere Expert', 'NSX Specialist'],
    expertise: 88,
    projects: 120,
    description: 'Virtualization and hybrid cloud solutions',
  },
  {
    id: 4,
    name: 'Dell Technologies',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg',
    tier: 'Titanium Partner',
    certifications: ['Infrastructure Specialist', 'Storage Expert'],
    expertise: 90,
    projects: 180,
    description: 'Enterprise hardware and infrastructure solutions',
  },
  {
    id: 5,
    name: 'Fortinet',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Fortinet_logo.svg',
    tier: 'Expert Partner',
    certifications: ['Security Fabric', 'NSE Certified'],
    expertise: 94,
    projects: 90,
    description: 'Next-generation cybersecurity solutions',
  },
  {
    id: 6,
    name: 'Oracle',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg',
    tier: 'Platinum Partner',
    certifications: ['Database Expert', 'Cloud Architect'],
    expertise: 87,
    projects: 110,
    description: 'Enterprise database and cloud applications',
  }
]

const getTierIcon = (tier: string) => {
  if (tier.includes('Gold') || tier.includes('Platinum') || tier.includes('Titanium')) {
    return <Award className="h-4 w-4 text-yellow-500" />
  }
  if (tier.includes('Expert') || tier.includes('Principal')) {
    return <Star className="h-4 w-4 text-purple-500" />
  }
  return <Shield className="h-4 w-4 text-blue-500" />
}

export default function PartnersGrid() {
  return (
    <>
      {/* Partners Grid Section */}
      <div className="mxd-section padding-default bg-secondary/5">
        <div className="mxd-container grid-container">

          {/* Section Header */}
          <div className="mxd-block">
            <div className="mxd-section-title pre-grid">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                    <div className="mxd-section-title__hrtitle">
                      <h2 className="reveal-type anim-uni-in-up">Certified<br />Excellence</h2>
                    </div>
                  </div>
                  <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                    <div className="mxd-section-title__hrdescr">
                      <p className="anim-uni-in-up">
                        We maintain the highest level partnerships with industry leaders, ensuring our clients
                        receive cutting-edge solutions backed by world-class expertise and support.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Partners Cards */}
          <div className="mxd-block">
            <div className="container-fluid p-0">
              <div className="row g-0">
                {partners.map((partner, index) => (
                  <motion.div
                    key={partner.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="col-12 col-md-6 col-xl-4 mxd-grid-item"
                  >
                    <div className="bg-card border border-border/50 radius-m overflow-hidden h-full group hover:border-primary/20 transition-all duration-300">
                      {/* Logo Area */}
                      <div className="p-8 flex items-center justify-center border-b border-border/30 bg-secondary/5 relative overflow-hidden">
                        <div className="relative w-full h-16 group-hover:scale-110 transition-transform duration-300">
                          <Image
                            src={partner.logo || "/placeholder.svg"}
                            alt={`${partner.name} logo`}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 space-y-5">
                        <div className="text-center">
                          <h3 className="text-xl font-bold mb-2">{partner.name}</h3>
                          <div className="flex items-center justify-center gap-2">
                            {getTierIcon(partner.tier)}
                            <span className="tag tag-default tag-permanent text-xs">{partner.tier}</span>
                          </div>
                        </div>

                        <p className="text-sm text-muted-foreground text-center">{partner.description}</p>

                        {/* Expertise Bar */}
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Expertise Level</span>
                            <span className="font-semibold text-primary">{partner.expertise}%</span>
                          </div>
                          <div className="w-full h-2 rounded-full bg-secondary/30 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${partner.expertise}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: index * 0.1 }}
                              className="h-full rounded-full bg-primary"
                            />
                          </div>
                        </div>

                        {/* Certifications */}
                        <div className="space-y-2">
                          <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Certifications</h4>
                          <div className="flex flex-wrap gap-2">
                            {partner.certifications.map((cert, certIndex) => (
                              <span
                                key={certIndex}
                                className="tag tag-default tag-permanent text-[10px] bg-primary/5 border border-primary/20"
                              >
                                {cert}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Projects */}
                        <div className="flex items-center justify-between pt-4 border-t border-border/30">
                          <span className="text-sm text-muted-foreground">Projects Completed</span>
                          <span className="font-bold text-primary text-lg">{partner.projects}+</span>
                        </div>
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
