'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Cloud, Shield, Server, Zap, Globe, Database, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

const solutions = [
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    slug: 'cloud-migration',
    description: 'Comprehensive cloud migration, management, and optimization services',
    features: ['AWS & Azure', 'Hybrid Cloud'],
    color: 'from-blue-600/20 to-blue-400/5',
    iconColor: 'text-blue-400',
    image: '/media/real/cloud_migration.jpg',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    slug: 'cybersecurity',
    description: 'Advanced threat protection and security compliance solutions',
    features: ['Threat Detection', 'Audits'],
    color: 'from-red-600/20 to-red-400/5',
    iconColor: 'text-red-400',
    image: '/media/real/cybersecurity.jpg',
  },
  {
    icon: Server,
    title: 'Infrastructure',
    slug: 'infrastructure',
    description: 'Robust IT infrastructure design, implementation, and management',
    features: ['Network Design', 'Servers'],
    color: 'from-emerald-600/20 to-emerald-400/5',
    iconColor: 'text-emerald-400',
    image: '/media/real/infrastructure.jpg',
  },
  {
    icon: Zap,
    title: 'Digital Transformation',
    slug: 'cloud-migration',
    description: 'Modernize your business processes with cutting-edge technology',
    features: ['Automation', 'Strategy'],
    color: 'from-amber-600/20 to-amber-400/5',
    iconColor: 'text-amber-400',
    image: '/media/real/digital_transformation.jpg',
  },
  {
    icon: Database,
    title: 'Data Management',
    slug: 'cloud-migration',
    description: 'Comprehensive data strategy, analytics, and management solutions',
    features: ['Analytics', 'Optimization'],
    color: 'from-purple-600/20 to-purple-400/5',
    iconColor: 'text-purple-400',
    image: '/media/real/network_solutions.jpg',
  },
  {
    icon: Globe,
    title: 'Managed Services',
    slug: 'infrastructure',
    description: '24/7 IT support and management for your entire technology stack',
    features: ['24/7 Support', 'Monitoring'],
    color: 'from-teal-600/20 to-teal-400/5',
    iconColor: 'text-teal-400',
    image: '/media/real/data_management.jpg',
  }
]

export default function Solutions() {
  return (
    <section id="solutions" className="mxd-section padding-blog bg-background/50">
      <div className="mxd-container grid-container">

        {/* Section Title */}
        <div className="mxd-block">
          <div className="mxd-section-title pre-grid">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-12 col-xl-5 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrtitle">
                    <h2 className="reveal-type anim-uni-in-up">Comprehensive<br />IT Solutions</h2>
                  </div>
                </div>
                <div className="col-12 col-xl-4 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrdescr">
                    <p className="anim-uni-in-up">From cloud migration to cybersecurity, we provide end-to-end IT solutions that drive business growth and operational excellence.</p>
                  </div>
                </div>
                <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrcontrols anim-uni-in-up">
                    <Link className="btn btn-anim btn-default btn-outline slide-right-up" href="/contact">
                      <span className="btn-caption">Get Consultation</span>
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="mxd-block">
          <div className="mxd-blog-preview">
            <div className="container-fluid p-0">
              <div className="row g-0">
                {solutions.map((solution, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="col-12 col-xl-4 mxd-blog-preview__item mxd-grid-item animate-card-3 group"
                  >
                    <Link className="mxd-blog-preview__media block relative overflow-hidden" href={`/solutions/${solution.slug}`}>
                      {/* Real Image with Gradient Overlay */}
                      <div className="mxd-blog-preview__image blog-preview-image-1 parallax-img-small relative h-[300px] overflow-hidden">
                        <Image
                          src={solution.image}
                          alt={solution.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className={cn("absolute inset-0 bg-gradient-to-t opacity-70", solution.color)} />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
                      </div>

                      <div className="mxd-preview-hover">
                        <i className="mxd-preview-hover__icon flex items-center justify-center">
                          <ArrowRight className="w-6 h-6 text-white" />
                        </i>
                      </div>

                      <div className="mxd-blog-preview__tags top-4 left-4 absolute">
                        {solution.features.map((feature, idx) => (
                          <span key={idx} className="tag tag-default tag-permanent bg-background/80 backdrop-blur text-xs mr-2 mb-2">{feature}</span>
                        ))}
                      </div>
                    </Link>
                    <div className="mxd-blog-preview__data p-6">
                      <Link className="anim-uni-in-up block" href={`/solutions/${solution.slug}`}>
                        <div className="flex items-center gap-3 mb-3">
                          <div className={cn("p-2 rounded-lg bg-white/5 border border-white/10", solution.iconColor)}>
                            <solution.icon className="w-5 h-5" />
                          </div>
                          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{solution.title}</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">{solution.description}</p>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
